exports.handler = (event, context, callback) => {
    try {
        // throw new Error('Test step 2 failure')
        console.log('step 2 logging');
        console.log(event)
        const count = 50;
        const data = []
        for (let i = 0; i < count; i++) data.push({id: i+1})
        const obj = {
            data,
        }
        callback(null, obj)
    } catch (e) {
        throw e
    }
}