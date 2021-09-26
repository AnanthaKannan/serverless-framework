const response = require('../utility/API_Responses');
const Dynamo = require('../utility/dynamo')
const tableName = process.env.tableName;

exports.handler = async event => {

    const orgId = event.pathParameters.orgId;

    const params = {
        TableName: tableName,
        KeyConditionExpression: '#PK = :PK and begins_with(#SK, :SK)',
        ExpressionAttributeNames: {'#PK': 'PK', '#SK': 'SK'},
        ExpressionAttributeValues: {
            ':PK': `ORG#${orgId}`,
            ':SK': 'PRO#'
        }
    }
    const user = await Dynamo.query(params)
                .catch(err => {
                    console.log('err', err)
                    return null;
                });
    
    return response._200(user);
}
