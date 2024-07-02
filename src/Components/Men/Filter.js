import React, { useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import Sidebar from './SideBar';
import './Men.css'; 

const FilterButton = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [selectedColor, setSelectedColor] = useState('');

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div>
            <div className="filter-btn" onClick={toggleSidebar}>
                <FaFilter />
                <span>Filter</span>
                {selectedColor && <span className="selected-color">{selectedColor}</span>}
            </div>
            <Sidebar
                isOpen={isSidebarOpen}
                toggleSidebar={toggleSidebar}
                setSelectedColor={setSelectedColor}
            />
        </div>
    );
};

export default FilterButton;
