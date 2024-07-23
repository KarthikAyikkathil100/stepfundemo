exports.handler = (event, context, callback) => {
    try {
        console.log(event)
        const obj = {
            "message": "This is from docker function"
        }
        callback(null, obj)
    } catch (e) {
        callback(null, {
            error: true,
            message: "Error"
        })
    }
}