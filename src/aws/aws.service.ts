import { Injectable } from '@nestjs/common';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';

@Injectable()
export class AwsService {
  private s3 = new S3Client({
    region: 'us-west-2',
    credentials: {
      accessKeyId: process.env.accesskey_bucket as string,
      secretAccessKey: process.env.secretkey_bucket as string,
    }
  })
  async uploadFile(file: Express.Multer.File){
    const key = file.originalname
    const bucket = "nest-occso-test"
    const command = new PutObjectCommand({
        Key: key,
        Body: file.buffer,
        Bucket: bucket,
    })
    const response = await this.s3.send(command);
    console.log(response);
    return response;
  }
}
