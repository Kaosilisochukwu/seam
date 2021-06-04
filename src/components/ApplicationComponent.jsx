import React from "react";
import "./Components.css";

import Button from "../atom/Button";
import Dropdown from "../atom/Dropdown";
import { FaSearch } from "react-icons/fa";
import Option from "../atom/Option";

const ApplicationComponent = ({ data }) => {
  return (
    <div>
      <div className="table-container">
        <div className="filter">
          <div className="search">
            <FaSearch style={{ margin: "0 10px" }} />
            <input
              type="text"
              className="search-input"
              placeholder="Enter a search keyword"
            />
          </div>
          <div className="server-drop">
            <Dropdown data={data} />
          </div>
          <div className="push">
            <Button title="Create Server" classname="add-btn" />
          </div>
        </div>
        <div className="table">
          <div className="table-top">
            <img src="images/xls.svg" alt="xcel logo" />
            <img src="images/PDF.svg" alt="Pdf logo" />
            <p>Showing 5000 entries</p>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table>
              <thead>
                <tr>
                  <th className="num">S/N</th>
                  <th>APPLICATION NAME</th>
                  <th className="center">APPLICATION TYPE</th>
                  <th className="center">APPLICATION DCSC</th>
                  <th className="center">APPLICATION PORT</th>
                  <th className="center">ENDPOINT</th>
                  <th className="center">HOST/SERVER</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="num center">1</td>
                  <td className="app-name">
                    <div className="app-sign green"></div>
                    <span>Application name goes here</span>
                  </td>
                  <td className="center">Application type</td>
                  <td className="center">Application type</td>
                  <td className="center">Application port</td>
                  <td className="center">End point</td>
                  <td className="center">10.1.101.53</td>

                  <td>
                    <Button title="Edit" classname="edit-btn" />

                    <Option />
                  </td>
                </tr>
                <tr>
                  <td className="num center">2</td>
                  <td className="app-name">
                    <div className="app-sign green"></div>
                    <span>Application name goes here</span>
                  </td>
                  <td className="center">Application type</td>
                  <td className="center">Application type</td>
                  <td className="center">Application port</td>
                  <td className="center">End point</td>
                  <td className="center">10.1.101.53</td>
                  <td>
                    <Button title="Edit" classname="edit-btn" />

                    <Option />
                  </td>
                </tr>
                <tr>
                  <td className="num center">3</td>
                  <td className="app-name">
                    <div className="app-sign green"></div>
                    <span>Application name goes here</span>
                  </td>
                  <td className="center">Application type</td>
                  <td className="center">Application type</td>
                  <td className="center">Application port</td>
                  <td className="center">End point</td>
                  <td className="center">10.1.101.53</td>
                  <td>
                    <Button title="Edit" classname="edit-btn" />

                    <Option />
                  </td>
                </tr>
                <tr>
                  <td className="num center">3</td>
                  <td className="app-name">
                    <div className="app-sign green"></div>
                    <span>Application name goes here</span>
                  </td>
                  <td className="center">Application type</td>
                  <td className="center">Application type</td>
                  <td className="center">Application port</td>
                  <td className="center">End point</td>
                  <td className="center">10.1.101.53</td>
                  <td>
                    <Button title="Edit" classname="edit-btn" />

                    <Option />
                  </td>
                </tr>
                <tr>
                  <td className="num center">3</td>
                  <td className="app-name">
                    <div className="app-sign red"></div>
                    <span>Application name goes here</span>
                  </td>
                  <td className="center">Application type</td>
                  <td className="center">Application type</td>
                  <td className="center">Application port</td>
                  <td className="center">End point</td>
                  <td className="center">10.1.101.53</td>
                  <td>
                    <Button title="Edit" classname="edit-btn" />

                    <Option />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="numbering">
              <p>PREVIOUS</p>
              <p>
                <span className="current center">1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>...</span>
                <span>1539</span>
              </p>
              <p>NEXT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationComponent;
