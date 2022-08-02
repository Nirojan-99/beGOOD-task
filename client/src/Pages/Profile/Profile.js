import { Box, Container, Paper } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";

//pages
import Account from "./Components/Account";
import Vehicle from "./Components/Vehicle";
import Footer from "../../Components/Footer";

//constant
const TABS = ["Profile", "Vehicle"];

function Profile(props) {
  //initial vaue for tab bar
  const [value, setValue] = useState("0");

  //tab bar handler
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ typography: "body1" }}>
        <TabContext value={value}>
          <Container maxWidth="sm">
            <Box mt={2} component={Paper} elevation={1}>
              <TabList onChange={handleChange}>
                {TABS.map((row, index) => {
                  return <Tab key={index} label={row} value={index + ""} />;
                })}
              </TabList>
            </Box>
            <Box mt={2} mb={4} p={0} component={Paper} elevation={1} sx={{}}>
              <TabPanel value={"0"}>
                <Account />
              </TabPanel>
              <TabPanel value={"1"}>
                <Vehicle />
              </TabPanel>
            </Box>
          </Container>
        </TabContext>
      </Box>
      <Footer />
    </>
  );
}

export default Profile;
