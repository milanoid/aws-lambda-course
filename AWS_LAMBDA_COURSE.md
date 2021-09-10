# build, package, deploy, clean up

## build

`sam build`

## package

S3 bucket needed. To create one run `aws s3 --region eu-central-1 mb s3://learning-lambda-sam-project-milanoid`.

Actual package:

`sam package --template-file template.yaml --output-template-file packaged.yaml --s3-bucket <NAME-OF-THE-BUCKET>`


## deploy

`am deploy --region eu-central-1 --capabilities CAPABILITY_IAM --template-file packaged.yaml --stack-name sam-project`


## clean up

`aws cloudformation delete-stack --stack-name sam-project`

When redeploying a new ARN and endpoint URLs will be generated.