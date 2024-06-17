import React from 'react';
import Switch from '@mui/material/Switch';
import './Header.css'
const Header = ({ isAdmin, toggle }) => (

  <header className="header">
    <div className="header-content">
      <div style={{display:'flex', alignItems:'center'}}>
        <p className='toggle-text'>admin</p>
            <Switch
              checked={isAdmin}
              onChange={toggle}
              sx={{
                '& .MuiSwitch-switchBase.Mui-checked': {
                  color: 'yellow',
                },
                '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                  backgroundColor: 'yellow',
                },
                '& .MuiSwitch-switchBase': {
                  color: '#fff',
                },
                '& .MuiSwitch-track': {
                  backgroundColor: '#666',
                },
              }}
            />
            <p className='toggle-text'>user</p>
            </div>
    </div>
  </header>
);
export default Header;