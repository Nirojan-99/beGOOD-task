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
import { useState } from "react";

//const data
const TYPE = ["Car", "3Wheel", "Van", "Lorry", "Bike", "Bus"];
const FUEL = ["Petrol", "Diesel"];

function Vehicle() {
  //error state
  const [b_numberError, setBNumberError] = useState(false);
  const [chassisError, setChassisError] = useState(false);
  const [engineNoError, setEngineNoError] = useState(false);
  const [manufacturerError, setManufacturerError] = useState(false);
  const [vehicleTypeError, setTypeError] = useState(false);

  return (
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
              style: { fontWeight: 700, fontFamily: "open sans", color: "red" },
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
              style: { fontWeight: 700, fontFamily: "open sans", color: "red" },
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
              style: { fontWeight: 700, fontFamily: "open sans", color: "red" },
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
              style: { fontWeight: 700, fontFamily: "open sans", color: "red" },
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
          <Select fullWidth required error={vehicleTypeError} size="small">
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
          <Select fullWidth required size="small">
            {FUEL.map((row, index) => {
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
        <Box mt={3.5} mb={1}>
          <Button fullWidth variant="contained">
            Update Details
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            flexDirection: "row",
          }}
          mt={3.5}
          mb={1}
        >
          <Button
            color="error"
            onClick={() => {}}
            sx={{ textTransform: "none" }}
          >
            Delete Vehicle
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Vehicle;
