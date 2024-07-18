exports.handler = (event, context, callback) => {
    try {
        console.log('Map function');
        console.log(event)
        const obj = {
            message: 'Map success'
        }
        callback(null, obj)
    } catch (e) {
        throw e
    }
}