package com.beGOOD.beGOOD.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document
public class Vehicle {

	@Id
	private String id;
	private String vehicleNumber;
	private String chassisNumber;
	private String engineNumber;
	private Fuel fuel;
	private VehicleType vehicleType;
	private String manufacturer;
	private NumberPlateType vehicleVersion;

	public NumberPlateType getVehicleVersion() {
		return vehicleVersion;
	}

	public void setVehicleVersion(NumberPlateType vehicleVersion) {
		this.vehicleVersion = vehicleVersion;
	}

	public Vehicle(String id, String vehicleNumber, String chassisNumber, String engineNumber, Fuel fuel,
			VehicleType vehicleType, String manufacturer, NumberPlateType vehicleVersion) {
		super();
		this.id = id;
		this.vehicleNumber = vehicleNumber;
		this.chassisNumber = chassisNumber;
		this.engineNumber = engineNumber;
		this.fuel = fuel;
		this.vehicleType = vehicleType;
		this.manufacturer = manufacturer;
		this.vehicleVersion = vehicleVersion;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getVehicleNumber() {
		return vehicleNumber;
	}

	public void setVehicleNumber(String vehicleNumber) {
		this.vehicleNumber = vehicleNumber;
	}

	public String getChassisNumber() {
		return chassisNumber;
	}

	public void setChassisNumber(String chassisNumber) {
		this.chassisNumber = chassisNumber;
	}

	public String getEngineNumber() {
		return engineNumber;
	}

	public void setEngineNumber(String engineNumber) {
		this.engineNumber = engineNumber;
	}

	public Fuel getFuel() {
		return fuel;
	}

	public void setFuel(Fuel fuel) {
		this.fuel = fuel;
	}

	public VehicleType getVehicleType() {
		return vehicleType;
	}

	public void setVehicleType(VehicleType vehicleType) {
		this.vehicleType = vehicleType;
	}

	public String getManufacturer() {
		return manufacturer;
	}

	public void setManufacturer(String manufacturer) {
		this.manufacturer = manufacturer;
	}

	public Vehicle() {
		super();
	}

}
