const AWS = require('aws-sdk');
const stepfunctions = new AWS.StepFunctions({
    region: 'ap-south-1'
});

const params = {
  stateMachineArn: process.env.STATE_ARN,
  input: JSON.stringify({
    key1: 'value1',
    key2: 'value2'
  })
};


exports.handler = (event, context, callback) => {
    try {
        console.log('init logging');
        console.log(event)
        stepfunctions.startExecution(params, (err, data) => {
            if (err) {
                console.log(err)
                callback(null, {
                    body: JSON.stringify({
                        error: true
                    }),
                    statusCode: 200
                })
            } else {
                callback(null, {
                    body: JSON.stringify({
                        error: false
                    }),
                    statusCode: 400
                })
            }
          });
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