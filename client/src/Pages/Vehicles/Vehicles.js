import { IconButton, Pagination, Paper, Table } from "@mui/material";
import { Box, Container } from "@mui/system";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import Footer from "../../Components/Footer";
import { useState } from "react";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24),
  createData("Ice cream sandwich", 237, 9.0, 37),
  createData("Eclair", 262, 16.0, 24),
  createData("Cupcake", 305, 3.7, 67),
  createData("Gingerbread", 356, 16.0, 49),
];

const FIELD = [
  "Vehicle Number",
  "Chassis Number",
  "Vehicle Type",
  "Owner",
  "Edit",
  "Delete",
];

function Vehicles() {
  const [page, setPage] = useState(1);

  const pageHandler = (event, value) => {
    setPage(value);
  };

  return (
    <>
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
                {rows.map((row) => (
                  <TableRow
                    hover={true}
                    // selected={true}
                    key={row.name}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="left">{row.calories}</TableCell>
                    <TableCell align="left">{row.fat}</TableCell>
                    <TableCell align="left">{row.carbs}</TableCell>
                    <TableCell align="left">
                      <IconButton href="/vehicle/id">
                        <EditIcon color="info" />
                      </IconButton>
                    </TableCell>
                    <TableCell align="left">
                      <IconButton>
                        <DeleteIcon color="error" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
      <Box sx={{ display: "flex", justifyContent: "center" }} my={3}>
        <Pagination onChange={pageHandler} count={5} color="primary" />
      </Box>

      <Footer />
    </>
  );
}

export default Vehicles;
