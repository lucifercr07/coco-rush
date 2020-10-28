package com.cocorush.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.cocorush.entity.Files;

@Repository
public interface FilesRepository extends MongoRepository<Files, String> {

}
