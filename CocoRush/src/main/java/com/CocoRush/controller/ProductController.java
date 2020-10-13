package com.CocoRush.controller;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.CocoRush.Service.ProductService;
import com.CocoRush.entity.Product;

@RestController
//@RequestMapping(value = "p")
public class ProductController {
	
	@Autowired
	ProductService service;
	
	@RequestMapping(value="/get",method=RequestMethod.GET)
	public ResponseEntity<List<Product>> getproducts(@RequestParam ("category") String category ){
		List<Product> product=service.getAllProduct(category);
		return new ResponseEntity<List<Product>>(product,HttpStatus.OK);
		
	}
	
	@GetMapping(value="/categoriesProduct")
	public ResponseEntity<Set<Product>> getProductByCategories(@RequestBody String categories[]){
		Set<Product> products =service.getProductByCategories(categories);
		return new ResponseEntity<Set<Product>>(products, HttpStatus.OK);
		
	}
	
	@GetMapping(value="/featuredProducts")
	public ResponseEntity<List<Product>> getFeaturedProducts(){
		List<Product> product=service.getFeaturedProducts();
		return new ResponseEntity<List<Product>>(product,HttpStatus.OK);
	}

}
