package com.cocorush.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.cocorush.entity.Image;

@Repository
public interface PhotoRepository extends MongoRepository<Image, String> {

}
