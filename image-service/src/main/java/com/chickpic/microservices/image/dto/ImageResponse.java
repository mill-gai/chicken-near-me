package com.chickpic.microservices.image.dto;

public record ImageResponse(String name, String description, String location, String fileUrl) {
}
