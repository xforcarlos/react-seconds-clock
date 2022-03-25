import React from 'react'
import { Text, View } from 'react-native'
import { useClock } from 'react-seconds-clock'

const App = () => {
  const { currentTime, currentDay, hour, minute, seconds, term } = useClock()

  return (
    <View>
      <Text>{currentTime}</Text>
      <Text>{currentDay}</Text>
      <Text>{hour}</Text>
      <Text>{minute}</Text>
      <Text>{seconds}</Text>
      <Text>{term}</Text>
    </View>
  )
}

export default App
