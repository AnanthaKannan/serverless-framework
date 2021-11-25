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

const getObject = (param) => {
    return new Promise((resolve, reject) => {
        s3Client.getObject(param,(err,data) => {
            if(err) reject(err)
            resolve(data)
        })
    })   
}

const listObjectsV2 = (param) =>
{
    return new Promise((resolve, reject) => {
        s3Client.listObjectsV2(param,(err,data) => {
            if(err) reject(err)
            resolve(data)
        })
    })
}

const listObjectVersions = (param) =>
{
    return new Promise((resolve, reject) => {
        s3Client.listObjectVersions(param,(err,data) => {
            if(err) reject(err)
            resolve(data)
        })
    })   
}

module.exports = {
    get,
    write,
    getObject,
    listObjectsV2,
    listObjectVersions
}