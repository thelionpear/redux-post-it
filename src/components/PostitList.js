import React from 'react'
import { connect } from 'react-redux'
import Postit from './Postit'
// import Warning from './Warning'

const filtered = (postit, currentFilter) => {
  switch(currentFilter) {
    case 'Active':
      return postit.filter( t => !t.complete )
    case 'Completed':
      return postit.filter( t => t.complete )
    default:
      return postit
  }
}

const PostitList = ({ postit, postitCount, filter }) => (
  <div>
    <h3>There are {postitCount} postits</h3>
    {/* <Warning /> */}
    <ul>
      { filtered(postit, filter).map( (t) => 
        <Postit key={t.id} {...t} /> 
      )}
    </ul>
  </div>
)

const mapStateToProps = (state) => {
  const { postit, filter } = state
  return { 
    postit,
    filter,
    postitCount: postit.length,
  }
}

export default connect(mapStateToProps)(PostitList)