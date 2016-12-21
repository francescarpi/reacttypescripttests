import * as React from 'react'

export interface HelloProps { name: string }

export function Hello (props: HelloProps) {
  return <div>Hello <b>{props.name}</b></div>
}
