import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Window from '../../Window/Window';
import AppDropContext from './AppDropContext';

class AppContainer extends Component {
  static propTypes = {
    windowId: PropTypes.string
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.windowId !== this.props.windowId) {
      Window.restoreBounds(nextProps.windowId);
    }
  }
  render () {
    return <AppDropContext />;
  }
}

let mapStateToProps = (state) => ({
  windowId: state.get('windowId')
});

export default connect(mapStateToProps, null)(AppContainer);
