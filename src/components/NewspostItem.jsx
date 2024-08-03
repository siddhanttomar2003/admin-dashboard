import React from 'react'
import img from '../images/first.jpg'
function NewspostItem({item}) {
  return (
    <div className="post-item clearfix">
        <img src={img} alt="" />
        <h4>
            <a href="#">{item.title}</a>
        </h4>
        <p>{item.subtitle}...</p>
    </div>
  )
}
export default  NewspostItem;