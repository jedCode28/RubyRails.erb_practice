import React from "react"

export default (props) => {
  const { id, name, created_at } = props.sub;
  return (
    <>
      <h1>Sub.js</h1>
      <h3>{name}</h3>
      <p>
        created: {created_at}, id: {id}
      </p>
      <a href="/">back</a>
    </>
  )
}