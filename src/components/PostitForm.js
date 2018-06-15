import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { addPostIt } from '../reducers/postit'
import { incId } from '../reducers/incId'


class PostitForm extends React.Component {
  state = { title: '', body: '' }

  handleSubmit = (e) => {
    e.preventDefault()
    const { title, body } = this.state
    const { dispatch, id } = this.props
    const postit = { title, body, id, complete: false }
    dispatch(addPostIt(postit))
    dispatch(incId())
    this.setState({ title: '', body: ''})
  }


  handleChange = (e) => {
    const { target: { name, value }} = e 
    this.setState({ [name]: value })
  }

  render () {
    const { title, body } = this.state
    return (
      <Fragment> 
        <h1>Add a Post-It Note</h1>
        <form onSubmit={this.handleSubmit}>
          <input name="title" 
          value={title}
          onChange={this.handleChange}
          required
          />
        
        <input name="body" 
          value={body}
          onChange={this.handleChange}
          required
        />
        <button>Submit</button> 
        </form> 
      </Fragment>
    )
  }
  
}

const mapStateToProps = (state) => {
  return { id: state.incId }
}

export default connect(mapStateToProps)(PostitForm)