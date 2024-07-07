import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Sidebar from './SideBar'
import './Mens';

const AddCartButton = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [selectedColor, setSelectedColor] = useState('');

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div>
            {/* <div className="filter-btn" onClick={toggleSidebar}>
                <FaShoppingCart color='black' />
                <span style={{color: "#000", marginLeft: "15px"}}>ADD TO CART</span>
                {selectedColor && <span className="selected-color">{selectedColor}</span>}
            </div> */}
            <button className='add2cart-btn'>
                <FaShoppingCart className="icon" />&nbsp;&nbsp;&nbsp;ADD TO CART
            </button>
            {/* <div>
                <button className='filter-btn'> ADD TO CART
                </button>
            </div> */}
            <Sidebar
                isOpen={isSidebarOpen}
                toggleSidebar={toggleSidebar}
                setSelectedColor={setSelectedColor}
            />
        </div>
    );
};

export default AddCartButton;
