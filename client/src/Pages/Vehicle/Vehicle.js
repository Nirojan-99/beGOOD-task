import {
  Avatar,
  Box,
  Button,
  Container,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import GarageIcon from "@mui/icons-material/Garage";
import { useEffect, useState } from "react";
import Footer from "../../Components/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

//const data
const TYPE = ["CAR", "THREEWHEEL", "VAN", "LORRY", "BIKE", "BUS"];
const FUEL = ["PETROL", "DIESEL"];

function Vehicle() {
  //error state
  const [b_numberError, setBNumberError] = useState(false);
  const [chassisError, setChassisError] = useState(false);
  const [engineNoError, setEngineNoError] = useState(false);
  const [manufacturerError, setManufacturerError] = useState(false);
  const [vehicleTypeError, setTypeError] = useState(false);
  const [fuelTypeError, setFuelTypeError] = useState(false);

  //vehicle data
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [chassissNumber, setChassisNumber] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [engineNumber, setEngineNumber] = useState("");

  //vehicle id
  const { id } = useParams();

  //state
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  //url
  const baseURL = "http://localhost:8080/vehicles";

  useEffect(() => {
    axios
      .get(`${baseURL}/${id}`)
      .then((res) => {
        setVehicleNumber(res.data.vehicleNumber);
        setChassisNumber(res.data.chassisNumber);
        setVehicleType(res.data.vehicleType);
        setManufacturer(res.data.manufacturer);
        setFuelType(res.data.fuel);
        setEngineNumber(res.data.engineNumber);
        setLoaded(true);
      })
      .catch((er) => {
        setLoaded(true);
      });
  }, []);

  //update handler
  const submitHandler = () => {
    setBNumberError(false);
    setChassisError(false);
    setTypeError(false);
    setManufacturerError(false);
    setFuelTypeError(false);
    setEngineNoError(false);

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
    if (!engineNumber.trim()) {
      return setEngineNoError(true);
    }

    axios
      .put(baseURL, {
        id,
        vehicleNumber,
        chassisNumber: chassissNumber,
        fuel: fuelType,
        vehicleType,
        manufacturer,
        engineNumber
      })
      .then((res) => {
        navigate("/vehicles", { replace: true });
      })
      .catch((er) => {
        toast("Unable to update vehicle", { type: "error" });
        console.log(er);
      });
  };

  return (
    <>
      <ToastContainer />
      <Container maxWidth="sm">
        <Box component={Paper} elevation={2} px={3} py={2} my={3}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar sx={{ bgcolor: "#1597BB" }}>
              <GarageIcon sx={{ color: "#fff" }} />
            </Avatar>
          </Box>
          <Box mt={3} mb={1}>
            <Typography
              sx={{
                fontFamily: "open sans",
                fontWeight: 800,
                fontSize: 13,
                mb: 0.5,
                color: "#1597BB",
              }}
            >
              Vehicle Number
            </Typography>
            <TextField
              FormHelperTextProps={{
                style: {
                  fontWeight: 700,
                  fontFamily: "open sans",
                  color: "red",
                },
              }}
              helperText={b_numberError && "Require valid vehicle number"}
              error={b_numberError}
              inputProps={{
                style: {
                  fontFamily: "open sans",
                  fontWeight: 700,
                  color: "#333",
                },
              }}
              type={"text"}
              required
              margin="none"
              size="small"
              fullWidth
              value={vehicleNumber}
              onChange={(event) => {
                setVehicleNumber(event.target.value);
              }}
            />
          </Box>
          <Box my={1}>
            <Typography
              sx={{
                fontFamily: "open sans",
                fontWeight: 800,
                fontSize: 13,
                mb: 0.5,
                color: "#1597BB",
              }}
            >
              Chassis Number
            </Typography>
            <TextField
              FormHelperTextProps={{
                style: {
                  fontWeight: 700,
                  fontFamily: "open sans",
                  color: "red",
                },
              }}
              helperText={chassisError && "Require valid Chassis Number"}
              error={chassisError}
              inputProps={{
                style: {
                  fontFamily: "open sans",
                  fontWeight: 700,
                  color: "#333",
                },
              }}
              type={"text"}
              required
              margin="none"
              size="small"
              fullWidth
              value={chassissNumber}
              onChange={(event) => {
                setChassisNumber(event.target.value);
              }}
            />
          </Box>
          <Box my={1}>
            <Typography
              sx={{
                fontFamily: "open sans",
                fontWeight: 800,
                fontSize: 13,
                mb: 0.5,
                color: "#1597BB",
              }}
            >
              Engine Number
            </Typography>
            <TextField
              FormHelperTextProps={{
                style: {
                  fontWeight: 700,
                  fontFamily: "open sans",
                  color: "red",
                },
              }}
              helperText={engineNoError && "Require valid Engine Number"}
              error={engineNoError}
              inputProps={{
                style: {
                  fontFamily: "open sans",
                  fontWeight: 700,
                  color: "#333",
                },
              }}
              type={"text"}
              required
              margin="none"
              size="small"
              fullWidth
              value={engineNumber}
              onChange={(event) => {
                setEngineNumber(event.target.value);
              }}
            />
          </Box>
          <Box my={1}>
            <Typography
              sx={{
                fontFamily: "open sans",
                fontWeight: 800,
                fontSize: 13,
                mb: 0.5,
                color: "#1597BB",
              }}
            >
              Manufacturer
            </Typography>
            <TextField
              FormHelperTextProps={{
                style: {
                  fontWeight: 700,
                  fontFamily: "open sans",
                  color: "red",
                },
              }}
              helperText={manufacturerError && "Required field"}
              error={manufacturerError}
              inputProps={{
                style: {
                  fontFamily: "open sans",
                  fontWeight: 700,
                  color: "#333",
                },
              }}
              type={"text"}
              required
              margin="none"
              size="small"
              fullWidth
              value={manufacturer}
              onChange={(event) => {
                setManufacturer(event.target.value);
              }}
            />
          </Box>
          <Box mb={2} mt={2}>
            <Typography
              sx={{
                fontFamily: "open sans",
                fontWeight: 800,
                fontSize: 13,
                mb: 0.5,
                color: "#1597BB",
              }}
            >
              Vehicle Type
            </Typography>
            <Select
              fullWidth
              required
              value={vehicleType}
              onChange={(event) => {
                setVehicleType(event.target.value);
              }}
              error={vehicleTypeError}
              size="small"
            >
              {TYPE.map((row, index) => {
                return (
                  <MenuItem
                    key={index}
                    sx={{
                      fontFamily: "open sans",
                      fontSize: 15,
                      color: "#333",
                    }}
                    value={row}
                  >
                    {row}
                  </MenuItem>
                );
              })}
            </Select>
          </Box>
          <Box mb={2} mt={2}>
            <Typography
              sx={{
                fontFamily: "open sans",
                fontWeight: 800,
                fontSize: 13,
                mb: 0.5,
                color: "#1597BB",
              }}
            >
              Fuel
            </Typography>
            <Select
              fullWidth
              required
              value={fuelType}
              onChange={(event) => {
                setFuelType(event.target.value);
              }}
              size="small"
            >
              {FUEL.map((row, index) => {
                return (
                  <MenuItem
                    key={index}
                    sx={{
                      fontFamily: "open sans",
                      fontSize: 15,
                      color: "#333",
                    }}
                    value={row}
                  >
                    {row}
                  </MenuItem>
                );
              })}
            </Select>
          </Box>
          <Box mt={3.5} mb={1}>
            <Button onClick={submitHandler} fullWidth variant="contained">
              Update Details
            </Button>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default Vehicle;
