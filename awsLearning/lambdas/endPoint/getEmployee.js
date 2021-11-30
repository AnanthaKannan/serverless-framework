const response = require('../utility/API_Responses');
const Dynamo = require('../utility/dynamo');

exports.handler = async event => {
    console.log('init')
    const SK = `EMP#${event.pathParameters.ID}`;
    const params = {
        TableName: process.env.tableName,
        KeyConditionExpression: 'SK = :SK and PK = :PK',
        // ExpressionAttributeNames: {'#PK': 'PK', '#SK': 'SK'},
        ExpressionAttributeValues: {
            ':SK': SK,
            ':PK': "ORG#ff87e3e2-0792-49dd-b892-882f6f1bddbc"
        }
    }
    console.log('params', params)
    const user = await Dynamo.query(params)
                .catch(err => {
                    console.log('err', err)
                    return null;
                });
    
    return response._200(user);
}