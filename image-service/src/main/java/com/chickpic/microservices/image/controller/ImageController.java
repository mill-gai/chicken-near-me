package com.chickpic.microservices.image.controller;

import com.chickpic.microservices.image.dto.ImageRequest;
import com.chickpic.microservices.image.dto.ImageResponse;
import com.chickpic.microservices.image.service.ImageService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/image")
@RequiredArgsConstructor
public class ImageController {

    private final ImageService imageService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
//    public void uploadImage(@RequestBody ImageRequest imageRequest, @RequestPart(value = "file") MultipartFile file) {
    public void uploadImage(@RequestParam(value = "file") MultipartFile file) {
        try {
            byte[] bytes = file.getBytes();
            String filename = file.getOriginalFilename();
//            imageService.uploadImage(imageRequest, bytes, filename);
            imageService.uploadImage(bytes, filename);

        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

}
