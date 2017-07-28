
export interface IJsonReponseProps {
  statusCode: number;
  result: any;
  errors: any[];
}

export class JsonResponse implements IJsonReponseProps {
  public statusCode: number = 200;
  public result: any = {};
  public errors: any[] = [];

  constructor(props: Partial<IJsonReponseProps>) {
    this.statusCode = props.statusCode || this.statusCode;
    this.result = props.result || this.result;
    this.errors = props.errors || this.errors;
  }

  public send(res: any) {
    res.status(this.statusCode).type("application/json").json(this as IJsonReponseProps);
  }
}
