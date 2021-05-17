import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";

const NavigationHeader = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Nav tabs style={{ backgroundColor: "#000000", display: "flex" }}>
        <NavItem>
          <NavLink
            style={{ backgroundColor: "#000000", color: "white" }}
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            ABOUT
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            style={{ backgroundColor: "#000000", color: "white" }}
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            LISTEN
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            style={{ backgroundColor: "#000000", color: "white" }}
            className={classnames({ active: activeTab === "3" })}
            onClick={() => {
              toggle("3");
            }}
          >
            SHOWS
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            style={{ backgroundColor: "#000000", color: "white" }}
            className={classnames({ active: activeTab === "4" })}
            onClick={() => {
              toggle("4");
            }}
          >
            MERCH
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            style={{ backgroundColor: "#000000", color: "white" }}
            className={classnames({ active: activeTab === "5" })}
            onClick={() => {
              toggle("5");
            }}
          >
            SUPPORT
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            style={{ backgroundColor: "#000000", color: "white" }}
            className={classnames({ active: activeTab === "6" })}
            onClick={() => {
              toggle("6");
            }}
          >
            LINKS
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            style={{ backgroundColor: "#000000", color: "white" }}
            className={classnames({ active: activeTab === "7" })}
            onClick={() => {
              toggle("7");
            }}
          >
            MAILING LIST
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            style={{ backgroundColor: "#000000", color: "white" }}
            className={classnames({ active: activeTab === "8" })}
            onClick={() => {
              toggle("8");
            }}
          >
            CONTACT
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab} style={{ backgroundColor: "#f1f1f1" }}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <header className="App-header">
                <p>SHORTY AND THE GROOVES</p>
              </header>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <header className="App-header">
                <p>SHORTY AND THE GROOVES</p>
              </header>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default NavigationHeader;
