package com.cocorush.service;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cocorush.controller.ProductController;
import com.cocorush.entity.Product;
import com.cocorush.repository.ProductRepository;

@Service
public class ProductService {
	private static final String PRODUCTS_DATABASE_NAME = "products";
	private final static Logger logger = LoggerFactory.getLogger(ProductService.class);

	@Autowired
	ProductRepository productRepository;

	public Product createProduct(Product product) {
		productRepository.save(product);
		return product;
	}

	public List<Product> getProducts() {
		return productRepository.findAll();
	}

	public Optional<Product> findProductById(String id) {
		return productRepository.findById(id);
	}

	public Product updateProduct(Product updatedProduct) {
		return productRepository.save(updatedProduct);
	}
	
	public List<Product> findProductByName(String name) {
		return productRepository.findProductByName(name);
	}
	
	public List<Product> findProductByCategoryName(List<String> categoryName) {
		logger.info("categoryName: " + categoryName);
		return productRepository.findByCategoryNameContaining(categoryName);
	}
}
