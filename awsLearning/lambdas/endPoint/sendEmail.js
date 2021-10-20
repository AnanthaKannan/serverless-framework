const response = require('../utility/API_Responses');
const AWS = require('aws-sdk');

const SES = new AWS.SES();

exports.handler = async event => {
    
	const { to, from, subject, text } = JSON.parse(event.body);

	const params = {
        Destination: {
            ToAddresses: [to]
        },
        Message:{
            Body:{
                Text: { Data: text}
            },
            Subject: { Data: subject}
        },
        Source: from
	};
    try{
    await SES.sendEmail(params).promise();
    return response._200()
    }
    catch(e){
        return response._400({e})
    }

}