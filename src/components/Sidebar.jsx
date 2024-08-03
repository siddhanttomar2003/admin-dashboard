import React from 'react';
import './sidebar.css';
import NavItem from './NavItem';
import navList from '../data/navItem';
function Sidebar() {
    return (
        <aside id="sidebar" className="sidebar">
            <ul className="sidebar-nav" id="sidebar-nav">
                <li className="nav-item">
                    <a className="nav-link" href=" /">
                        <i className="bi bi-grid"></i>
                        <span>Dashboard</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className="nav-link collapsed"
                        data-bs-target="#components-nav"
                        data-bs-toggle="collapse"
                        href="#">
                        <i className="bi bi-menu-button-wide"></i>
                        <span>Documents</span>
                        <i className="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul
                        id="components-nav"
                        className="nav-content collapse"
                        data-bs-parent="#sidebar-nav" >
                        <li className="sub-item">
                            <a href="#">
                                <i className="bi bi-circle"></i>
                                <span>Customers</span>
                            </a>
                        </li>
                        <li className="sub-item">
                            <a href="#">
                                <i className="bi bi-circle"></i>
                                <span>Suppliers</span>
                            </a>
                        </li>
                        <li className="sub-item">
                            <a href="#">
                                <i className="bi bi-circle"></i>
                                <span>Logistic</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a
                        className="nav-link collapsed"
                        data-bs-target="#forms-nav"
                        data-bs-toggle="collapse"
                        href="#">
                        <i className="bi bi-journal-text"></i>
                        <span>Forms</span>
                        <i className="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul
                        id="forms-nav"
                        className="nav-content collapse"
                        data-bs-parent="#sidebar-nav">
                        <li className="sub-item">
                            <a href="#">
                                <i className="bi bi-circle"></i>
                                <span>Release Form</span>
                            </a>
                        </li>
                        <li className="sub-item">
                            <a href="#">
                                <i className="bi bi-circle"></i>
                                <span>Cancellation Form</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a
                        className="nav-link collapsed"
                        data-bs-target="#tables-nav"
                        data-bs-toggle="collapse"
                        href="#">
                        <i className="bi bi-layout-text-window-reverse"></i>
                        <span>Tables</span>
                        <i className="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul
                        id="tables-nav"
                        className="nav-content collapse"
                        data-bs-parent="#sidebar-nav">
                        <li className="sub-item">
                            <a href="#">
                                <i className="bi bi-circle"></i>
                                <span>General Tables</span>
                            </a>
                        </li>
                        <li className="sub-item">
                            <a href="#">
                                <i className="bi bi-circle"></i>
                                <span>Data Tables</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse">
                        <i className="bi bi-bar-chart"></i>
                        <span>Charts</span>
                        <i className="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul
                        id="charts-nav"
                        className="nav-content collapse"
                        data-bs-parent="#sidebar-nav">
                        <li className="sub-item">
                            <a href="#">
                                <i className="bi bi-circle"></i>
                                <span>Line Chart</span>
                            </a>
                        </li>
                        <li className="sub-item">
                            <a href="#">
                                <i className="bi bi-circle"></i>
                                <span>Bar Chart</span>
                            </a>
                        </li>
                        <li className="sub-item">
                            <a href="#">
                                <i className="bi bi-circle"></i>
                                <span>Pie Chart</span>
                            </a>
                        </li>
                        <li className="sub-item">
                            <a href="#">
                                <i className="bi bi-circle"></i>
                                <span>Area Chart</span>
                            </a>
                        </li>
                        <li className="sub-item">
                            <a href="#">
                                <i className="bi bi-circle"></i>
                                <span>Scatter Chart</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse">
                        <i className="bi bi-gem"></i>
                        <span>Icons</span>
                        <i className="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul
                        id="icons-nav"
                        className="nav-content collapse"
                        data-bs-parent="#sidebar-nav">
                        <li className="sub-item">
                            <a href="#" className="nav-link collapsed" data-bs-target="#bootstrap-icons-nav" data-bs-toggle="collapse">
                                <i className="bi bi-circle"></i>
                                <span>Bootstrap Icons</span>
                                <i className="bi bi-chevron-down ms-auto"></i>
                            </a>
                            <ul
                                id="bootstrap-icons-nav"
                                className="nav-content collapse"
                                data-bs-parent="#icons-nav">
                                <li>
                                    <a href="#">
                                        <i className="bi bi-circle"></i>
                                        <span>Bootstrap Icon 1</span>
                                    </a>
                                </li>
                                <li className="sub-item">
                                    <a href="#">
                                        <i className="bi bi-circle"></i>
                                        <span>Bootstrap Icon 2</span>
                                    </a>
                                </li>
                                <li className="sub-item">
                                    <a href="#">
                                        <i className="bi bi-circle"></i>
                                        <span>Bootstrap Icon 3</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sub-item" >
                            <a href="#" className="nav-link collapsed" data-bs-target="#remix-icons-nav" data-bs-toggle="collapse">
                                <i className="bi bi-circle"></i>
                                <span>Remix Icons</span>
                                <i className="bi bi-chevron-down ms-auto"></i>
                            </a>
                            <ul
                                id="remix-icons-nav"
                                className="nav-content collapse"
                                data-bs-parent="#icons-nav">
                                <li className="sub-item">
                                    <a href="#">
                                        <i className="bi bi-circle"></i>
                                        <span>Remix Icon 1</span>
                                    </a>
                                </li>
                                <li className="sub-item">
                                    <a href="#">
                                        <i className="bi bi-circle"></i>
                                        <span>Remix Icon 2</span>
                                    </a>
                                </li>
                                <li className="sub-item">
                                    <a href="#">
                                        <i className="bi bi-circle"></i>
                                        <span>Remix Icon 3</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="nav-heading">Pages</li>
                {navList.map(nav=>(
                    <NavItem key={nav.id} nav={nav}  />
                ))}
            </ul>
        </aside>
    );
}

export default Sidebar;
