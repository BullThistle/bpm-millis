import { Component } from 'solid-js'

export const Button: Component<{
  symbol: string
  onClick(): void
}> = ({ symbol, onClick }) => (
  <button
    onclick={onClick}
    class={`
						relative inline-flex items-center justify-center p-0.5
						rounded-lg group purple-gradient group-hover:from-purple-600
						group-hover:to-blue-500 focus:ring-4
						focus:outline-none focus:ring-blue-300
					`}>
    <div
      class={`
						relative px-5 py-2.5 transition-all ease-in duration-75
						bg-gray-800 rounded-md group-hover:bg-opacity-0
					`}>
      <p
        class={`
					bg-clip-text text-transparent purple-gradient
					group-hover:text-white
				`}>
        {symbol}
      </p>
    </div>
  </button>
)
