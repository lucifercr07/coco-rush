package com.CocoRush.Service;

import java.io.IOException;
import java.util.Optional;

import org.bson.BsonBinarySubType;
import org.bson.types.Binary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.CocoRush.entity.Image;
import com.CocoRush.repository.PhotoRepository;

@Service
public class ImageService {
	@Autowired
	PhotoRepository repository;

	public String addPhoto(String title, MultipartFile file) throws IOException {

		Image image = new Image(title);
		image.setImage(new Binary(BsonBinarySubType.BINARY, file.getBytes()));
		image = repository.insert(image);
		return image.getID();

	}
	public String addImage(Image image) {
		repository.insert(image);
		return "inserted";
	}
	
	public Optional<Image> getPhoto(String ID) {
		return repository.findById(ID);
		
	}
}
