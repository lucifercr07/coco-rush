package com.MongoImage.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.MongoImage.entity.Order;

public interface OrderRepository  extends MongoRepository<Order, String> {

}
