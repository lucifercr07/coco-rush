package com.cocorush.entity;

import org.bson.types.Binary;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Images")
public class Image {
	@Id
	private String ID;
	
	private String title;
	
	private Binary  image;

	public Image(String title) {
		// TODO Auto-generated constructor stub
	}

	public String getID() {
		return ID;
	}

	public void setID(String iD) {
		ID = iD;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Binary getImage() {
		return image;
	}

	public void setImage(Binary image) {
		this.image = image;
	}

	@Override
	public String toString() {
		return "Image [ID=" + ID + ", title=" + title + ", image=" + image + "]";
	}
	
	

}
