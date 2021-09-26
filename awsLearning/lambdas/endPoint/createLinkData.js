const response = require('../utility/API_Responses');
const Dynamo = require('../utility/dynamo')
const tableName = process.env.tableName;
const { v4 } = require('uuid');


exports.handler = async event => {

	const data = JSON.parse(event.body);

    const sendData = {
        PK: `ORG#${data.orgId}#PRO#${data.proId}`,
        SK: `ORG#${data.orgId}#EMP#${data.empId}`,
        name: data.name,
        project: data.projectName,
        date_of_join: new Date().toUTCString()
    }

	const newUser = await Dynamo.write(sendData, tableName)
		.catch(err => {
			console.log('writing error', err);
			return null
		})
    
	if(!newUser){
		return response._400({message: `Failed to write user by ID ${data.ID} in the Table ${tableName}`})
	}

	return response._200(newUser);
}
