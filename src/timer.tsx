import * as React from 'react'

export interface UseTimer {
  timer: number
  onEndTime: () => void
}
export interface TimeProps {
  time: string
  onEndTime: () => void
}

export const useTimer = ({ time, onEndTime }: TimeProps): UseTimer => {
  if (!time) throw new Error(`time is required  ${time}`)

  const [timer, settimer] = React.useState(parseInt(time))

  React.useEffect(() => {
    if (timer <= 0) onEndTime()
    else {
      const interval = setInterval(() => {
        settimer(timer - 1)
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [timer, onEndTime])

  React.useEffect(() => {
    if (time !== '0') settimer(parseInt(time))
  }, [time])

  return {
    timer,
    onEndTime,
  }
}
