package com.beGOOD.beGOOD.response;

import java.util.List;

public class ResponseModel {
	private int responseCode;
	private List<?> data;
	private String successMessage;
	private String errorMessage;

	public ResponseModel() {
	}

	public ResponseModel(int responseCode, List<?> data, String successMessage, String errorMessage) {
		this.responseCode = responseCode;
		this.data = data;
		this.successMessage = successMessage;
		this.errorMessage = errorMessage;
	}

	public int getResponseCode() {
		return responseCode;
	}

	public void setResponseCode(int responseCode) {
		this.responseCode = responseCode;
	}

	public List<?> getData() {
		return data;
	}

	public void setData(List<?> data) {
		this.data = data;
	}

	public String getSuccessMessage() {
		return successMessage;
	}

	public void setSuccessMessage(String successMessage) {
		this.successMessage = successMessage;
	}

	public String getErrorMessage() {
		return errorMessage;
	}

	public void setErrorMessage(String errorMessage) {
		this.errorMessage = errorMessage;
	}

	@Override
	public String toString() {
		return "ResponseModel [responseCode=" + responseCode + ", data=" + data + ", successMessage=" + successMessage
				+ ", errorMessage=" + errorMessage + "]";
	}

}
