const AWS = require('aws-sdk');
const s3Client = new AWS.S3();
const get = async event => {

}

const write = async (data, fileName, bucket) => {
    
    const params = {
        Bucket: bucket,
        Body: JSON.stringify(data),
        Key: fileName
    }

    const newData = await s3Client.putObject(params).promise();

    if(!newData){
        throw Error('there was an error')
    }
    return newData;
}

module.exports = {
    get,
    write
}