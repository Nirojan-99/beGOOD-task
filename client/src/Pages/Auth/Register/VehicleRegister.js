import { useState } from "react";
import {
  Button,
  TextField,
  Box,
  Divider,
  Paper,
  Select,
  MenuItem,
  Chip,
  Typography,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router";

//const data
const TYPE = ["CAR", "THREEWHEEL", "VAN", "LORRY", "BIKE", "BUS"];
const FUEL = ["PETROL", "DIESEL"];

export default function VehicleRegister(props) {
  //error state
  const [b_numberError, setBNumberError] = useState(false);
  const [chassisError, setChassisError] = useState(false);
  const [vehicleTypeError, setTypeError] = useState(false);
  const [manufacturerError, setManufacturerError] = useState(false);
  const [fuelTypeError, setFuelTypeError] = useState(false);

  //user data
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [chassissNumber, setChassisNumber] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [fuelType, setFuelType] = useState("");

  //url
  const baseURL = "http://localhost:8080/vehicles";

  //select fuel
  const selectFuel = (value) => {
    setFuelType(value);
  };

  //hook
  const navigate = useNavigate();

  const submitHandler = () => {
    setBNumberError(false);
    setChassisError(false);
    setTypeError(false);
    setManufacturerError(false);
    setFuelTypeError(false);

    if (!vehicleNumber.trim()) {
      return setBNumberError(true);
    }
    if (!chassissNumber.trim()) {
      return setChassisError(true);
    }
    if (!manufacturer.trim()) {
      return setManufacturerError(true);
    }
    if (!vehicleType.trim()) {
      return setTypeError(true);
    }
    if (!fuelType.trim()) {
      return setFuelTypeError(true);
    }

    axios
      .post(baseURL, {
        vehicleNumber,
        chassisNumber,
        fuel: fuelType,
        vehicleType,
        manufacturer,
      })
      .then((res) => {
        navigate("/profile", { replace: true });
      })
      .catch((er) => {
        toast("Unable to register vehicle", { type: "error" });
      });
  };

  return (
    <>
      <ToastContainer />
      <Box mt={3} component={Paper} elevation={2} p={2}>
        <Typography align="left" sx={{ color: "#1597BB" }} fontSize={20}>
          Register Vehicle
        </Typography>
        <Divider sx={{ my: 2, borderBottomWidth: 2.5 }} />
        <Box mt={2} mb={1}>
          <TextField
            required
            value={vehicleNumber}
            onChange={(event) => {
              setVehicleNumber(event.target.value);
            }}
            autoFocus
            type="text"
            fullWidth
            margin="dense"
            label="Vehicle Number"
            FormHelperTextProps={{
              style: {
                fontWeight: 700,
                fontFamily: "open sans",
                color: b_numberError ? "red" : "#1597BB",
              },
            }}
            helperText={
              b_numberError
                ? "13 ශ්‍රී 9999 / 19-9999 / CAR - 9999"
                : "Ex : CAR - 9999"
            }
            error={b_numberError}
            inputProps={{
              style: {
                fontFamily: "open sans",
                fontWeight: 700,
                color: "#333",
              },
            }}
            InputLabelProps={{
              style: { fontSize: 15, fontWeight: 700, fontFamily: "open sans" },
            }}
          />
        </Box>
        <Box mb={1}>
          <TextField
            required
            value={chassissNumber}
            onChange={(event) => {
              setChassisNumber(event.target.value);
            }}
            type="text"
            fullWidth
            margin="dense"
            label="Chassis Number"
            FormHelperTextProps={{
              style: { fontWeight: 700, fontFamily: "open sans", color: "red" },
            }}
            helperText={chassisError && "refer to the vechile book"}
            error={chassisError}
            inputProps={{
              style: {
                fontFamily: "open sans",
                fontWeight: 700,
                color: "#333",
              },
            }}
            InputLabelProps={{
              style: { fontSize: 15, fontWeight: 700, fontFamily: "open sans" },
            }}
          />
        </Box>
        <Box mb={1}>
          <TextField
            required
            value={manufacturer}
            onChange={(event) => {
              setManufacturer(event.target.value);
            }}
            type="text"
            fullWidth
            margin="dense"
            label="Manufacturer"
            FormHelperTextProps={{
              style: { fontWeight: 700, fontFamily: "open sans", color: "red" },
            }}
            helperText={manufacturerError && "refer to the vechile book"}
            error={manufacturerError}
            inputProps={{
              style: {
                fontFamily: "open sans",
                fontWeight: 700,
                color: "#333",
              },
            }}
            InputLabelProps={{
              style: { fontSize: 15, fontWeight: 700, fontFamily: "open sans" },
            }}
          />
        </Box>
        <Box mb={2} mt={2}>
          <Select
            fullWidth
            required
            value={vehicleType}
            onChange={(event) => {
              setVehicleType(event.target.value);
            }}
            error={vehicleTypeError}
          >
            {TYPE.map((row, index) => {
              return (
                <MenuItem
                  key={index}
                  sx={{ fontFamily: "open sans", fontSize: 15, color: "#333" }}
                  value={row}
                >
                  {row}
                </MenuItem>
              );
            })}
          </Select>
        </Box>
        <Typography
          sx={{ fontFamily: "open sans", fontWeight: 800, fontSize: 13 }}
        >
          Select Fuel Type
        </Typography>
        <Box my={2}>
          {FUEL.map((row, index) => {
            return (
              <FuelChip
                key={index}
                clicked={fuelType}
                data={row}
                handler={selectFuel}
              />
            );
          })}
          {fuelTypeError && (
            <Typography sx={{ fontSize: 12, color: "red", mt: 1 }}>
              Select fuel type
            </Typography>
          )}
        </Box>
        <Box my={3}>
          <Button onClick={submitHandler} fullWidth variant="contained">
            Register
          </Button>
        </Box>
      </Box>
    </>
  );
}

const FuelChip = (props) => {
  return (
    <Chip
      sx={{
        color: props.clicked === props.data ? "#1597BB" : "#333",
        borderColor: props.clicked === props.data ? "#1597BB" : "#333",
        borderRadius: 1,
        borderWidth: 2,
        py: 2,
        fontSize: 14,
        mr: 2,
        width: "20%",
      }}
      size="medium"
      label={props.data}
      href="#basic-chip"
      variant="outlined"
      clickable
      onClick={() => {
        props.handler(props.data);
      }}
    />
  );
};
