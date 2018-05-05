import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import * as someActions from 'store/modules/some';

class ListContainer extends Component {
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
)(ListContainer);