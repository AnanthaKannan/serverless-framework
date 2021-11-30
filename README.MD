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


### need to know
1. cron job
2. elastic search
3. lambda layer understand


