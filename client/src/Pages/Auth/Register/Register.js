import UserRegister from "./UserRegister";
import VehicleRegister from "./VehicleRegister";
import { useState } from "react";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import GarageIcon from "@mui/icons-material/Garage";
import { Container, Box, Stepper, Step, StepLabel } from "@mui/material";
import Footer from "../../../Components/Footer";

const steps = ["User Registraion", "Vehicle Registration"];

export default function Register(props) {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <UserRegister handleNext={handleNext} />;
      case 1:
        return (
          <VehicleRegister handleNext={handleNext} handleBack={handleBack} />
        );
      default:
        throw new Error("Unknown step");
    }
  }

  return (
    <>
      <Box>
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
          <Stepper
            activeStep={activeStep}
            sx={{
              my: 3,
              py: 3,
              boxShadow: "1px 1px 2px 1px #ccc",
              borderRadius: 1.5,
              bgcolor: "#fff",
            }}
          >
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel
                // icon={
                //   index == 0 ? (
                //     <ContactPageIcon />
                //   ) : (
                //     <GarageIcon />
                //   )
                // }
                >
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>

          <>
            {getStepContent(activeStep)}
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}></Box>
          </>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
