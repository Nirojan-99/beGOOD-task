import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "70%", sm: "40%" },
  bgcolor: "background.paper",
  boxShadow: 20,
  p: 4,
};

function ChangePassword(props) {
  //error state
  const [passwordError, setPasswordError] = useState(false);
  const [newPasswordError, setNewPasswordError] = useState(false);
  const [rePasswordError, setRePasswordError] = useState(false);
  return (
    <Modal open={props.open} onClose={props.handleClose}>
      <Box sx={style} p={1}>
        <Typography sx={{ textAlign: "center", color: "#1597BB" }}>
          Change Password
        </Typography>
        <Box my={2}>
          <TextField
            size="small"
            required
            type="password"
            fullWidth
            margin="dense"
            label="Old Password"
            error={passwordError}
            helperText={passwordError && "Invalid Password"}
            inputProps={{
              style: {
                fontFamily: "open sans",
                fontWeight: 700,
                color: "#333",
              },
            }}
            FormHelperTextProps={{
              style: { fontWeight: 700, fontFamily: "open sans", color: "red" },
            }}
            InputLabelProps={{
              style: { fontSize: 13, fontWeight: 700, fontFamily: "open sans" },
            }}
          />
        </Box>
        <Box my={2}>
          <TextField
            size="small"
            required
            type="password"
            fullWidth
            margin="dense"
            label="New Password"
            error={newPasswordError}
            helperText={newPasswordError && "Invalid new password"}
            inputProps={{
              style: {
                fontFamily: "open sans",
                fontWeight: 700,
                color: "#333",
              },
            }}
            FormHelperTextProps={{
              style: { fontWeight: 700, fontFamily: "open sans", color: "red" },
            }}
            InputLabelProps={{
              style: { fontSize: 13, fontWeight: 700, fontFamily: "open sans" },
            }}
          />
        </Box>
        <Box my={2}>
          <TextField
            size="small"
            required
            type="password"
            fullWidth
            margin="dense"
            label="Re-Type New Password"
            error={rePasswordError}
            helperText={rePasswordError && "Invalid new password"}
            inputProps={{
              style: {
                fontFamily: "open sans",
                fontWeight: 700,
                color: "#333",
              },
            }}
            FormHelperTextProps={{
              style: { fontWeight: 700, fontFamily: "open sans", color: "red" },
            }}
            InputLabelProps={{
              style: { fontSize: 13, fontWeight: 700, fontFamily: "open sans" },
            }}
          />
        </Box>
        <Box>
          <Button fullWidth variant="contained">
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default ChangePassword;
