import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";

//modal
import ChangePassword from "./ChangePassword";

function Account() {
  //error state
  const [emailError, setEmailError] = useState(false);
  const [userError, setUserError] = useState(false);
  const [nicError, setNicError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  //modal state
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <ChangePassword
        open={modalOpen}
        handleClose={() => {
          setModalOpen(false);
        }}
      />
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Avatar sx={{ bgcolor: "#1597BB" }}>
          <PermContactCalendarIcon sx={{ color: "#fff" }} />
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
          User Name
        </Typography>
        <TextField
          FormHelperTextProps={{
            style: { fontWeight: 700, fontFamily: "open sans", color: "red" },
          }}
          helperText={userError && "Require valid user name"}
          error={userError}
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
          Email
        </Typography>
        <TextField
          FormHelperTextProps={{
            style: { fontWeight: 700, fontFamily: "open sans", color: "red" },
          }}
          helperText={emailError && "Require valid email"}
          error={emailError}
          inputProps={{
            style: {
              fontFamily: "open sans",
              fontWeight: 700,
              color: "#333",
            },
          }}
          type={"email"}
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
          NIC
        </Typography>
        <TextField
          FormHelperTextProps={{
            style: { fontWeight: 700, fontFamily: "open sans", color: "red" },
          }}
          helperText={nicError && "Require valid NIC"}
          error={nicError}
          inputProps={{
            style: {
              fontFamily: "open sans",
              fontWeight: 700,
              color: "#333",
            },
          }}
          type={"number"}
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
          Contact Number
        </Typography>
        <TextField
          FormHelperTextProps={{
            style: { fontWeight: 700, fontFamily: "open sans", color: "red" },
          }}
          helperText={numberError && "Require valid NIC"}
          error={numberError}
          inputProps={{
            style: {
              fontFamily: "open sans",
              fontWeight: 700,
              color: "#333",
            },
          }}
          type={"number"}
          required
          margin="none"
          size="small"
          fullWidth
        />
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
          onClick={() => {
            setModalOpen(true);
          }}
          sx={{ textTransform: "none" }}
        >
          Change Password
        </Button>
      </Box>
    </>
  );
}

export default Account;
