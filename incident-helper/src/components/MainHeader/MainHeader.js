import React from 'react';

// Menu Button Component
const MenuButton = () => {
    return (
        <button onClick={() => console.log('Menu clicked')}>Menu</button>
    );
}

// Header Component
const Header = () => {
    return (
        <h1>My Website</h1>
    );
}

// Settings Button Component
const SettingsButton = () => {
    return (
        <button onClick={() => console.log('Settings clicked')}>Settings</button>
    );
}

// Main Header Component
const MainHeader = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <MenuButton />
            <Header />
            <SettingsButton />
        </div>
    );
}

export default MainHeader;