package com.beGOOD.beGOOD.helper;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import com.beGOOD.beGOOD.model.NumberPlateType;
import com.beGOOD.beGOOD.model.VehicleType;

public class VehiclePlate {

	// assume vintage first number plate = 1 ශ්‍රී 1
	// and last number plate = 9999 ශ්‍රී 9999
	final private static String VINTAGE_PATTERN = "^[0-9]{1,4}\\s*ශ්‍රී\\s*[0-9]{1,4}$";
	// assume old first number plate = 1-0001
	// and last number plate = 999-9999
	final private static String OLD_PATTERN = "^[0-9]{1,3}\\s*(-)?\\s*[0-9]{1,4}$";
	// assume modern first number plate = A-0001
	// and last number plate = ZZZ-9999
	final private static String MODERN_PATTERN = "^[A-Z]{0,2}(\\s)*[A-Z]{1,3}\\s*(-)?\\s*[0-9]{4}$";

	final private static Pattern vintagePattern = Pattern.compile(VINTAGE_PATTERN, Pattern.CASE_INSENSITIVE);
	final private static Pattern oldPattern = Pattern.compile(OLD_PATTERN, Pattern.CASE_INSENSITIVE);
	final private static Pattern modernPattern = Pattern.compile(MODERN_PATTERN, Pattern.CASE_INSENSITIVE);

	//check number plate version
	public static NumberPlateType checkVersion(String number) {

		Matcher vintageMatcher = vintagePattern.matcher(number);
		Matcher oldMatcher = oldPattern.matcher(number);
		Matcher modernMatcher = modernPattern.matcher(number);

		if (vintageMatcher.find()) {
			return NumberPlateType.VINTAGE;
		} else if (oldMatcher.find()) {
			return NumberPlateType.OLD;
		} else if (modernMatcher.find()) {
			return NumberPlateType.MODERN;
		} else {
			return null;
		}

	}

	//validate number plate number
	public static boolean checkValidity(String number) {

		Matcher vintageMatcher = vintagePattern.matcher(number);
		Matcher oldMatcher = oldPattern.matcher(number);
		Matcher modernMatcher = modernPattern.matcher(number);

		if (vintageMatcher.find()) {
			return true;
		} else if (oldMatcher.find()) {
			return true;
		} else if (modernMatcher.find()) {
			return true;
		} else {
			return false;
		}
	}

	//remove extra spaces from number plate number
	public static String formatVehicleNumber(String number) {
		String spacePattern = "\\s{2,}";
		String replace = " ";

		Pattern pattern = Pattern.compile(spacePattern);
		Matcher matcher = pattern.matcher(number);
		return matcher.replaceAll(replace);
	}

}
