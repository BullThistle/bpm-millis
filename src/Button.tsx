import { Component } from 'solid-js'

export const Button: Component<{
  symbol: string
  onClick(): void
}> = ({ symbol, onClick }) => (
  <button onclick={onClick} class=' text-purple-gradient w-6'>
    {symbol}
  </button>
)
