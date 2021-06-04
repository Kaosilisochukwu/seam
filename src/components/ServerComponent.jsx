import React from "react";
import "./Components.css";

import Button from "../atom/Button";
import Dropdown from "../atom/Dropdown";
import { FaSearch } from "react-icons/fa";
import Option from "../atom/Option";

const ServerComponent = ({ data }) => {
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
            <Button title="Create Server" btnClass="add-btn" />
          </div>
        </div>
        <div className="table">
          <div className="table-top">
            <img src="images/xls.svg" alt="xcel logo" />
            <img src="images/PDF.svg" alt="Pdf logo" />
            <p>Showing 10 of 5000 entries</p>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table>
              <thead>
                <tr>
                  <th className="num">S/N</th>
                  <th>SERVER NAME</th>
                  <th className="center">IP ADDRESS</th>
                  <th className="center">CPU(%)</th>
                  <th className="center">MEMORY(%)</th>
                  <th className="center">STORAGE(%)</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="num center">1</td>
                  <td className="app-name">
                    <div className="app-sign green"></div>
                    <span>Server name goes here</span>
                  </td>
                  <td className="center">IP Address goes here</td>
                  <td className="center">85.6</td>
                  <td className="center">73.9</td>
                  <td className="center">50</td>

                  <td>
                    <Button title="Edit" btnClass="edit-btn" />
                    <Option />
                  </td>
                </tr>
                <tr>
                  <td className="num center">2</td>
                  <td className="app-name">
                    <div className="app-sign green"></div>
                    <span>Server name goes here</span>
                  </td>
                  <td className="center">IP Address goes here</td>
                  <td className="center">85.6</td>
                  <td className="center">73.9</td>
                  <td className="center">50</td>
                  <td>
                    <Button title="Edit" btnClass="edit-btn" />
                    <Option />
                  </td>
                </tr>
                <tr>
                  <td className="num center">3</td>
                  <td className="app-name">
                    <div className="app-sign green"></div>
                    <span>Server name goes here</span>
                  </td>
                  <td className="center">IP Address goes here</td>
                  <td className="center">85.6</td>
                  <td className="center">73.9</td>
                  <td className="center">50</td>
                  <td>
                    <Button title="Edit" btnClass="edit-btn" />

                    <Option />
                  </td>
                </tr>
                <tr>
                  <td className="num center">3</td>
                  <td className="app-name">
                    <div className="app-sign green"></div>
                    <span>Server name goes here</span>
                  </td>
                  <td className="center">IP Address goes here</td>
                  <td className="center">85.6</td>
                  <td className="center">73.9</td>
                  <td className="center">50</td>
                  <td>
                    <Button title="Edit" btnClass="edit-btn" />

                    <Option />
                  </td>
                </tr>
                <tr>
                  <td className="num center">3</td>
                  <td className="app-name">
                    <div className="app-sign red"></div>
                    <span>Server name goes here</span>
                  </td>
                  <td className="center">IP Address goes here</td>
                  <td className="center">85.6</td>
                  <td className="center">73.9</td>
                  <td className="center">50</td>
                  <td>
                    <Button title="Edit" btnClass="edit-btn" />

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

export default ServerComponent;
