package com.CocoRush.repository;

import java.util.Collection;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.CocoRush.entity.Product;

public interface ProductRepository extends MongoRepository<Product, String> {
//	@Query("{ 'category' :{$in:[ ?0] }")
//	List<Product> findProductByCategoryNameIn(String category);
	
	@Query(value = " { 'categoryName' : { $in{categoryName: ?0 }} } ")
	   List<Product> findProductByCategoryName(String name);
	
	
	
	@Query("{ 'name' : ?0 }")
	List<Product> findProductByName(String name);
	
	@Query("{'featured': ?0}")
	List<Product> findProductByFeatured(boolean featured); 
	
	
//	@Query("{ 'category' : ?0 }")
//	List<Product> findProductBycategoryName(String category);
	List<Product> findByCategoryNameIn(Collection name);
	
	@Query(value = " { 'categoryName' : { $in[categoryName: ?0 ]} } ")
	   List<Product> findProductByCategoryNames(String name);
}
