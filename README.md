# Welcome to Seconds Clock

Compatible with:

- React Native
- React js
- TypeScript

currentTime = 10:23:18 pm (hours, min, sec , am || pm)
currentDay = Weekdays
hour
min
seconds
term "AM" | "PM"

![ezgif com-gif-maker](https://user-images.githubusercontent.com/76874617/161039582-d17014d1-a6e0-4de4-891d-2e3f949180de.gif)


## Quick Start

```
npm i react-seconds-clock
```

**Use**

```
import { useClock } from 'react-seconds-clock'

const App = () => {
  const { currentTime, currentDay, hour, minute, seconds, term } = useClock()

  return (
    <div>
      <h1>{currentTime}</h1>
      <h1>{currentDay}</h1>
      <h1>{hour}</h1>
      <h1>{minute}</h1>
      <h1>{seconds}</h1>
      <h1>{term}</h1>
    </div>
  )
}

export default App

```
