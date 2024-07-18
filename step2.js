exports.handler = (event, context, callback) => {
    try {
        // throw new Error('Test step 2 failure')
        console.log('step 2 logging');
        console.log(event)
        const obj = {
            "data": [1,2,3,4]
        }
        callback(null, obj)
    } catch (e) {
        throw e
    }
}