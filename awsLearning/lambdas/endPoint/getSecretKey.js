const AWS = require('aws-sdk');
const options = {
    region: 'us-east-1' 
}
const sm = new AWS.SecretsManager(options);

const getSecrets = async(SecretId) => {
    return await new Promise((resolve, reject) => {
        sm.getSecretValue({ SecretId}, (err, result) => {
            if(err) reject(err)
            else resolve(result.SecretString)
        });
    })
}

const main = async event => {
    const secretName = 'testSecretKey'; //'arn:aws:secretsmanager:us-east-1:427071052786:secret:testSecretKey-7e5IcZ'
    const result = await getSecrets(secretName);
    console.log('result', result);

    return {
        statusCode: 200,
        secret: result
    }
}

exports.handler = main;