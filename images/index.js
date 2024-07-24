const bcrypt = require('bcrypt')

exports.handler = (event, context, callback) => {
    try {
        console.log('Inside it')
        console.log(event)
        bcrypt.hash('Harry Potter', 10)
            .then((hash) => {
                const obj = {
                    "message": "This is from docker function",
                    "data": hash
                }
                callback(null, obj)
            })
            .catch((e) => {
                throw e
            })
    } catch (e) {
        callback(null, {
            error: true,
            message: "Error"
        })
    }
}
