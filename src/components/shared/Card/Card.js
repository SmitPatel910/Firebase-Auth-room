import React from 'react';
import './Card.css';

const Card = ({ title, icon, children}) => {
    return (
            <div className="card">
                <div className="headingWrapper">
                    <img src={`/images/${icon}.png`} alt="logo"/>
                    <h1 className="heading">{title}</h1>
                </div>

                {children}      
            </div>

    )
}

export default Card
