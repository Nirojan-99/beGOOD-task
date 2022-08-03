package com.beGOOD.beGOOD.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.beGOOD.beGOOD.model.Vehicle;

public interface VehicleRepository extends MongoRepository<Vehicle, Integer> {

	Vehicle findByVehicleNumber(String vehicleNumber);

	Vehicle findById(String id);
}
