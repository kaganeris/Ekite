import React from "react";
import { Step, Stepper } from "react-form-stepper";

const CreateEmployeeHeader = () => {

    const steps = ["Kişisel Bilgiler","İletişim Bilgileri","Pozisyon Bilgileri"]

  return (
    <Stepper alternativeLabel activeStep={0} >
      {steps.map((label) => (
        <Step key={label}>
          <label >{label}</label>
        </Step>
      ))}
    </Stepper>
  );
};

export default CreateEmployeeHeader;
