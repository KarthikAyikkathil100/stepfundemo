exports.handler = (event, context, callback) => {
    try {
        console.log('Handling uploads');
        console.log(event)
        console.log(event.Records[0])
        callback(null, {
            body: JSON.stringify({
                data: event.Records[0]
            }),
            statusCode: 200
        })
    } catch (e) {
        throw e
    }
}