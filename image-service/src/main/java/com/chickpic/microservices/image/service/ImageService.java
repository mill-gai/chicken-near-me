package com.chickpic.microservices.image.service;

import com.chickpic.microservices.image.dto.ImageRequest;
import com.chickpic.microservices.image.dto.ImageResponse;
import com.chickpic.microservices.image.model.Image;
import com.chickpic.microservices.image.repository.ImageRepository;
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
    @Value("${amazon.s3.bucket-name}")
    private String bucketName;
    private final S3Client s3Client;
    private final ImageRepository imageRepository;

//    public void uploadImage(ImageRequest imageRequest, byte[] bytes, String fileName) {
    public String uploadImage(ImageRequest imageRequest, byte[] bytes, String fileName) {
        fileName = generateFileName(fileName);
        try {
            PutObjectRequest putOb = PutObjectRequest.builder()
                    .bucket(bucketName)
                    .key(fileName)
                    .build();
            Image image = Image.builder()
                    .title(imageRequest.title())
                    .description(imageRequest.description())
                    .country(imageRequest.country())
                    .city(imageRequest.city())
                    .fileName(fileName)
                    .build();

            s3Client.putObject(putOb, RequestBody.fromBytes(bytes));
            imageRepository.save(image);
            return "Image uploaded successfully";
        } catch (S3Exception e) {
            System.err.println(e.awsErrorDetails().errorMessage());
//            throw new RuntimeException(e);
            throw new RuntimeException("Failed to upload image", e);
        }
    }

    private String generateFileName(String fileName) {
        return new Date().getTime() + fileName;
    }
}
