import { Component, createSignal, For } from 'solid-js'
import { Button } from './Button'

const oneMinute = 60000

const App: Component = () => {
  const [bpm, setBpm] = createSignal(130)

  const increment = () => setBpm(bpm() + 1)
  const decrement = () => setBpm(bpm() - 1)

  const oneBeat = () => oneMinute / bpm()

  const divisions = [
    { division: '1/1', value: () => Math.round(oneBeat()) },
    { division: '1/2', value: () => Math.round(oneBeat() / 2) },
    { division: '1/4', value: () => Math.round(oneBeat() / 4) },
    { division: '1/8', value: () => Math.round(oneBeat() / 8) },
    { division: '1/16', value: () => Math.round(oneBeat() / 16) }
  ]

  return (
    <div class='h-screen w-screen bg-black'>
      <div class='flex place-content-center items-center pt-5'>
        <Button symbol='↓' onClick={decrement} />
        <p class='text-purple-gradient w-9 text-center'>{bpm()}</p>
        <Button symbol='↑' onClick={increment} />
      </div>
      <div class='mt-5 flex place-content-center'>
        <div class='flex w-80 flex-col divide-y'>
          <div class='flex place-content-center pb-2'>
            <For each={divisions}>
              {({ division }) => (
                <p class='text-purple-gradient w-14 text-center'>{division}</p>
              )}
            </For>
          </div>
          <div class='flex place-content-center pt-2'>
            <For each={divisions}>
              {({ value }) => (
                <p class='text-purple-gradient w-14 text-center'>{value()}</p>
              )}
            </For>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
