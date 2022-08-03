package com.beGOOD.beGOOD.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.beGOOD.beGOOD.helper.VehiclePlate;
import com.beGOOD.beGOOD.model.NumberPlateType;
import com.beGOOD.beGOOD.model.Vehicle;
import com.beGOOD.beGOOD.repository.VehicleRepository;

@Service
public class VehicleService {

	@Autowired
	VehicleRepository vehicleRepository;

	// register
	public boolean addVehicleInfo(Vehicle vehicle) {

		Vehicle existingVehicle = vehicleRepository.findByVehicleNumber(vehicle.getVehicleNumber());

		if (existingVehicle != null) {
			return false;
		} else {
			vehicleRepository.save(vehicle);
			return true;
		}
	}

	// get all vehicles
	public List<Vehicle> findAllVehicles() {
		List<Vehicle> vehicleList = vehicleRepository.findAll();
		return vehicleList;
	}

	// find vehicle by id
	public Vehicle findVehicle(String id) {
		Vehicle vehicle = vehicleRepository.findById(id);
		if (vehicle != null) {
			return vehicle;

		} else {
			return null;
		}
	}

	// update vehicle
	public boolean updateVehicle(Vehicle vehicle) {
		Vehicle existingvehicle = vehicleRepository.findById(vehicle.getId());
		if (existingvehicle != null) {
			if (vehicle.getChassisNumber().trim().length() > 0) {
				existingvehicle.setChassisNumber(vehicle.getChassisNumber());
			}
			if (vehicle.getEngineNumber().trim().length() > 0) {
				existingvehicle.setEngineNumber(vehicle.getEngineNumber());
			}
			if (vehicle.getFuel() != null) {
				existingvehicle.setFuel(vehicle.getFuel());
			}
			if (vehicle.getManufacturer().trim().length() > 0) {
				existingvehicle.setManufacturer(vehicle.getManufacturer());
			}
			if (vehicle.getVehicleType() != null) {
				existingvehicle.setVehicleType(vehicle.getVehicleType());
			}
			if (!(vehicle.getVehicleNumber().equals(existingvehicle.getVehicleNumber()))) {
				//
				NumberPlateType numberPlateType = VehiclePlate.checkVersion(vehicle.getVehicleNumber());
				existingvehicle.setVehicleVersion(numberPlateType);
				existingvehicle.setVehicleNumber(vehicle.getVehicleNumber());
			}

			vehicleRepository.save(existingvehicle);

			return true;
		} else {
			return false;
		}
	}

	// delete vehicle
	public boolean deleteVehicle(Vehicle vehicle) {
		Vehicle existingvehicle = vehicleRepository.findById(vehicle.getId());
		if (existingvehicle != null) {
			vehicleRepository.delete(existingvehicle);
			return true;
		} else {
			return false;
		}

	}

}
