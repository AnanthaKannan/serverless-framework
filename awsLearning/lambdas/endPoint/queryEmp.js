const response = require('../utility/API_Responses');
const Dynamo = require('../utility/dynamo')
const TableName = process.env.tableName;

exports.handler = async event => {

    const beginID = 'ORG';
    const KCE = 'begins_with(ID, :id)'
    const EAV = {
        ':id': 'ORG'
    }

    const result = await Dynamo.query({TableName, KCE, EAV})
                .catch(err => {
                    console.log('err', err)
                    return null;
                });
    
    // if(!result){
    //     return response._400({message: `Failed to get result by ID ${Key.ID} in the Table ${tableName}`})
    // }

    return response._200(result);
}
