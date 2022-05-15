import React from 'react';

const AppTemplate = ({ Header, Content }) => {
  return (
    <div className='inner'>
      {Header}
      <br />
      {Content}
    </div>
  );
};

export default AppTemplate;
