package com.MongoImage.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.MongoImage.entity.Image;

@Repository
public interface PhotoRepository extends MongoRepository<Image, String> {

}
