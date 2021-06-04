import React from "react";
import data from "../data.json";
import ServerComponent from "../components/ServerComponent";

const ServerPage = () => {
  return (
    <div>
      <ServerComponent data={data} />
    </div>
  );
};

export default ServerPage;
