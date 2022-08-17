import { Component, createSignal, For } from 'solid-js'

const App: Component = () => {
  const [bpm, setBpm] = createSignal(130)

  const divideBy = (division: number, triplet: boolean = false) =>
    Math.round((240000 / bpm() / division) * (triplet ? 0.75 : 1))

  const divisions = () => [
    { division: '1/1', value: divideBy(1) },
    { division: '1/1D', value: divideBy(1, true) },
    { division: '1/2', value: divideBy(2) },
    { division: '1/2D', value: divideBy(2, true) },
    { division: '1/4', value: divideBy(4) },
    { division: '1/4D', value: divideBy(4, true) },
    { division: '1/8', value: divideBy(8) },
    { division: '1/8D', value: divideBy(8, true) },
    { division: '1/16', value: divideBy(16) },
    { division: '1/16D', value: divideBy(16, true) }
  ]

  const increment = () => setBpm(bpm() + 1)
  const decrement = () => setBpm(bpm() - 1)

  return (
    <div class='h-screen w-screen overflow-hidden bg-black'>
      <div class='text-purple-gradient flex place-content-center items-center pt-5'>
        <button onClick={decrement} class='w-6'>
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
        <button onClick={increment} class='w-6'>
          ↑
        </button>
      </div>
      <div class='flex place-content-center pt-5'>
        <div class='flex flex-col'>
          <div class='flex place-content-center pb-2'>
            <For each={divisions()}>
              {({ division }) => (
                <p class='text-purple-gradient w-14 text-center'>{division}</p>
              )}
            </For>
          </div>
          <div class='mt-1 flex place-content-center bg-gradient-to-r  from-[#6EE7B7] pt-0.5'>
            <div class='mb-0 flex h-32 bg-black pt-2.5'>
              <For each={divisions()}>
                {({ value }) => (
                  <p class='text-purple-gradient w-14 text-center'>{value}</p>
                )}
              </For>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
