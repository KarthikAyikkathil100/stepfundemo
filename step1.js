const parser = require('lambda-multipart-parser');
const xlsx = require('node-xlsx').default;
const aws = require('aws-sdk');
const s3 = new aws.S3({ region: 'ap-south-1' });

// async function getSheetFromS3() {
//     return new Promise(async (resolve, reject) => {
//         try {
//             const data = await s3.getObject({
//                 Bucket: 'media.demo.test',
//                 Key: 'excel_sample.xls',
//             }).promise()
//             resolve(data)
//         } catch (e) {
//             console.log(e)
//             reject(e);
//         }
//     })
// }
// async function saveToS3(dataBuff) {
//     return new Promise(async (resolve, reject) => {
//         try {
//             await s3.putObject({
//                 Bucket: 'media.demo.test',
//                 Key: 'excel_sample.xls',
//                 Body: dataBuff
//             }).promise()
//             resolve()
//         } catch (e) {
//             reject(e)
//         }
        
//     })
// }

// module.exports.handler = async (event, context) => {
//     console.log('event -> ', event)
//     try {
//         const dataBuf = await getSheetFromS3();
//         console.log(dataBuf);
//         const data = xlsx.parse(dataBuf.Body)
//         const realData = data[0].data;
//         console.log(data);
//         const newData = [];
//         newData.push(realData[0]); // headers from existing sheet
//         newData.push(realData[1]); // this will be the new data

//         const newBuff = xlsx.build([
//             {
//                 name: 'excel_sample.xls',
//                 data: newData
//             }
//         ])

//         await saveToS3(newBuff)

//         return {
//             statusCode: 201,
//             body: JSON.stringify({
//                 data: data[0].data
//             })
//         };
//     }
//     catch (e) {
//         console.log(e)
//         return {
//             statusCode: 500
//         }
//     }
// };



// module.exports.handler = async (event, context) => {
//     console.log('event -> ', event)
//     try {
//         const result = await parser.parse(event);
//         console.log(result.files);
//         const data = xlsx.parse(result.files[0].content)
//         console.log(data[0])
//         return {
//             statusCode: 201,
//             body: JSON.stringify({
//                 data: data[0].data
//             })
//         };
//     }
//     catch (e) {
//         console.log(e)
//         return {
//             statusCode: 500
//         }
//     }
// };


// const parseMultipartFormData = async event => {
//     return new Promise((resolve, reject) => {
//       const parser = new Multipart(event);
  
//       parser.on("finish", result => {
//         resolve({ fields: result.fields, files: result.files });
//       });
  
//       parser.on("error", error => {
//         return reject(error);
//       });
//     });
//   };


exports.handler = (event, context, callback) => {
    try {
        console.log('step 1 logging');
        console.log(event)
        const obj = {
            "key1": "value1"
        }
        callback(null, obj)
    } catch (e) {
        throw e
    }
}