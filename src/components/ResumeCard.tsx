import React from "react";
import Resume from "../assets/Lucas_See_Resume (1).pdf";

const ResumeCard = () => {
  return (
    <div>
      <iframe src={Resume} width="1000px" height="800px" />
    </div>
  );
};

export default ResumeCard;
