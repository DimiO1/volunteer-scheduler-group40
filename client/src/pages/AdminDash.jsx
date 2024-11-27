/*import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function AdminDash() {
  const navigate = useNavigate(); // React Router navigate hook

  const handleNavigation = (path) => {
    toast.success(`Navigating to ${path}...`);
    navigate(path);
  };

  return (
    <div className="sidebar">
      <div onClick={() => handleNavigation("/users")} className="sidebar-item">
      <button type = 'submit'>User</button>
      </div>
      <div onClick={() => handleNavigation("/participation-history")} className="sidebar-item">
      <button type = 'submit'>Participation History</button>
      </div>
    </div>
  );
}

export default AdminDash;*/

import React from 'react';
import './dashboard1.css'; // Custom CSS

function AdminDash() {
  const openSidebar = () => {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      sidebar.style.display = 'block';
    }
  };

  const closeSidebar = () => {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      sidebar.style.display = 'none';
    }
  };

  return (
    <div className="grid-container">
      {/* Header */}
      <header className="header">
        <div className="menu-icon" onClick={openSidebar}>
          <span className="material-icons-outlined">menu</span>
        </div>
        <div className="header-left">
          <a href="home.html">
            <i className="fa fa-search"></i>
          </a>
        </div>
        <div className="header-right">
          <a href="home.html">
            <i className="fa fa-home"></i>
          </a>
        </div>
      </header>
      {/* End Header */}

      {/* Sidebar */}
      <aside id="sidebar">
        <div>
          <div className="sidebar-title">
            <div className="sidebar-brand">
            </div>
            <span
              className="material-icons-outlined"
              onClick={closeSidebar}
            >
              close
            </span>
          </div>

          <div className="side-link">
            <ul className="sidebar-list">
              <a href="dashboard.html">
                <li className="sidebar-list-item">
                  <i className="fa fa-dashboard"></i>
                  <span>Dashboard</span>
                </li>
              </a>
              <a href="doctor.html">
                <li className="sidebar-list-item">
                  <i className="fa fa-user-md"></i>
                  <span>Users</span>
                </li>
              </a>
          
            </ul>
          </div>
        </div>

        <a className="sidebar-list-item" id="logout">
          <i className="fa fa-sign-out"></i>
          <span>Logout</span>
        </a>
      </aside>
      {/* End Sidebar */}

      {/* Main */}
      <main className="main-container">
        <div className="main-title">
          <p className="font-weight-bold">ADMIN DASHBOARD</p>
        </div>


        <div className="data">
          <h3>Report</h3>
          <div className="table-info">
            <table>
              <thead>
                <tr>
                  <th>Volunteer</th>
                  <th>Participation History</th>
                </tr>
              </thead>
              <tbody id="employee-data"></tbody>
            </table>
          </div>
        </div>
      </main>
      {/* End Main */}
    </div>
  );
}

export default AdminDash;
