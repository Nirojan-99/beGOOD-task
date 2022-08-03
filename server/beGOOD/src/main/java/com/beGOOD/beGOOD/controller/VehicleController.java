package com.beGOOD.beGOOD.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.repository.Update;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.beGOOD.beGOOD.helper.VehiclePlate;
import com.beGOOD.beGOOD.model.NumberPlateType;
import com.beGOOD.beGOOD.model.Vehicle;
import com.beGOOD.beGOOD.response.ResponseModel;
import com.beGOOD.beGOOD.service.VehicleService;
import com.beGOOD.beGOOD.status.ResponseCode;

@RestController
@RequestMapping("/vehicles")
public class VehicleController {

	@Autowired
	private VehicleService vehicleService;

	@PostMapping("")
	public ResponseModel registerVehicle(@RequestBody Vehicle vehicle) {

		// format vehicle number
		vehicle.setVehicleNumber(VehiclePlate.formatVehicleNumber(vehicle.getVehicleNumber()));

		// validate vehicle number
		if (!(VehiclePlate.checkValidity(vehicle.getVehicleNumber()))) {
			return new ResponseModel(ResponseCode.BAD_REQUEST, null, null, "Vehicle Number is Invalid");
		}

		// check number plate version
		NumberPlateType numberPlateType = VehiclePlate.checkVersion(vehicle.getVehicleNumber());
		
		//add version
		vehicle.setVehicleVersion(numberPlateType);

		boolean res = vehicleService.addVehicleInfo(vehicle);
		if (!res) {
			return new ResponseModel(ResponseCode.ALREADY_EXIST, null, null, "Vehicle Number Already Registered");
		} else {

			List<NumberPlateType> list = new ArrayList<>();
			list.add(numberPlateType);

			return new ResponseModel(ResponseCode.OK, list, "Vehicle registered Successfully", null);

		}
	}

	@GetMapping("")
	public ResponseModel getAllVehicles() {
		return new ResponseModel(ResponseCode.OK, vehicleService.findAllVehicles(), "fetched", null);
	}

	@GetMapping("/{id}")
	public Vehicle getVehicle(@PathVariable String id) {
		Vehicle vehicle = vehicleService.findVehicle(id);

		if (vehicle == null) {

			return new Vehicle();
		} else {
			return vehicle;
		}
	}

	@PutMapping("")
	public ResponseModel updateVehicle(@RequestBody Vehicle vehicle) {

		// format vehicle number
		vehicle.setVehicleNumber(VehiclePlate.formatVehicleNumber(vehicle.getVehicleNumber()));

		// check vehicle number
		if (!(VehiclePlate.checkValidity(vehicle.getVehicleNumber()))) {
			return new ResponseModel(ResponseCode.BAD_REQUEST, null, null, "Vehicle Number is Invalid");
		}

		boolean res = vehicleService.updateVehicle(vehicle);
		
		if (res) {
			return new ResponseModel(ResponseCode.OK, null, "Vehicle details updated", null);
		} else {
			return new ResponseModel(ResponseCode.NOT_FOUND, null, null, "Vehicle details not updated");
		}

	}

	@DeleteMapping("")
	public ResponseModel deleteVehicle(@RequestBody Vehicle vehicle) {
		boolean res = vehicleService.deleteVehicle(vehicle);

		if (res) {
			return new ResponseModel(ResponseCode.OK, null, "Vehicle Deteled", null);
		} else {
			return new ResponseModel(ResponseCode.NOT_FOUND, null, null, "Unable to delete");
		}
	}
}
