import {
  Button,
  Box,
  TextField,
  Typography,
  Divider,
  Paper,
} from "@mui/material";
import { useState } from "react";

export default function UserRegister(props) {
  //error state
  const [emailError, setEmailError] = useState(false);
  const [userError, setUserError] = useState(false);
  const [nicError, setNicError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = () => {
    props.handleNext();
  };

  return (
    <>
      <Box mt={3} component={Paper} elevation={2} p={2}>
        <Typography align="left" sx={{ color: "#1597BB" }} fontSize={20}>
          Register User
        </Typography>
        <Divider sx={{ my: 2, borderBottomWidth: 2.5 }} />
        <Box mt={2} mb={1}>
          <TextField
            required
            autoFocus
            type="email"
            fullWidth
            margin="dense"
            label="Email"
            FormHelperTextProps={{
              style: { fontWeight: 700, fontFamily: "open sans", color: "red" },
            }}
            helperText={emailError && "example@email.com"}
            error={emailError}
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
            type="text"
            fullWidth
            margin="dense"
            label="User Name"
            error={userError}
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
            type="text"
            fullWidth
            margin="dense"
            label="NIC"
            error={nicError}
            FormHelperTextProps={{
              style: { fontWeight: 700, fontFamily: "open sans", color: "red" },
            }}
            helperText={nicError && "123456789v"}
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
            type="number"
            fullWidth
            margin="dense"
            label="Contact Number"
            error={numberError}
            FormHelperTextProps={{
              style: { fontWeight: 700, fontFamily: "open sans", color: "red" },
            }}
            helperText={numberError && "07xxxxxxxx"}
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
            type="password"
            fullWidth
            margin="dense"
            label="Password"
            error={numberError}
            FormHelperTextProps={{
              style: { fontWeight: 700, fontFamily: "open sans", color: "red" },
            }}
            helperText={nicError && "must contain 6 characters"}
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
        <Box mt={2}>
          <Button onClick={handleSubmit} fullWidth variant="contained">
            Submit
          </Button>
          <Box sx={{ display: "flex" }} mt={1}>
            <Box sx={{ flexGrow: 1 }} />
            <Button href="/auth/login">
              <Typography
                sx={{ textTransform: "none", color: "#555" }}
                fontSize={13}
                fontFamily={"open sans"}
                fontWeight={800}
              >
                Already have account?
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
