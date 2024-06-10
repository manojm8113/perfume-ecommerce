import React, { useState } from 'react';
import './Sidebarmenu.css';
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaCommentAlt,
  FaThList,
  FaIndustry,
} from 'react-icons/fa';
import { AiOutlineLogout } from "react-icons/ai";
import { NavLink, useNavigate } from 'react-router-dom';
import { FaUsersGear } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { LogoutDatas } from '../../Redux/Adminslice';

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      try {
        dispatch(LogoutDatas());
        alert("You are logged out successfully!");
        navigate('/Adminlogin');
      } catch (err) {
        console.log("logout error:", err);
      }
    }
  };

  const menuItem = [
    {
      path: "/Dashbord",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/users",
      name: "Users",
      icon: <FaUserAlt />,
    },
    {
      path: "/comment",
      name: "Comment",
      icon: <FaCommentAlt />,
    },
    {
      path: "/productList",
      name: "Product List",
      icon: <FaThList />,
    },
    {
      path: "/addcompany",
      name: "Company",
      icon: <FaIndustry />,
    },
    {
      path: "/Companys",
      name: "Companys",
      icon: <FaUsersGear />,
    },
  ];

  return (
    <div>
      <div className="head">
        <h1>Fragrances</h1>
      </div>
      <div className="containe">
        <div className="row">
          <div className="col-3">
            <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
              <div className="top_section">
                <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                  <FaBars onClick={toggle} />
                </div>
              </div>
              {menuItem.map((item, index) => (
                <NavLink to={item.path} key={index} className="link" activeclassname="active">
                  <div className="icon">{item.icon}</div>
                  <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                </NavLink>
              ))}
              <div className="link logout-button" onClick={logout}>
                <div className="icon"><AiOutlineLogout  /></div>
                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Logout</div>
              </div>
            </div>
            <main>{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
