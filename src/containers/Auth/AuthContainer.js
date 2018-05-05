import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import * as someActions from 'store/modules/some';

class AuthContainer extends Component {
 render() {
   return (
    <div></div>
   );
 }
}

export default connect(
  (state) => ({
  }),
  (dispatch) => ({
  })
)(AuthContainer);