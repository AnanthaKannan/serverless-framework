const response = require('../utility/API_Responses');
const Dynamo = require('../utility/dynamo');

exports.handler = async event => {
    console.log('init')
    const params = {
        TableName: process.env.tableName,
        KeyConditionExpression: 'Username = :username',
        // ExpressionAttributeNames: {'#PK': 'PK', '#SK': 'SK'},
        ExpressionAttributeValues: {
            ':username': 'Chennai'
        }
    }
    console.log('params')
    const user = await Dynamo.query(params)
                .catch(err => {
                    console.log('err', err)
                    return null;
                });
    
    return response._200(user);
}

// exports.handler = async event => {
//     const data = getMyData();
//     return response._200(data);

// }

// const getMyData = () => {
//     return [
//         {
//             name: "kannan"
//         },
//         {
//             name: "sree"
//         },
//         {
//             name: "yahoo"
//         }
//     ]
// }