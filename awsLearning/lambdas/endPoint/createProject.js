const response = require('../utility/API_Responses');
const Dynamo = require('../utility/dynamo')
const tableName = process.env.tableName;
const { v4 } = require('uuid');


exports.handler = async event => {

	const data = JSON.parse(event.body);
    const projectId = v4();

    data.PK = `ORG#${data.orgId}`
    data.SK = `PRO#${data.projectType}#${projectId}`;
    data.project_id = projectId;

    const { PK, SK, project_id, name } = data;
    const sendData = {
        PK, SK, project_id, name
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
