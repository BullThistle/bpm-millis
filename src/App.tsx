import { Component, createSignal } from 'solid-js'
import { Button } from './Button'

const oneMinute = 60000

const App: Component = () => {
  const [bpm, setBpm] = createSignal(130)

  const increment = () => setBpm(bpm() + 1)
  const decrement = () => setBpm(bpm() - 1)

  const oneBeat = () => Math.round(oneMinute / bpm())

  return (
    <>
      <div class='bg-gray-800 w-screen h-screen text-gray-100 p-4'>
        <p class='text-4xl text-green-700 text-center py-20'>BPM Millis</p>
        <p class='text-4xl text-green-700 text-center'>{bpm()}</p>
        <p class='text-4xl text-green-700 text-center'>{`one beat ${oneBeat()}`}</p>
        <p class='text-4xl text-green-700 text-center'>{`half beat ${Math.round(
          oneBeat() / 2
        )}`}</p>
        <p class='text-4xl text-green-700 text-center'>{`quarter beat ${Math.round(
          oneBeat() / 4
        )}`}</p>
        <p class='text-4xl text-green-700 text-center'>{`eighth beat ${Math.round(
          oneBeat() / 8
        )}`}</p>
        <Button symbol='+' onClick={increment} />
        <Button symbol='-' onClick={decrement} />
      </div>
    </>
  )
}

export default App
