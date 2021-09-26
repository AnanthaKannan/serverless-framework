const response = require('../utility/API_Responses');
const Dynamo = require('../utility/dynamo')
const tableName = process.env.tableName;
const { v4 } = require('uuid');


exports.handler = async event => {

	const data = JSON.parse(event.body);
	const orgId = v4();
	data.PK = `ORG#${orgId}`;
	data.SK = `#METADATA#${orgId}`
	data.org_id = orgId;

	console.log('data', data)
	const newUser = await Dynamo.write(data, tableName)
		.catch(err => {
			console.log('writing error', err);
			return null
		})
    
	if(!newUser){
		return response._400({message: `Failed to write user by ID ${data.ID} in the Table ${tableName}`})
	}

	return response._200(data);
}
