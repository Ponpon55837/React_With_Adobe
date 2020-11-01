import React, { useRef } from 'react'
import { useButton } from '@react-aria/button'
import { useSearchField } from '@react-aria/searchfield'
import { useSearchFieldState } from '@react-stately/searchfield'
import { useToggleState } from '@react-stately/toggle'
import { useCheckbox } from '@react-aria/checkbox'



export const AodbeButton = (props) => {
  let ref = useRef()
  let { buttonProps } = useButton(props, ref)

  return (
    <button {...buttonProps} ref={ref}>
      {props.children}
    </button>
  )
}

export const AdobeSearchField = (props) => {
  let { label } = props
  let state = useSearchFieldState(props)
  let ref = useRef()
  let {labelProps, inputProps, clearButtonProps} = useSearchField(
    props,
    state,
    ref
  )
  let { buttonProps } = useButton(clearButtonProps)

  return (
    <div className="search-field">
      <label {...labelProps}>{label}</label>
      <div>
        <input {...inputProps} ref={ref} />
        {state.value !== '' && <button {...buttonProps}>❎</button>}
      </div>
    </div>
  )
}

export const AdobeCheckbox = (props) => {
  let state = useToggleState(props)
  let ref = useRef()
  let { inputProps } = useCheckbox(props, state, ref)

  return (
    <label style={{display: 'block'}}>
      <input {...inputProps} ref={ref} />
      {props.children}
    </label>
  )
}
