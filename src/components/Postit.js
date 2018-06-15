import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { togglePostIt, deletePostIt } from '../reducers/postit'

const styles = {
  complete: {
    textDecoration: 'line-through',
    color: 'green'
  }
}

const Postit = ({ id, title, body, complete, dispatch }) => (
  <Fragment>
    <li
      onClick={() => dispatch(togglePostIt(id))}
      style={ complete ? styles.complete : {}}
    >
      {title}:{body}
    </li>
    <button onClick={() => dispatch(deletePostIt(id))}>Delete</button> 
  </Fragment>
)

export default connect()(Postit)