package com.CocoRush.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.CocoRush.entity.Order;

public interface OrderRepository  extends MongoRepository<Order, String> {

}
