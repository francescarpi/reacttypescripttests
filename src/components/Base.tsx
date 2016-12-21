import * as React from 'react'

export interface BaseProps { children: any }
interface Context { router: Object }

export function Base (props: BaseProps, undefined, context: Context) {
  console.log(context);
  
  return (
    <div>
      <a href="">Home</a> | <a href="">Second page</a>
      <hr/>
      {props.children}
      <hr/>
      Footer
     </div>
  )
}

Base.contextTypes = {
  router: React.PropTypes.object.isRequired
}