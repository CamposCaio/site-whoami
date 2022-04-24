import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react'

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
    const containerIconAudio = document.querySelector(
      '#large-top-bar .container-icon-audio'
    )
    const containerAudioOff = containerIconAudio.querySelector(
      '.container-audio-off'
    ) as HTMLDivElement
    const containerAudioOn = containerIconAudio.querySelector(
      '.container-audio-on'
    ) as HTMLDivElement

    if (isAudioEnable) {
      bgMusic.play()
      containerAudioOff.style.opacity = '0'
      containerAudioOn.style.opacity = '1'
    } else {
      bgMusic.pause()
      containerAudioOn.style.opacity = '0'
      containerAudioOff.style.opacity = '1'
    }
  }, [isAudioEnable])

  return (
    <AudioContext.Provider value={{ isAudioEnable, setIsAudioEnable }}>
      {children}
    </AudioContext.Provider>
  )
}
