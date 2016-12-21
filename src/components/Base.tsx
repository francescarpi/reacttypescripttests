import * as React from 'react'

export interface BaseProps { children: any }

export function Base (props: BaseProps) {
  return (
    <div>
      Base
      <hr/>
      {props.children}
     </div>
  )
}