import React from 'react';

import { Link } from "react-router-dom";

function Dashboard() {
    return (
        <div id="admin-dashboard" className="page-height page-padding">
            <h1 className="page-title">Admin Dashboard</h1>
            <Link className="admin-dashboard-link" to="addproduct">
                <div className="admin-dashboard-button">
                    <div>Add A Product</div>
                </div>
            </Link>
            <Link className="admin-dashboard-link" to="viewproducts">
                <div className="admin-dashboard-button">
                    <div>View All Products</div>
                </div>
            </Link>
            <Link className="admin-dashboard-link" to="vieworders">
                <div className="admin-dashboard-button">
                    <div>View All Orders</div>
                </div>
            </Link>
            <Link className="admin-dashboard-link" to="storesettings">
                <div className="admin-dashboard-button">
                    <div>Store Settings</div>
                </div>
            </Link>
        </div>
    );
}

export default Dashboard;