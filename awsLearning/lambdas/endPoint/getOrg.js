const response = require('../utility/API_Responses');
const Dynamo = require('../utility/dynamo')
const tableName = process.env.tableName;

exports.handler = async event => {
    console.log('event', event)


    const orgId = event.pathParameters.orgId;
    const key = {
        PK: `ORG#${orgId}`,
        SK: `#METADATA#${orgId}`
    }
    const user = await Dynamo.get(key, tableName)
                .catch(err => {
                    console.log('err', err)
                    return null;
                });
    
    return response._200(user);
}
