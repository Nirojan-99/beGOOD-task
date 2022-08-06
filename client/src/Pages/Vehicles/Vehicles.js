import {
  IconButton,
  Pagination,
  Paper,
  Table,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import Ack from "../../Components/Ack";
import { toast, ToastContainer } from "react-toastify";

import Footer from "../../Components/Footer";
import { useEffect, useState } from "react";

const FIELD = [
  "Vehicle Number",
  "Chassis Number",
  "Vehicle Type",
  "Version",
  "Edit",
  "Delete",
];

function Vehicles() {
  const [page, setPage] = useState(1);

  //state
  const [vehicles, setVehicles] = useState([]);
  const [alertOpen, setAlertOpen] = useState(false);
  const [id, setId] = useState("");
  const [index, setIndex] = useState("");

  const pageHandler = (event, value) => {
    setPage(value);
  };

  //url
  const baseURL = "http://localhost:8080/vehicles";

  //delete handler
  const deleteHandler = () => {
    console.log(id, index);
    axios
      .delete(baseURL + "/" + id)
      .then((res) => {
        toast("Vehicle deleted", { type: "info" });
        vehicles.splice(index, 1);
        setAlertOpen(false);
      })
      .catch((er) => {
        toast("Unable to deleted", { type: "error" });
        setAlertOpen(false);
        console.log(er);
      });
  };

  useEffect(() => {
    axios
      .get(baseURL)
      .then((res) => {
        setVehicles(res.data.data);
      })
      .catch((er) => {});
  }, []);

  return (
    <>
      <ToastContainer />
      <Ack
        open={alertOpen}
        title="Delete ?"
        msg="Do you want do delete?"
        handleYes={deleteHandler}
        handleClose={() => {
          setAlertOpen(false);
        }}
      />
      <Container sx={{ my: 3 }} maxWidth="md">
        <Box component={Paper} elevation={1}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow selected={true}>
                  {FIELD.map((row, index) => {
                    return (
                      <TableCell sx={{ color: "#1597BB" }} key={index}>
                        {row}
                      </TableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {vehicles.length > 0 ? (
                  vehicles.map((row, index) => (
                    <TableRow
                      hover={true}
                      // selected={true}
                      key={row.vehicleNumber}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {row.vehicleNumber}
                      </TableCell>
                      <TableCell align="left">{row.chassisNumber}</TableCell>
                      <TableCell align="left">{row.vehicleType}</TableCell>
                      <TableCell align="left">{row.vehicleVersion}</TableCell>
                      <TableCell align="left">
                        <IconButton href={"/vehicle/" + row.id}>
                          <EditIcon color="info" />
                        </IconButton>
                      </TableCell>
                      <TableCell align="left">
                        <IconButton
                          onClick={() => {
                            setId(row.id);
                            setAlertOpen(true);
                            setIndex(index);
                          }}
                        >
                          <DeleteIcon color="error" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <Box>
                    <Typography
                      sx={{ p: 2, color: "red", textAlign: "center" }}
                    >
                      No data available
                    </Typography>
                  </Box>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
      {/* <Box sx={{ display: "flex", justifyContent: "center" }} my={3}>
        <Pagination onChange={pageHandler} count={5} color="primary" />
      </Box> */}

      <Footer />
    </>
  );
}

export default Vehicles;
