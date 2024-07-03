package com.chickpic.microservices.image.dto;

public record ImageRequest(String title, String description, double lat, double lng) {
}
