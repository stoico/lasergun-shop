import React from 'react'
import { PropTypes } from 'prop-types'

import avatar from '../static/images/avatar.svg'
import './CommentSection.css'
import './ProductList.css'
import './ProductItem.css'

const Comment = ({ comment, index }) => {
  return (
    <div className='comment-box' key={index}>
      <div className='comment-author-section'>
        <span className='avatar-placeholder'><img src={avatar} alt='Profile icon' /></span>
        <div className='comment-author'>{comment.author}</div>
      </div>
      <p>{comment.text}</p>
    </div>
  )
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
}

export default Comment
