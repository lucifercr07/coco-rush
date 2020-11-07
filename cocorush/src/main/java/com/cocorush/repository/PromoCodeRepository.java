package com.cocorush.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.cocorush.entity.PromoCode;

public interface PromoCodeRepository extends MongoRepository<PromoCode, String> {
	@Query("{ 'code' : ?0 }")
	PromoCode findPromoCode(String code);
}
