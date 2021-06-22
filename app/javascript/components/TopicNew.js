import React from 'react'

export default (props) => {
  const { topic, sub } = props;
  const { name, body, errors } = topic;
  const defaultName = name ? name : "";
  const defaultBody = body ? body : "";
  return (
    <React.Fragment>
      <h1>Topic New</h1>
      {errors && errors}
      <form action={`/subs/${sub.id}/topics`} method="post">
        <p>Name</p>
        <input defaultValue={defaultName} name="topic[name]" type="text" />
        <p>Body</p>
        <textarea defaultValue={defaultBody} name="topic[body]" />
        <br />
        <button type="submit">add</button>
      </form>
    </React.Fragment>
  )
}