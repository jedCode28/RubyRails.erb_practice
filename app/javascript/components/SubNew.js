import React from 'react'

export default () => {
  const { name } = props.sub; 
  const defaultName = name ? name : "";
  return (
    <>
      <h1>SubNew.js</h1>
      <form action="/subs" method="post">
        <input 
          placeholder="Name"
          type="text"
          defaultValue={defaultName}
          name="sub[name]"
        />
        <button type="submit">add</button>
      </form>
    </>
  )
}