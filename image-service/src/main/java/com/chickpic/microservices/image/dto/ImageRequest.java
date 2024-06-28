package com.chickpic.microservices.image.dto;

import java.io.File;

public record ImageRequest(String name, String description, String location) {
}
