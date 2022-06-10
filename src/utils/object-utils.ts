import { isEmpty } from 'lodash'

export const clearEmptyObject = (object: { [x: string]: string | string[] | undefined }) => {
  const cleanedObject: { [x: string]: string | string[] | undefined } = {}
  Object.keys(object).forEach((key: string) => {
    if (
      isEmpty(object[key]) ||
      object[key] === '[]' ||
      !object[key] ||
      object[key] === 'undefined'
    ) {
      return
    }
    cleanedObject[key] = object[key]
  })
  return cleanedObject
}

export default clearEmptyObject
