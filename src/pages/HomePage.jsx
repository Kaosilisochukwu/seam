import React from "react";
import HomeComponent from "../components/HomeComponent";
import data from "../data.json";
const HomePage = () => {
  return (
    <div>
      <HomeComponent data={data} />
    </div>
  );
};

export default HomePage;
