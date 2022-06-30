import { Stack, StackProps, Duration } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as sqs from 'aws-cdk-lib/aws-sqs';

// eslint-disable-next-line import/prefer-default-export
export class BirthdayculatorApiStack extends Stack {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(scope: Construct, id: string, props?: StackProps) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    const queue = new sqs.Queue(this, 'BirthdayculatorApiQueue', {
      visibilityTimeout: Duration.seconds(300),
    });
  }
}
