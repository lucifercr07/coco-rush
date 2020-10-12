package com.cocorush.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.cocorush.entity.Order;

public interface OrderRepository extends MongoRepository<Order, String> {
}
