exports.handler = async event => {

    const body = JSON.parse(event.body);

    const AttributeParams = {
        attribute:{
            DefaultSMSType: 'Promotional'
        }
    };

    const messageParams = {
        Message: body.message,
        PhoneNumber: body.phone
    }
}