package com.chickpic.microservices.image.service;

import com.chickpic.microservices.image.dto.ImageRequest;
import com.chickpic.microservices.image.dto.ImageResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;
import software.amazon.awssdk.services.s3.model.S3Exception;

import java.util.Date;

@Service
@RequiredArgsConstructor
public class ImageService {
    private final S3Client s3Client;
    @Value("${amazon.s3.bucket-name}")
    private String bucketName;


//    public void uploadImage(ImageRequest imageRequest, byte[] bytes, String fileName) {
    public String uploadImage(byte[] bytes, String fileName) {
        fileName = generateFileName(fileName);
        try {
            PutObjectRequest putOb = PutObjectRequest.builder()
                    .bucket(bucketName)
                    .key(fileName)
                    .build();
            s3Client.putObject(putOb, RequestBody.fromBytes(bytes));
            return fileName;
        } catch (S3Exception e) {
            System.err.println(e.awsErrorDetails().errorMessage());
            throw new RuntimeException(e);
        }
    }

    private String generateFileName(String fileName) {
        return new Date().getTime() + fileName;
    }
}
