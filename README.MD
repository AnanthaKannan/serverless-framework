## To add the credential
serverless config credentials --provider aws --key XXXXXXXXXXX --secret XXXXXXXXX --profile serverlessUser

## To create a project
### node js
serverless create --template aws-nodejs --path serverlessProject
### Type script
sls create --template aws-nodejs-typescript --path aws-ts-api

## It will deploy the file
sls deploy
sls deploy function -f functionName

## To remove all the process
sls remove

## npm
serverless-webpack
webpack


----------------------------
# Run Local
need to install below mention npm

    1. serverless-offline
    2. serverless-dynamodb-local

### To install the dynamoDB local
    sls dynamo install
    https://www.oracle.com/java/technologies/javase-jre8-downloads.html

## Run the server in offline
    sls offline start --location .

### Cloud formation
https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html


 -
### CLI comment AWS

*List Bucket*<br/>
aws s3 ls

*Removes objects that have the key name prefix doc, for example, doc/doc1 and doc/doc2* <br/>
aws s3 rm s3://bucket-name/doc --recursive
aws s3 rm s3://userscrud-dev-serverlessdeploymentbucket-1ujwuz4yeumtc  --recursive
