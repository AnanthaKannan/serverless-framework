const response = require('../utility/API_Responses');
const fileType = require('file-type');
// const S3 = require('../utility/S3');
const uuid = require('uuid');
const AWS = require('aws-sdk');

const S3 = new AWS.S3();
const bucket = process.env.bucketName;
const region = process.env.region;

const allowMimes = ['image/jpeg', 'image/png', 'image/jpg'];

exports.handler = async event => {
    try{
        const body = JSON.parse(event.body);
        if(!body || !body.image || !body.mime){
            return response._400({ message: "incorrect body"})
        }

        if(!allowMimes.includes(body.mime)){
            return response._400({ message: "mime not allowed"})
        }

        let imageData = body.image;
        if(body.image.substr(0, 7) === 'base64,'){
            imageData = body.image.substr(7, body.image.length);
        }

        const buffer = Buffer.from(imageData, 'base64');
        const fileInfo = await fileType.fromBuffer(buffer);
        const detectExt = fileInfo.ext;
        const detectMime = fileInfo.mime;

        if(detectMime !== body.mime){
            return response._400({ message: "mime not match"})
        }

        const name = uuid();
        const key = `${name}.${detectExt}`;
        await S3.putObject({
            Body: buffer,
            Key: key,
            ContentType: body.mime,
            Bucket: bucket,
            ACL: 'public-read'
        });

    const url = `https://${bucket}.s3-${region}.amazon.com/${key}`
    return response._200({
        imageUrl: url
    })
    }
    catch(e){
        console.log("error", e)
        return response._400({
            e
        })
    }
}