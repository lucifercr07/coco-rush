package com.cocorush.controller;

import java.io.IOException;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.cocorush.service.FileService;
import com.cocorush.service.ProductService;
import com.cocorush.entity.Files;
import com.cocorush.entity.Product;
import com.cocorush.exception.ProductNotFoundException;

@RestController
public class FileController {

	private final static Logger logger = LoggerFactory.getLogger(FileController.class);

	@Autowired
	ProductService productService;

	@Autowired
	FileService fileService;

	@PostMapping("/files")
	public ResponseEntity<?> addPhotos(@RequestParam("productId") String productId, @RequestParam("name") String fileName,
			@RequestParam("file") MultipartFile uploadedFile) throws IOException {
		logger.info("Product Id is: " + productId);
		if (productId == null) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}
		
		Product item = productService.findProductById(productId).orElseThrow(() -> new ProductNotFoundException());
		String id = fileService.addFile(productId, fileName, uploadedFile);
		return ResponseEntity.ok("{ \"id\" : " + id + " }");
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/files/{id}")
	public Optional<Files> getPhoto(@PathVariable String id) {
		logger.info("File id is: " + id);
		Optional<Files> file = fileService.getFile(id);
		return file;
	}
}
