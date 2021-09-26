const response = require('../utility/API_Responses');

exports.handler = async event => {
    console.log('event', event)
    if (!event.pathParameters || !event.pathParameters.ID) {
        return response._400({message: 'missing path'})
    }

    const data = getMyData();
    const ID = event.pathParameters.ID;
    return response._200(data[ID]);
}

const getMyData = () => {
    return [
        {
            name: "kannan"
        },
        {
            name: "sree"
        },
        {
            name: "yahoo"
        }
    ]
}