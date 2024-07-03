package com.chickpic.microservices.image.dto;

public record ImageResponse(String title, String description, double lat, double lng, String fileName) {
}
