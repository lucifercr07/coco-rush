package com.cocorush.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.cocorush.service.ProductService;
import com.cocorush.entity.Product;
import com.cocorush.exception.ProductNotFoundException;

@RestController
public class ProductController {

	private final static Logger logger = LoggerFactory.getLogger(ProductController.class);

	@Autowired
	ProductService productService;

	@PostMapping("/product")
	public Product createProduct(@Valid @RequestBody Product item) {
		Product response = productService.createProduct(item);
		return response;
	}

	@GetMapping("/product")
	public @ResponseBody List<Product> getProducts(@RequestParam(required = false) List<String> category,
			@RequestParam(required = false) Boolean featured) {
		if (category != null && category.size() != 0) {
			logger.info("Category query params received: " + category.toString());
			return productService.findProductByCategoryName(category);
		}

		if (featured == null) {
			logger.info("No features mentioned, getting all products.");
			return productService.getProducts();
		}

		if (featured) {
			return productService.findFeaturedProducts(true);
		}

		return productService.findFeaturedProducts(false);
	}

	@GetMapping(value = "/product/{id}")
	public ResponseEntity<?> getProduct(@PathVariable String id) {
		if (id == null) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}

		Product item = productService.findProductById(id).orElseThrow(() -> new ProductNotFoundException());
		return ResponseEntity.ok(item);
	}

	@PutMapping(value = "product/{id}")
	public ResponseEntity<?> updateProduct(@PathVariable String id, @Valid @RequestBody Product updatedItem) {
		if (id == null) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}

		Product item = productService.findProductById(id).orElseThrow(() -> new ProductNotFoundException());
		Product response = productService.updateProduct(updatedItem);
		return ResponseEntity.ok(response);
	}

	@ResponseStatus(HttpStatus.BAD_REQUEST)
	@ExceptionHandler(MethodArgumentNotValidException.class)
	public Map<String, String> handleValidationExceptions(MethodArgumentNotValidException ex) {
		Map<String, String> errors = new HashMap<>();
		ex.getBindingResult().getAllErrors().forEach((error) -> {
			String fieldName = ((FieldError) error).getField();
			String errorMessage = error.getDefaultMessage();
			errors.put(fieldName, errorMessage);
		});
		return errors;
	}
}
