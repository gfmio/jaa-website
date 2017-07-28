
export interface IRedisProps {
  host: string;
  port: number;
}

export class RedisProps implements IRedisProps {
  public host: string;
  public port: number;

  constructor(props: Partial<IRedisProps>) {
    this.host = props.host || process.env.REDIS_HOST || "localhost";
    this.port = props.port || Number(process.env.REDIS_PORT) || 6379;
  }
}
