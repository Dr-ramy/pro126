// types.ts

export type ButtonItem = {
  type?: "button"
  id: string
  text: string
  icon?: string
  time?: string
}


export type VideoItem = ButtonItem & {
  src: string
  title: string
}
