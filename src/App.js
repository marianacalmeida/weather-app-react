import React from "react";

import "./styles.css";

import Today from "./Today";
import Form from "./Form";

export default function App() {
  return (
    <div className="container">
      <div className="app-screen" id="background">
        <table className="main_div">
          <tr>
            <td valign="top">
              <Form />
              <Today />
            </td>
          </tr>
          <tr>
            <td valign="bottom"></td>
          </tr>
        </table>
      </div>
      <p className="sign">
        Open-source coded and designed by{" "}
        <a href="https://pt.linkedin.com/in/mariana-almeida-a91196130">
          Mariana Almeida
        </a>
      </p>
    </div>
  );
}
