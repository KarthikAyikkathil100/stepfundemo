exports.handler = (event, context, callback) => {
    try {
        // throw new Error('Test step 2 failure')
        console.log('Last step logging');
        console.log(event)
        const obj = {
            message: 'Success last step'
        }
        callback(null, obj)
    } catch (e) {
        throw e
    }
}