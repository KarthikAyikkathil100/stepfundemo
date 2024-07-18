exports.handler = async (event, context, callback) => {
    try {
        console.log('Map function');
        console.log(event)
        const res = await mockHeavyOperation(event)
        callback(null, res)
    } catch (e) {
        console.log('Error in map => ', e)
        throw e
    }
}

async function mockHeavyOperation(obj) {
    return new Promise(async (resolve, reject) => {
        try {
            setTimeout(() => {
                console.log(obj)
                resolve({
                    id: obj.id * 100
                })
            }, 3000);
        } catch (e) {
            reject(e)
        }
    })
}