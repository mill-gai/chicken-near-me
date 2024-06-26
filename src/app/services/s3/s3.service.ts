import { Injectable } from '@angular/core';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'

const S3_MEDIA_BUCKET = {
  BUCKET: '',
  ACCESS_KEY: '',
  SECRET_KEY: ''
};

@Injectable({
  providedIn: 'root'
})
export class S3Service {
  s3: S3Client;

  constructor() { 
    this.s3 = new S3Client({
      region: 'us-east-2',
      credentials: {
        accessKeyId: S3_MEDIA_BUCKET.ACCESS_KEY,
        secretAccessKey: S3_MEDIA_BUCKET.SECRET_KEY
      }
    })
  }

  uploadImage(file: File){
    const params = {
      Bucket: S3_MEDIA_BUCKET.BUCKET,
      Key: file.name,
      Body: file,
      ContentType: file.type
    }
   
    this.s3.send(new PutObjectCommand(params));
  }
}
