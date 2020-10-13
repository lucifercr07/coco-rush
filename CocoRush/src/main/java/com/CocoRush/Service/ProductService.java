package com.CocoRush.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.CocoRush.entity.Product;
import com.CocoRush.repository.ProductRepository;

@Service
public class ProductService {
	@Autowired
	ProductRepository repository;

	public List<Product> getAllProduct(String category) {
		// TODO Auto-generated method stub
		//List <Product> allProducts = repository.findAll();
//		List <Product> allProducts = repository.findProductByName(category);
		List <Product> allProducts = repository.findProductByCategoryName(category);
//		List <Product> allProducts = repository.findByCategoryNameIn(category);
		return allProducts;
	}

	public List<Product> getFeaturedProducts() {
		// TODO Auto-generated method stub
		//boolean t= true;
		List<Product> products=repository.findProductByFeatured(true);
		return products;
	}

	//ye ek hi product baar baar bhej dega
	public Set<Product> getProductByCategories(String[] categories) {
		// TODO Auto-generated method stub
		Set<Product> products = new HashSet<Product>();
		for(int i=0; i<categories.length;i++) {
			List<Product> prod=repository.findProductByCategoryName(categories[i]);
			products.addAll(prod);
		}
		return products;
	}

}
