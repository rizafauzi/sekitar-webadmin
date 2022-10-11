export interface IconSVGProperties {
  color?: string
  width?: number
  height?: number
}

export interface Properties {
  name: string
  width?: number
  height?: number
  color?: string
  path?: string
}

export interface IconTypes {
  [key: string]: React.FC<Properties>
}
