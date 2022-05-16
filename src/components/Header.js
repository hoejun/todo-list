import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (location.pathname === '/') {
      setTitle('THIS WEEK');
    }
    if (location.pathname === '/edit') {
      setTitle('To-Do');
    }
  }, [location.pathname]);
  return (
    <div className='header'>
      <h1 className='card-heading'>{title}</h1>
      {location.pathname === '/' && (
        <div style={{ marginTop: '-20px' }}>신나는 일주일 계획합시다!</div>
      )}
    </div>
  );
};

export default Header;
