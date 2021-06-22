import React from 'react'

export default (props) => {
  const { topic, sub } = props;
  const { name, body, errors } = topic;
  return(
    <React.Fragment>
      <h1>Topic Edit</h1>
      {errors && errors}
      <form action={`/subs/${sub.id}/topics/${topic.id}`} method="post">
        <input type="hidden" name="_method" value="patch" />
        <p>Name</p>
        <input defaultValue={name} name="topic[name]" type="text" />
        <p>Body</p>
        <textarea defaultValue={body} name="topic[body]" />
        <br />
        <button type="submit">update</button>
      </form>
    </React.Fragment>
  )
}