import aws from "aws-sdk";
import * as dotenv from 'dotenv';
dotenv.config()
aws.config.update({
    secretAccessKey: process.env.Secret_Access_Key,
    accessKeyId: process.env.Access_Key_ID,
    region: "us-east-2",
});
const s3 = new aws.S3();


export  const uploadtos3 = async (buffer:Buffer,filename:string) =>{
      try{
        let params = {
            ACL: 'public-read',
            Bucket: process.env.BUCKET_NAME,
            Body: buffer,
            Key: `${Date.now()}${filename}`

        }
        let response = await s3.upload(params).promise()
        if (!response.Location) {
            return `${filename} could not be uploaded`
        }
        return response
      }catch(err){
          console.log(err)
      }
    }
