module.exports = {
    tables: [
        {
         'TableName': 'myTestTable',
         'KeySchema':[
             {
                'AttributeName': 'ID',
                'KeyType': 'HASH'
             }
         ],
         'AttributeDefinitions': [
             {
                'AttributeName': 'ID',
                'AttributeType': 'S'
             }
         ],
         'ProvisionedThroughput':{
            'ReadCapacityUnits': 1,
            'WriteCapacityUnits': 1
         }   
        }
    ]
}