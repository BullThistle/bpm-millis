import { Component, createSignal } from 'solid-js'
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
    <div class='bg-black w-screen h-screen'>
      <div class='flex place-content-center items-center pt-5'>
        <Button symbol='↓' onClick={decrement} />
        <p class='text-purple-gradient text-center w-9'>{bpm()}</p>
        <Button symbol='↑' onClick={increment} />
      </div>
      <div class='flex place-content-center mt-5'>
        <div class='flex flex-col divide-y w-80'>
          <div class='flex place-content-center pb-2'>
            {divisions.map(({ division }) => (
              <p class='w-14 text-purple-gradient text-center'>{division}</p>
            ))}
          </div>
          <div class='flex place-content-center pt-2'>
            {divisions.map(({ value }) => (
              <p class='w-14 text-purple-gradient text-center'>{value()}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
