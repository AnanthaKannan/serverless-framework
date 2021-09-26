const response = require('../utility/API_Responses');
const Dynamo = require('../utility/dynamo')
const tableName = process.env.tableName;
const { v4 } = require('uuid');
var convert = require('xml-js');



exports.handler = async event => {

    console.log('init event')
    // 
    const xml = event.body; 
    // const cvtData = convert.xml2json(xml, {compact: false, spaces: 4});
    
    // const user = JSON.parse(cvtData);
    
    const user = { xml }
    user.ID = `EMP${v4()}`;
    console.log('data', user)
    
    const newUser = await Dynamo.write(user, tableName)
                    .catch(err => {
                        console.log('writing error', err);
                        return null
                    })
    
    if(!newUser){
        return response._400({message: `Failed to write user by ID ${ID} in the Table ${tableName}`})
    }

    return response._200(user);
}
