import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Head from './head'
import { getData } from '../redux/reducers/users'

const Dummy = (props) => {
  const [pageIndex, setPageIndex] = useState(0)
  const { getData: getDataProps } = props
  useEffect(() => {
    getDataProps();
  }, [getDataProps, pageIndex])
  return (
    <div>
      <Head title="Hello" />
      <div> {props.isRequesting ? 'Hi there' : ''} </div>
      <div> Page { pageIndex } { props.users.length } </div>
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
      <button
        type="button"
        onClick={() => setPageIndex(Math.max(0, pageIndex - 1))}
      >
        Previous
      </button>
      <button
        type="button"
        onClick={() => setPageIndex(pageIndex + 1)}
      >
        Next
      </button>
      <img src={`/tracker/${pageIndex}.gif`} alt="tracker" />
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
