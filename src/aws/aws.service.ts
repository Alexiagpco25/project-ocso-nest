import { Injectable } from '@nestjs/common';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';

@Injectable()
export class AwsService {
  private s3 = new S3Client({
    region: 'us-east-1',
    credentials: {
      accessKeyId: process.env.accesskey_bucket as string,
      secretAccessKey: process.env.secretkey_bucket as string,
    }
  })
  async uploadFile(file: Express.Multer.File){
    const key = file.originalname
    const url = `https://nest-occso-test.s3.amazonaws.com/${key}`
    const bucket = "nest-occso-test"
    const command = new PutObjectCommand({
        Key: key,
        Body: file.buffer,
        Bucket: bucket,
    })
 await this.s3.send(command);
 return url;
  }
}
