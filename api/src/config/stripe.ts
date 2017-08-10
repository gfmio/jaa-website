
export interface IStripeProps {
  secretKey: string;
}

export class StripeProps implements IStripeProps {
  public secretKey: string;

  constructor(props: Partial<IStripeProps>) {
    this.secretKey = props.secretKey || process.env.STRIPE_SECRET_KEY || "";
  }
}
