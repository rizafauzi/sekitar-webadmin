export interface TextFieldProperties {
  label: React.ReactNode | string
  children?: React.ReactNode | string | number
  hasColon?: boolean
  isBordered?: boolean
  labelSpan?: number
  valueSpan?: number
  /**
   * use for aligning label text and adding other classname
   * 'flex items-center' 'text-right' 'text-left' 'text-center'
   */
  labelClassname?: string
  /**
   * use for aligning value text and adding other classname
   * 'flex items-center' 'text-right' 'text-left' 'text-center'
   */
  valueClassname?: string
}
