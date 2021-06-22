import React from "react"

export default (props) => {
  const { name, id } = props.sub;
  return (
    <>
      <h1>SubEdit.js</h1>
      <form action={`/subs/${id}`} method='post'>
        <input type="hidden" name="_method" value="patch" />
        <input placeholder="Name" type="text" defaultValue={name} name="sub[name]" />
        <button type="submit">add</button>
      </form>
    </>
  ) 
}