import { Component } from 'solid-js'

export const Button: Component<{
  symbol: string
  onClick: () => void
}> = props => (
  <button onClick={props.onClick} class=' text-purple-gradient w-6'>
    {props.symbol}
  </button>
)
