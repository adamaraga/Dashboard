import "./sidebar.css";
import {
  DashboardOutlined,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  NotificationsNone,
  KeyboardArrowDown,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  SettingsOutlined,
  ArrowBackIos,
  ExitToAppOutlined,
  // BarChart,
  // ArrowForwardIos,
  // WorkOutline,
  // Report,
  // AttachMoney,
} from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

function Sidebar({ handleSidebarShrink, sidebarShrink }) {
  const [notificationMenu, setNotificationMenu] = useState(false);
  const { pathname } = useLocation();

  const handleNotificationMenu = () => {
    if (notificationMenu) {
      setNotificationMenu(false);
    } else {
      setNotificationMenu(true);
    }
    if (sidebarShrink) {
      handleSidebarShrink();
    }
  };

  return (
    <div className={sidebarShrink ? "sidebar shrinkSidebar" : "sidebar"}>
      <button className="sidebarShrinkBtn" onClick={handleSidebarShrink}>
        {" "}
        <ArrowBackIos
          className={
            sidebarShrink ? "sidebarShrinkIcon turnSide" : "sidebarShrinkIcon"
          }
        />{" "}
      </button>
      <h1 className="sidebarLogo">{sidebarShrink ? "DB" : "Dashboard"}</h1>
      <PerfectScrollbar>
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <ul className="sidebarList">
              <Link to="/" className="link">
                <li
                  className={
                    pathname === "/"
                      ? "sidebarListItem active"
                      : "sidebarListItem"
                  }
                >
                  <DashboardOutlined className="sidebarIcon" />
                  {!sidebarShrink && "Home"}
                </li>
              </Link>
              <Link to="/users" className="link">
                <li
                  className={
                    pathname === "/users"
                      ? "sidebarListItem active"
                      : "sidebarListItem"
                  }
                >
                  <PermIdentity className="sidebarIcon" />
                  {!sidebarShrink && "Users"}
                </li>
              </Link>
              <Link to="/products" className="link">
                <li
                  className={
                    pathname === "/products"
                      ? "sidebarListItem active"
                      : "sidebarListItem"
                  }
                >
                  <Storefront className="sidebarIcon" />
                  {!sidebarShrink && "Products"}
                </li>
              </Link>
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                {!sidebarShrink && "Analytics"}
              </li>
              <li className="sidebarListItem">
                <TrendingUp className="sidebarIcon" />
                {!sidebarShrink && "Sales"}
              </li>

              <div className="dropDownMenu" onClick={handleNotificationMenu}>
                <li className="sidebarListItem">
                  <div className="sidebarIconNotifiCon">
                    <NotificationsNone className="sidebarIcon" />
                    <span className="sidebarIconNotifiDot"></span>
                  </div>
                  {!sidebarShrink && "Notification"}
                  {!sidebarShrink && (
                    <KeyboardArrowDown
                      className={
                        notificationMenu
                          ? "sidebarDropdownIcon turnUp"
                          : "sidebarDropdownIcon"
                      }
                    />
                  )}
                </li>
                {notificationMenu && !sidebarShrink && (
                  <ul className="sidebarDropDownList">
                    <li className="sidebarDropDownItem">
                      <MailOutline className="sidebarIcon" />
                      Mail
                    </li>
                    <li className="sidebarDropDownItem">
                      <DynamicFeed className="sidebarIcon" />
                      Feedback
                    </li>
                    <li className="sidebarDropDownItem">
                      <div className="sidebarIconNotifiCon">
                        <ChatBubbleOutline className="sidebarIcon" />
                        <span className="sidebarIconMessaDot"></span>
                      </div>
                      Messages
                    </li>
                  </ul>
                )}
              </div>

              <Link to="/setting" className="link">
                <li
                  className={
                    pathname === "/setting"
                      ? "sidebarListItem active"
                      : "sidebarListItem"
                  }
                >
                  <SettingsOutlined className="sidebarIcon" />
                  {!sidebarShrink && "Settings"}
                </li>
              </Link>
            </ul>
          </div>

          {/* <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
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
        </div> */}
        </div>
      </PerfectScrollbar>
      <div className="sidebarLogout">
        <ExitToAppOutlined className="sidebarIcon" />
        {!sidebarShrink && "Logout"}
      </div>
    </div>
  );
}

export default Sidebar;
