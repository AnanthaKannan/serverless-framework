const response = {
	_defineResponses(statusCode = 502, data = {}){
		return{
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Methods': '*',
				'Access-control-Allow-Origin': '*'
			},
			statusCode,
			body: JSON.stringify(data)
		}
	},
	_200(data){
		return this._defineResponses(200, data)
	},
	_400(data){
		return this._defineResponses(400, data)
	}
}

module.exports = response;