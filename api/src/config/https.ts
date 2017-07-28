
import { HttpProps, IHttpProps } from "./http";

export interface IHttpsProps extends IHttpProps {
  privateKeyFile: string;
  certificateFile: string;
}

export class HttpsProps extends HttpProps implements IHttpsProps {
  public privateKeyFile: string;
  public certificateFile: string;

  constructor(props: Partial<IHttpsProps>) {
    super(props);
    this.host = props.host || process.env.HTTPS_HOST || this.host;
    this.port = props.port || Number(process.env.HTTPS_PORT) || this.port;
    this.privateKeyFile = props.privateKeyFile || process.env.HTTPS_PRIVATE_KEY_FILE || "";
    this.certificateFile = props.certificateFile || process.env.HTTPS_CERTIFICATE_FILE || "";
  }
}
