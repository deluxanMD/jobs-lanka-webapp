import React, { useState } from 'react';

import TopMenu from './reusable/top-menu';

import FindJob from './find-job';
import Companies from './companies';
import Resources from './resources';

const Home = () => {
  const [activeMenu, setActiveMenu] = useState(0);

  const handleActiveMenu = (menu) => setActiveMenu(menu);

  const renderComponent = () => {
    switch (activeMenu) {
      case 0:
        return <FindJob />;
      case 1:
        return <Companies />;
      case 2:
        return <Resources />;
      default:
        return <FindJob />;
    }
  };

  return (
    <div>
      <TopMenu activeMenu={activeMenu} handleActiveMenu={handleActiveMenu} />
      {renderComponent()}
    </div>
  );
};

export default Home;
