const comments = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [
        ...state,
        action.commentData
      ]
    case 'INITILIZE_FROM_LOCAL_STORAGE':
      return [
        ...action.commentsInLocalStorage
      ]
    default:
      return state
  }
}

export default comments
