import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Head from './head'
import { getData } from '../redux/reducers/users'

const Dummy = (props) => {
  const [counter] = useState(4)
  const { getData: getDataProps } = props
  useEffect(() => {
    getDataProps();
  }, [getDataProps])
  return (
    <div>
      <Head title="Hello" />
      <div> {props.isRequesting ? 'Your data is loading' : ''} </div>
      <div> Hello World {counter} </div>
      <table>
        <tr>
          <td>Avatar</td>
          <td>Name</td>
          <td>City</td>
          <td>Country</td>
          <td>Email</td>
          <td>Company</td>
          <td>Department</td>
          <td>Salary</td>
          <td>Age</td>
        </tr>
        {
          props.users.map(user => (
            <tr>
              <td><img src={user.avatar} alt="" /></td>
              <td>{user.name}</td>
              <td>{user.city}</td>
              <td>{user.country}</td>
              <td>{user.email}</td>
              <td>{user.company}</td>
              <td>{user.department}</td>
              <td>{user.salary}</td>
              <td>{user.age}</td>
            </tr>
          ))
        }
      </table>
      <img src={`/tracker/${counter}.gif`} alt="tracker" />
    </div>
  )
}

Dummy.propTypes = {}

const mapStateToProps = state => ({
  users: state.users.list,
  isRequesting: state.users.isRequesting
})

const mapDispatchToProps = dispatch => bindActionCreators({ getData }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dummy)
