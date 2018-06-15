const ADD_POSTIT = 'ADD_POSTIT'
const DELETE_POSTIT = 'DELETE_POSTIT'
const TOGGLE_POSTIT = 'TOGGLE_POSTIT'
const EDIT_POSTIT = 'EDIT_POSTIT'

export const addPostIt = (postit) => {
    return { type: ADD_POSTIT, postit}
}

export const deletePostIt = (id) => {
    return { type: DELETE_POSTIT, id }
}

export const togglePostIt = (id) => {
    return { type: TOGGLE_POSTIT, id }
}

export const editPostIt = (id) => {
    return { type: EDIT_POSTIT, id }
}

export default ( state = [], action ) => {
    switch(action.type) {
        case ADD_POSTIT:
            return [action.postit, ...state] 
        case EDIT_POSTIT:
            return [action.postit, ...state]
        case TOGGLE_POSTIT:
            return state.map ( postit => {
                if (postit.id === action.id)
                return {...postit, complete: !postit.complete}
                return postit 
        })
        case DELETE_POSTIT:
            return state.filter( p => p.id !== action.id)
        default:
            return state
    }
  }
  
  