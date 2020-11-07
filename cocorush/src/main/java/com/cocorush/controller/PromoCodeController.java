package com.cocorush.controller;

import java.util.HashMap;
import java.util.Map;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.cocorush.entity.PromoCode;
import com.cocorush.service.PromoCodeService;

@RestController
public class PromoCodeController {
	private final static Logger logger = LoggerFactory.getLogger(PromoCodeController.class);

	@Autowired
	PromoCodeService promoCodeService;

	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/promocode")
	@PreAuthorize("hasRole('ADMIN')")
	public PromoCode createPromoCode(@Valid @RequestBody PromoCode promoCodeObject) {
		PromoCode response = promoCodeService.createPromoCode(promoCodeObject);
		return response;
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/promocode")
	public @ResponseBody ResponseEntity<Object> getPromoCode(@RequestParam(required = true) String code) {
		if (code == null) {
			logger.info("No promocode specified");
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}

		logger.info("PromoCode query params received: " + code);
		PromoCode responsePromoCode = promoCodeService.findPromoCode(code);
		return ResponseEntity.ok(responsePromoCode);
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@DeleteMapping("/promocode/{code}")
	@PreAuthorize("hasRole('ADMIN')")
	public @ResponseBody ResponseEntity<Object> removePromoCode(@PathVariable String code) {
		if (code == null) {
			logger.info("No promocode specified");
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}

		logger.info("PromoCode query params received: " + code);
		promoCodeService.deletePromoCode(code);
		return ResponseEntity.ok("PromoCode removed successfully");
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
