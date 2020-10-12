package com.cocorush.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.cocorush.entity.Item;

public interface ItemRepository extends MongoRepository<Item, String> {

}
