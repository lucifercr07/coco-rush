package com.MongoImage.controller;

import java.io.IOException;
import java.util.Base64;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.MongoImage.Service.ImageService;
import com.MongoImage.entity.Image;

@RestController
public class ImageController {
	@Autowired
	ImageService service;

	@PostMapping("/photos/add")
	public String addPhotos(@RequestParam("title") String title, @RequestParam("Image") MultipartFile image) throws IOException {
		String id = service.addPhoto(title, image);
		return "redirect:/photos/" + id;
	}
	
//	@PostMapping("/photos/add")
//	public String addImage(@RequestBody Image image) {
//		service.addImage(image);
//		return null;
//	}

	@GetMapping("/photos/{id}")
	public Optional<Image> getPhoto(@PathVariable String id, Model model) {
		Optional<Image> image = service.getPhoto(id);
//		model.addAttribute("title", image.getTitle());
//		model.addAttribute("image", Base64.getEncoder().encodeToString(image.getImage().getData()));
		//String title= image.getTitle();
		return image;
	}
	
	
}
