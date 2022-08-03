package com.beGOOD.beGOOD.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.beGOOD.beGOOD.model.Customer;

public interface CustomerRepository extends MongoRepository<Customer, Integer> {

	Customer findByUserEmail(String userEmail);

	Customer findById(String id);

}
