package com.cocorush.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cocorush.entity.PromoCode;
import com.cocorush.repository.PromoCodeRepository;

@Service
public class PromoCodeService {
	private final static Logger logger = LoggerFactory.getLogger(PromoCodeService.class);

	@Autowired
	PromoCodeRepository promoCodeRepository;

	public PromoCode createPromoCode(PromoCode promoCode) {
		logger.info("PromoCode value: " + promoCode.toString());
		promoCode.setUsageCount(0);
		promoCodeRepository.save(promoCode);
		return promoCode;
	}

	public List<PromoCode> getProducts() {
		return promoCodeRepository.findAll();
	}

	public PromoCode findPromoCode(String code) {
		return promoCodeRepository.findPromoCode(code);
	}

	public void deletePromoCode(String code) {
		PromoCode promoCodeObject = promoCodeRepository.findPromoCode(code);
		promoCodeRepository.delete(promoCodeObject);
		return;
	}
}
