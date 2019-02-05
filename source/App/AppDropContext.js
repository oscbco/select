import React, {Component, Fragment} from 'react';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import AppbarContainer from '../Appbar/Appbar/AppbarContainer';
import AppcontentContainer from '../Appcontent/Appcontent/AppcontentContainer';

class AppDropContext extends Component {
  render () {
    return (
      <Fragment>
        <AppbarContainer />
        <AppcontentContainer />
      </Fragment>
    );
  }
}

export default DragDropContext(HTML5Backend)(AppDropContext);
