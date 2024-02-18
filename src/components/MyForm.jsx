/* eslint-disable react/prop-types */

import useInput from "../hooks/useinput";

export default function MyForm({update}) {
    let input = useInput()
    function onTaskAdd(event) {
        event.preventDefault()
        update(input.value)
    }

  return (
    <form className="form">
      <input type="text" {...input} placeholder="Type here..."/>
      <button onClick={onTaskAdd} >add</button>
    </form>
  );
  
}


