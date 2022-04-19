import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';

type PropsAudioContext = {
  isAudioEnable: boolean
  setIsAudioEnable: Dispatch<SetStateAction<boolean>>
}

const DEFAULT_VALUE = {
  isAudioEnable: false,
  setIsAudioEnable: () => {},
}

const AudioContext = createContext<PropsAudioContext>(DEFAULT_VALUE)

export function useAudio() {
  return useContext(AudioContext)
}

export function AudioProvider({ children }) {
  const [isAudioEnable, setIsAudioEnable] = useState(false)

  useEffect(() => {
    const bgMusic = document.getElementById('bg-music') as HTMLAudioElement
    const contentIconAudio = document.getElementById('content-icon-audio')

    if (isAudioEnable) {
      bgMusic.play()
      contentIconAudio.style.top = '-100%'
    } else {
      bgMusic.pause()
      contentIconAudio.style.top = '0'
    }
  }, [isAudioEnable])

  return (
    <AudioContext.Provider value={{ isAudioEnable, setIsAudioEnable }}>
      {children}
    </AudioContext.Provider>
  )
}
