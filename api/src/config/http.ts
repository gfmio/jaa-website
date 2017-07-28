
export interface IHttpProps {
  enabled: boolean;
  host: string;
  port: number;
}

export class HttpProps implements IHttpProps {
  public enabled: boolean = false;
  public host: string = "localhost";
  public port: number = 3001;

  constructor(props: Partial<IHttpProps>) {
    this.enabled = props.enabled || this.enabled;
    this.host = props.host || process.env.HTTP_HOST || this.host;
    this.port = props.port || Number(process.env.HTTP_PORT) || this.port;
  }
}
