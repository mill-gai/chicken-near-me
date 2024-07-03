package com.chickpic.microservices.location.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Location {
    @Id
    private String id;
    private String country;
    private String city;
    private double lat;
    private double lng;
}
