const response = require('../utility/API_Responses');
const S3 = require('../utility/S3')
const bucket = process.env.bucketName;

exports.handler = async event => {

    if (!event.pathParameters || !event.pathParameters.fileName) {
        return response._400({message: 'missing path'})
    }

    const fileName = event.pathParameters.fileName;
    const data = JSON.parse(event.body);

    const newData = await S3.write(data, fileName, bucket)
                    .catch(err => {
                        console.log('writing error in S3', err);
                        return null
                    })
    
    if(!newData){
        return response._400({message: `Failed to write the ${fileName}`})
    }

    return response._200(newData);
}
