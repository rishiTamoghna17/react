import React from 'react'

export default function Alert(props) {
    const capitalize = (word)=>{
        let lower = word.toLowerCase();
        let upper = lower.charAt(0).toUpperCase()+lower.slice(1);
        return upper;
    }
  return (
    props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
  {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
</div>
  )
}
