exports.handler = (event, context, callback) => {
    try {
        console.log('Step 1 error handling');
        console.log(event)
        const obj = {
            message: 'Step 1 error handled'
        }
        callback(null, {
            body: JSON.stringify(obj),
            statusCode: 200
        })
    } catch (e) {
        console.log(e)
        const obj = {
            error: 'Something went wrong'
        }
        callback(null, {
            body: JSON.stringify(obj),
            statusCode: 500
        })
    }
}