import React, { Component } from 'react';
import { connect } from 'react-redux'
// add any needed imports here
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.userCount} Users!
          {this.props.users.map((u, i) => {
            return(<li key={i}>{u.username}, {u.hometown}</li> )
          })}
          {/* In addition, display the total number of users curently in the store */}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

function mapStateToProps(state){
  return {users: state.users, userCount: state.users.length}
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
