package com.cocorush.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.cocorush.entity.Product;

public interface ProductRepository extends MongoRepository<Product, String> {
	List<Product> findByCategoryNameContaining(List<String> categoryName);

	@Query("{ 'name' : ?0 }")
	List<Product> findProductByName(String name);
	
	@Query(value="{ 'featured' : ?0 } }")
	List<Product> findFeaturedProducts(Boolean isFeatured);
}
