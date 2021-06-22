import React from "react";

export default (props) => {
  const { sub, topic } = props
  return(
    <React.Fragment>
      <div className="topic-card">
        <h1>Topic: {topic.name}</h1>
        <h6>Sub: {sub.name}</h6>
        <p>{topic.body}</p>
        <a href={`/subs`}>subs</a>
        <a href={`/`}>also subs</a>
        <a href={`/subs/${sub.id}`}>sub show</a>
      </div>
    </React.Fragment>
  )
}