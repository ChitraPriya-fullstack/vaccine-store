import React from 'react';
import './homepage.styles.scss';

const HomePage = () => (
    <div className="homepage">
        <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">COVID</h1>
                    <span className="subtitle">Order Now</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">MMR</h1>
                    <span className="subtitle">Order Now</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Hepatitis B</h1>
                    <span className="subtitle">Order Now</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Rotavirus</h1>
                    <span className="subtitle">Order Now</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">DTP</h1>
                    <span className="subtitle">Order Now</span>
                </div>
            </div>
        </div>
    </div>
);

export default HomePage;