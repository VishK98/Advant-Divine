import React from 'react';

const HeaderText = ({ text }) => {
    return (
        <div className="section-header">
            <hr className="line" />
            <span className="section-text">{text}</span>
            <hr className="line" />
        </div>
    );
}

export default HeaderText;
