
import { JsonResponse } from "../actions/json-response";

export const genericResponder = (statusCode: number, errors: any[]) =>
  (body: any = {}) => ((req: any, res: any) => {
    (new JsonResponse({ statusCode, errors, result: body })).send(res);
  });

export const Responders: any = {
  ok: genericResponder(200, []),
  badRequest: genericResponder(400, ["bad request"]),
  unauthorized: genericResponder(401, ["unauthorized"]),
  forbidden: genericResponder(403, ["forbidden"]),
  notFound: genericResponder(404, ["not found"]),
  methodNotAllowed: genericResponder(405, ["method not allowed"]),
  gone: genericResponder(410, ["gone"]),
  serverError: genericResponder(500, ["internal server error"]),
  notImplemented: genericResponder(501, ["not implemented"]),
};

export enum HttpVerb {
  get,
  post,
  put,
  patch,
  delete,
}

export const DbResponders: any = {
  attach: (app: any, model: any, collection: boolean, method: HttpVerb) => {
    const verb: string = HttpVerb[method];

    if (collection) {
      const uri = model.props.uri;
      app[verb](uri, DbResponders.collection[verb](model));
    } else {
      const uri = model.props.uri + "/:id";
      app[verb](uri, DbResponders.item[verb](model));
    }
  },
  collection: {
    delete: (model: any) => Responders.notImplemented(),
    get: (model: any) => ((req: any, res: any) => {
      model.model.find({}, [], {}, (err: any, results: any[]) => {
        if (err) {
          (new JsonResponse({ statusCode: 400, errors: [ err ], result: {} })).send(res);
        } else {
          (new JsonResponse({ statusCode: 200, errors: [], result: results })).send(res);
        }
      });
    }),
    patch: (model: any) => Responders.notImplemented(),
    post: (model: any) => ((req: any, res: any) => {
      const newObject = new model.model(req.body);

      newObject.save((err: any) => {
        if (err) {
          (new JsonResponse({ statusCode: 400, errors: [ err ], result: {} })).send(res);
        } else {
          (new JsonResponse({ statusCode: 201, errors: [], result: newObject })).send(res);
        }
      });
    }),
    put: (model: any) => Responders.notImplemented(),
  },
  item: {
    delete: (model: any) => Responders.notImplemented(),
    get: (model: any) => Responders.notImplemented(),
    patch: (model: any) => Responders.notImplemented(),
    post: (model: any) => Responders.methodNotAllowed(),
    put: (model: any) => Responders.notImplemented(),
  },
};
