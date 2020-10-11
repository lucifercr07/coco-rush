package com.cocorush.service;

import java.util.List;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.cocorush.config.MongoConfig;
import com.cocorush.entity.Order;

@Service
public class OrderServiceImpl implements OrderService {
	private static final String ORDER_COLLECTION_NAME = "orders";

	@Autowired
	private MongoTemplate mongoTemplate;
	
	@SuppressWarnings("resource")
	private OrderServiceImpl() {
		ApplicationContext ctx = new AnnotationConfigApplicationContext(MongoConfig.class);
		mongoTemplate = (MongoTemplate) ctx.getBean("mongoTemplate");

		if (!mongoTemplate.collectionExists(Order.class)) {
            mongoTemplate.createCollection(Order.class);
        }
	}
	
	public Order create(Order order) {
		mongoTemplate.save(order, ORDER_COLLECTION_NAME);
		return order;
	}

	@Override
	public void update(Order Order) {
		// TODO Auto-generated method stub
		
	}


	@Override
	public void delete(Order Order) {
		// TODO Auto-generated method stub
		
	}


	@Override
	public void deleteAll() {
		// TODO Auto-generated method stub
		
	}


	@Override
	public Order find(Order Order) {
		// TODO Auto-generated method stub
		return null;
	}


	@Override
	public List<Order> findAll() {
		return mongoTemplate.findAll(Order.class);
	}

}
