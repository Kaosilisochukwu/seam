import React from "react";
import Tag from "../atom/Tag";
import CardComponent from "./CardComponent";
import { FaSearch } from "react-icons/fa";
import Dropdown from "../atom/Dropdown";
import "./Components.css";
import Button from "../atom/Button";
import Option from "../atom/Option";

const HomeComponent = ({ data }) => {
  return (
    <div>
      <div className="card-conatainer">
        <CardComponent title="Application Status">
          <Tag
            value="10"
            styles={{
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: "#1b146",
            }}
            title="All"
          />
          <Tag
            value="6"
            styles={{
              borderWidth: "2px",
              borderStyle: "solid",
              backgroundColor: "#24C977",
              color: "#fff",
            }}
            title="Available"
          />
          <Tag
            value="4"
            styles={{
              borderWidth: "2px",
              borderStyle: "solid",
              backgroundColor: "#FF4343F7",
              color: "#fff",
            }}
            title="Critical"
          />
        </CardComponent>
        <CardComponent title="Servers">
          <Tag
            value="10"
            styles={{
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: "#1b146",
            }}
            title="All"
          />
          <Tag
            value="6"
            styles={{
              borderWidth: "2px",
              borderStyle: "solid",
              backgroundColor: "#24C977",
              color: "#fff",
            }}
            title="Active"
          />
          <Tag
            value="4"
            styles={{
              border: "1px solid #E0B237",
              backgroundColor: "#E0B237",
              color: "#fff",
            }}
            title="Inactive"
          />
        </CardComponent>
        <CardComponent title="Health Check Counts">
          <div className="health">
            <p>60</p>
            <p className="count">Counts</p>
          </div>
        </CardComponent>
      </div>
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
          <div className="drop">
            <Dropdown data={data} />
            <Dropdown data={data} />
            <Dropdown data={data} />
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
                  <th>APPLICATION</th>
                  <th className="center">SERVERS MAPPED</th>
                  <th>LAST SCAN DATE</th>
                  <th>STATUS</th>
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
                  <td className="server center">3 Servers</td>
                  <td>11/12/20 3: 57:29 PM</td>
                  <td style={{ display: "flex" }}>
                    <div className="checkmark" />
                    <span style={{ marginLeft: 20 }}>Healthy</span>
                  </td>
                  <td>
                    <Button title="View Result" btnClass="edit-btn" />
                    <Option />
                  </td>
                </tr>
                <tr>
                  <td className="num center">3</td>
                  <td className="app-name">
                    <div className="app-sign green"></div>
                    <span>Application name goes here</span>
                  </td>
                  <td className="server center">2 Servers</td>
                  <td>11/12/20 3: 57:29 PM</td>
                  <td>
                    <img src="images/triangle.svg" alt="warning logo" />
                  </td>
                  <td>
                    <Button title="View Result" btnClass="edit-btn" />
                    <Option />
                  </td>
                </tr>
                <tr>
                  <td className="num center">2</td>
                  <td className="app-name">
                    <div className="app-sign green"></div>
                    <span>Application name goes here</span>
                  </td>
                  <td className="server center">2 Servers</td>
                  <td>11/12/20 3: 57:29 PM</td>
                  <td>
                    <div className="checkmark" />
                  </td>
                  <td>
                    <Button title="View Result" btnClass="edit-btn" />
                    <Option />
                  </td>
                </tr>
                <tr>
                  <td className="num center">2</td>
                  <td className="app-name">
                    <div className="app-sign green"></div>
                    <span>Application name goes here</span>
                  </td>
                  <td className="server center">2 Servers</td>
                  <td>11/12/20 3: 57:29 PM</td>
                  <td>
                    <div className="checkmark" />
                  </td>
                  <td>
                    <Button title="View Result" btnClass="edit-btn" />
                    <Option />
                  </td>
                </tr>
                <tr>
                  <td className="num center">2</td>
                  <td className="app-name">
                    <div className="app-sign red"></div>
                    <span>Application name goes here</span>
                  </td>
                  <td className="server center">2 Servers</td>
                  <td>11/12/20 3: 57:29 PM</td>
                  <td>
                    <div className="checkmark" />
                  </td>
                  <td>
                    <Button title="View Result" btnClass="edit-btn" />
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

export default HomeComponent;
