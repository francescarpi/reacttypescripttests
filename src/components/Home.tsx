import * as React from 'react'
import { Hello } from './HelloWorld'

export interface HomeProps {}
export interface HomeState {}

export class Home extends React.Component<HomeProps, HomeState> {
  render () {
    return (
      <div>
        <Hello name="Francesc"/>
      </div>
    )
  }
}