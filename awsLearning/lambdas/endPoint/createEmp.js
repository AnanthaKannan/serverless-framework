const response = require('../utility/API_Responses');
const Dynamo = require('../utility/dynamo')
const tableName = process.env.tableName;
const { v4 } = require('uuid');


exports.handler = async event => {

	const data = JSON.parse(event.body);
	data.PK = `ORG#${data.orgId}`;
	const id_ = v4();
	data.SK = `EMP#${id_}`;

    const sendData = {
        PK: data.PK,
        SK: data.SK,
        name: data.name,
        email: data.email
    }

	const newUser = await Dynamo.write(sendData, tableName)
		.catch(err => {
			console.log('writing error', err);
			return null
		})
    
	if(!newUser){
		return response._400({message: `Failed to write user by ID ${data.ID} in the Table ${tableName}`})
	}

	return response._200({id: id_});
}
