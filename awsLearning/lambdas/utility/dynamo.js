require('dotenv').config();
const AWS = require('aws-sdk');

let options = {};
if(process.env.IS_OFFLINE){
	options = {
		accessKeyId: process.env.AWS_ACCESS_KEY_ID,
		secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
		region: 'us-east-1' 
	};
}

const documentClient = new AWS.DynamoDB.DocumentClient(options);

const get = async (Key, TableName) => {
	console.log('Key', Key);
	//assume Key = { ID: "XXXXXXX" }
	const params = {
		TableName,
		Key
	};
	console.log('params', params)
	const data = await documentClient
		.get(params)
		.promise();
	console.log('data', data.Item);
	return data.Item;
};

const write = async (data, TableName) => {
    
	const params = {
		TableName,
		Item: data
	};
	// console.log("options", options)
	console.log('params', params)
	const res = await documentClient.put(params).promise();
	return res;
}

const update = async ({TableName, Key, UE, EAV, EAN, RV='ALL_NEW'}) => {
	//assume Key = { ID: "XXXXXXX" }
	const params = {
		TableName,
		Key,
		UpdateExpression: UE,
		ExpressionAttributeValues: EAV,
		ExpressionAttributeNames: EAN,
		ReturnValues: RV
	}
	console.log('params', params)
	const res = await documentClient.update(params).promise();
	return res.Attributes;
}

const remove = async (Key, TableName) => {
	const params = {
		Key,
		TableName
	}
	console.log('params', params);
	const res = await documentClient.delete(params).promise();
	return res;
}

const query = async(params) => {
	console.log('params', params)
	const res = await documentClient.query(params).promise();
	console.log('result', res)
	return res.Items;
}

module.exports = {
	get,
	write,
	update,
	remove,
	query
}