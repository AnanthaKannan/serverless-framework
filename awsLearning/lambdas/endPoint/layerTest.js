// const dateFn = require('date-fn');
const response = require('../utility/API_Responses');

// if the file inside the layer you should use like this
// const response = require('/opt/utility/API_Responses');

exports.handler = event => {
    const date = new Date(); //dateFn.date(new Date(), 143);
    console.log('date', date)
    
    return response._200({date});
}