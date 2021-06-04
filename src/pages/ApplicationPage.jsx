import React from "react";
import ApplicationComponent from "../components/ApplicationComponent";
import data from "../data.json";

const ApplicationPage = () => {
  return (
    <div>
      <ApplicationComponent data={data} />
    </div>
  );
};

export default ApplicationPage;
