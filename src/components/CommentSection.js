import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { PropTypes } from 'prop-types'

import Comment from './Comment'
import './CommentSection.css'
import './ProductList.css'
import './ProductItem.css'

const CommentSection = ({ id }) => {
  const [commentText, setCommentText] = useState('')
  const [commentAuthor, setCommentAuthor] = useState('')
  const [commentData, setCommentData] = useState({ id: id, author: commentAuthor, text: commentText })

  const dispatch = useDispatch()
  const allComments = useSelector((state) => state.comments)

  const comments = useSelector((state) => state.comments.filter((comment) => comment.id === id))

  const onAuthorChange = (event) => {
    setCommentAuthor(event.target.value)
  }

  const onTextChange = (event) => {
    setCommentText(event.target.value)
  }

  const sendComment = () => {
    // Make sure the user has typed something
    if (commentText.length && commentAuthor.length) {
      dispatch({ type: 'ADD_COMMENT', commentData })
    }
  }

  useEffect(() => {
    setCommentData({ id: id, author: commentAuthor, text: commentText })
    setCommentData({ id: id, author: commentAuthor, text: commentText })
  }, [id, commentAuthor, commentText])

  useEffect(() => {
    if (commentText.length && commentAuthor.length) {
      // Persist data in localStorage
      window.localStorage.setItem('allComments', JSON.stringify(allComments))
    }
  }, [commentText, commentAuthor, allComments])

  useEffect(() => {
    // Retrieve data from localStorage and dispatch it to Redux
    // Run only once
    if (window.localStorage.getItem('allComments')) {
      const commentsInLocalStorage = JSON.parse(window.localStorage.getItem('allComments'))
      dispatch({ type: 'INITILIZE_FROM_LOCAL_STORAGE', commentsInLocalStorage })
    }
  }, [])

  return (
    <div className='container comment'>
      <div className='product-heading'>
        <div className='comment-heading'>Comments</div>
      </div>
      {comments.map((comment, index) =>
        <Comment comment={comment} index={index} key={index} />
      )}
      <hr />
      <label>Name</label>
      <input className='comment-input author' value={commentAuthor} type='text' onChange={onAuthorChange} placeholder='Name' />
      <label>Leave a comment</label>
      <input className='comment-input text' value={commentText} type='text' onChange={onTextChange} placeholder='Thoughts on this gadget?' />
      <button className='send-comment' onClick={sendComment}>Shoot it!</button>
    </div>
  )
}

CommentSection.propTypes = {
  id: PropTypes.number.isRequired
}

export default CommentSection
