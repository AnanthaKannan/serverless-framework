const response = require('../utility/API_Responses');
const wrapper = require('../utility/S3')

const bucket = 'learning-2025'  //process.env.bucketName;

exports.handler = async event => {
    return wrapper.listObjectsV2({ Bucket: bucket, MaxKeys: 1000 })
    .then(data => { 
        let tasks = []
        for(let i = 0; i < data.Contents.length; i++)
        {
            tasks.push(wrapper.listObjectVersions({ Bucket: bucket, Prefix: data.Contents[i].Key })) 
        }
        return Promise.resolve(tasks)
    })
    .then(async tasks => {
        return Promise.all(tasks).then(res => {
            response.body = JSON.stringify(res)  
            return Promise.resolve(response) 
        })
    })
    .catch(error => {
        response.statusCode = 500        
        response.body = JSON.stringify(error)  
        return Promise.resolve(response) 
    });
   

}