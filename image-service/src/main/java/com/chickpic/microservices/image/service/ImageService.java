package com.chickpic.microservices.image.service;

import com.chickpic.microservices.image.dto.ImageRequest;
import com.chickpic.microservices.image.dto.ImageResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;
import java.util.Date;

@Service
@RequiredArgsConstructor
public class ImageService {
    private final S3Client s3Client;
    @Value("${amazon.s3.bucket-name}")
    private String bucketName;


//    public void uploadImage(ImageRequest imageRequest, byte[] bytes, String fileName) {
    public void uploadImage(byte[] bytes, String fileName) {
        PutObjectRequest putOb = PutObjectRequest.builder()
                        .bucket(bucketName)
                        .key(generateFileName(fileName))
                        .build();
        s3Client.putObject(putOb, RequestBody.fromBytes(bytes));
    }

    private String generateFileName(String fileName) {
        return new Date().getTime() + fileName;
    }
}
