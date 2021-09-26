const response = require('../utility/API_Responses');
const Dynamo = require('../utility/dynamo')
const tableName = process.env.tableName;

exports.handler = async event => {
    if (!event.pathParameters || !event.pathParameters.ID) {
        return response._400({message: 'missing path'})
    }

    const body = JSON.parse(event.body);
    const ID = event.pathParameters.ID;
    const Key = { PK : `ORG#${ID}`,  SK: `METADATA#${ID}` };
    const query = queryGen(body);
    // const UE = 'set #tire = :tire , #org_id = :org_id, #name = :name';
    // const EAV = {
    //     ':tire': body.tire,
    //     ':org_id': body.org_id,
    //     ':name': body.name
    // }
    // const EAN = {
    //     '#tire': 'tire',
    //     '#org_id': 'org_id',
    //     '#name': 'name'
    // }

    const UE = query.updateExpression;
    const EAV = query.expressionAttributeValues;
    const EAN = query.ExpressionAttributeNames;

    const result = await Dynamo.update({TableName : tableName, Key, UE, EAV, EAN})
                .catch(err => {
                    console.log('err', err)
                    return null;
                });
    
    if(!result){
        return response._400({message: ''})
    }

    return response._200(result);
}


const queryGen = (body) => {
    let updateExpression = 'set'
    let expressionAttributeValues = {}
    let ExpressionAttributeNames = {}
    for (const key in body) {
      updateExpression += ` #${key} = :${key}, `; 
      expressionAttributeValues[`:${key}`] = body[key];
      ExpressionAttributeNames[`#${key}`] = `${key}`;
    }
    updateExpression = updateExpression.slice(0, -2);
    return { updateExpression, expressionAttributeValues, ExpressionAttributeNames}
  }