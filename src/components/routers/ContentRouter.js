import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomeContent from '../contents/HomeContent';
import EditContent from '../contents/EditContent';

const ContentRouter = () => {
  return (
    <Switch>
      <Route exact path={'/'} component={HomeContent}></Route>
      <Route path={'/edit'} component={EditContent}></Route>
    </Switch>
  );
};

export default ContentRouter;
