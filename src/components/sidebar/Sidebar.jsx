import React from "react";
import "./sidebar.scss";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const [homeNavActive, setHomeNavActive] = useState(true);
  const [userNavActive, setUserNavActive] = useState(false);
  const [productNavActive, setProductNavActive] = useState(false);
  const homeActive = () => {
    setHomeNavActive(true);
    setUserNavActive(false);
    setProductNavActive(false);
  };
  const userActive = () => {
    setHomeNavActive(false);
    setUserNavActive(true);
    setProductNavActive(false);
  };
  const productActive = () => {
    setHomeNavActive(false);
    setUserNavActive(false);
    setProductNavActive(true);
  };

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to={"/"} onClick={homeActive}>
              <li
                className={
                  homeNavActive
                    ? "sidebarListItem linkActive"
                    : "sidebarListItem"
                }
              >
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to={"/users"} onClick={userActive}>
              <li
                className={
                  userNavActive
                    ? "sidebarListItem linkActive"
                    : "sidebarListItem"
                }
              >
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to={"/products"} onClick={productActive}>
              <li
                className={
                  productNavActive
                    ? "sidebarListItem linkActive"
                    : "sidebarListItem"
                }
              >
                <Storefront className="sidebarIcon" />
                Products
              </li>
            </Link>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
