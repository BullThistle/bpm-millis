import { Component, createSignal, For } from 'solid-js'

const App: Component = () => {
  const [bpm, setBpm] = createSignal(130)

  const divideBy = (division: number) => (60000 / bpm() / division).toFixed(2)

  const divisions = () => [
    { division: '1/1', value: divideBy(1) },
    { division: '1/2', value: divideBy(2) },
    { division: '1/4', value: divideBy(4) },
    { division: '1/8', value: divideBy(8) },
    { division: '1/16', value: divideBy(16) }
  ]

  const increment = () => setBpm(bpm() + 1)
  const decrement = () => setBpm(bpm() - 1)

  return (
    <div class='h-screen w-screen bg-black'>
      <div class='flex place-content-center items-center pt-5'>
        <button onClick={decrement} class='text-purple-gradient w-6'>
          ↓
        </button>
        <input
          value={bpm()}
          min={20}
          max={200}
          type='number'
          onChange={e => setBpm(parseInt(e.currentTarget.value))}
          class='text-purple-gradient w-9 appearance-none bg-black text-center outline-none'
        />
        <button onClick={increment} class='text-purple-gradient w-6'>
          ↑
        </button>
      </div>
      <div class='mt-5 flex place-content-center'>
        <div class='flex w-80 flex-col divide-y'>
          <div class='flex place-content-center pb-2'>
            <For each={divisions()}>
              {({ division }) => (
                <p class='text-purple-gradient w-20 text-center'>{division}</p>
              )}
            </For>
          </div>
          <div class='flex place-content-center pt-2'>
            <For each={divisions()}>
              {({ value }) => (
                <p class='text-purple-gradient w-20 text-center'>{value}</p>
              )}
            </For>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
