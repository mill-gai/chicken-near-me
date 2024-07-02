package com.chickpic.microservices.location.service;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.mongodb.core.MongoTemplate;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class LocationService {
    @Autowired
    private MongoTemplate mongoTemplate;

    private List<Document> generateMongoDocs(List<String> lines) {
        List<Document> docs = new ArrayList<Document>();
        for (String line : lines) {
            docs.add(Document.parse(line));
        }
        return docs;
    }

//    private void insertMongoDocs(String collection, List<Document> docs) {
    private void insertMongoDocs(String collection, List<String> json) {
        try {
            List<Document> docs = generateMongoDocs(json);
            mongoTemplate.insert(docs, collection);
        } catch (DataIntegrityViolationException e) {
            System.out.println(e.getMessage());
        }
    }


}
