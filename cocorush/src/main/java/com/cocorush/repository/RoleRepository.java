package com.cocorush.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.cocorush.entity.ERole;
import com.cocorush.entity.Role;

public interface RoleRepository extends MongoRepository<Role, String> {
	Optional<Role> findByName(ERole name);
}
