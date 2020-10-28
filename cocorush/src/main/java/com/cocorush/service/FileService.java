package com.cocorush.service;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.bson.BsonBinarySubType;
import org.bson.types.Binary;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.cocorush.entity.Files;
import com.cocorush.entity.Product;
import com.cocorush.repository.FilesRepository;

@Service
public class FileService {
	
	private final static Logger logger = LoggerFactory.getLogger(FileService.class);

	@Autowired
	ProductService productService;

	@Autowired
	FilesRepository filesRepository;

	public String addFile(String productId, String fileName, MultipartFile uploadedFile) throws IOException {
		Files file = new Files(fileName, productId);
		file.setFile(new Binary(BsonBinarySubType.BINARY, uploadedFile.getBytes()));
		file = filesRepository.insert(file);
		String fileId = file.getID();
		
		// Updating image id in corresponding product object
		Optional<Product> product = productService.findProductById(productId);
		Product savedProduct = product.get();
		List<String> existingFiles;
		
		if (savedProduct.getProductImageIds() != null) {
			existingFiles = savedProduct.getProductImageIds();
			existingFiles.add(fileId);	
		} else {
			logger.info("No files exist currently");
			existingFiles = Arrays.asList(fileId);
		}
		
		savedProduct.setProductImageIds(existingFiles);
		Product updatedProduct = productService.updateProduct(savedProduct);
		logger.info("Updated product is: " + updatedProduct.toString());
		
		return fileId;
	}

	public Optional<Files> getFile(String fileId) {
		return filesRepository.findById(fileId);
	}
}
