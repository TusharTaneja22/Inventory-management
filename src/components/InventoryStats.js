import React from 'react';
import { useSelector } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import OutOfStockIcon from '@mui/icons-material/RemoveShoppingCart';
import CategoryIcon from '@mui/icons-material/Category';
import './InventoryStats.css';

const InventoryStats = () => {
  const icons=[
    <ShoppingCartIcon style={{ color: 'white' }}/>,
    <AttachMoneyIcon style={{ color: 'white' }}/>,
    <OutOfStockIcon style={{ color: 'white' }}/>,
    <CategoryIcon style={{ color: 'white' }}/>
  ]
  const stats = useSelector((state) => state.stats);

  return (
    <div className="inventory-stats-container">
      <h1 style={{color:'white'}}>Inventory stats</h1>
      <div className="inventory-stats">

        {stats.map((stat, index) => (
          <div key={index} className="stat-widget">
            <div className='icon-container'>
            {icons[index]}
            </div>
            <div className='stat-details'>
            <p className='stat-label'>{stat.label}</p>
            <p className='stat-value'>{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InventoryStats;
