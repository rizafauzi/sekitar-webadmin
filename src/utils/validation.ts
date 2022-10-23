/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prefer-const */
/* eslint-disable unicorn/prevent-abbreviations */

interface RulesTypes {
  requiredIf?: boolean
  minValue?: number
  maxValue?: number
  minLength?: number
  maxLength?: number
}

export interface IValidations {
  $invalid?: boolean
}

export const Validations = (form: Object, rules: Object) => {
  const objects: string[] = Object.keys(form)
  let result = {} as any
  objects.forEach(obj => {
    const value = form[obj as keyof typeof form]
    const rule = rules[obj as keyof typeof rules] as RulesTypes | undefined
    if (rule) {
      // Min Value
      if (typeof value === 'number' && rule.minValue && value < rule.minValue) {
        result[obj] = { value, invalid: true }
        return
      }

      // Max Value
      if (typeof value === 'number' && rule.maxValue && value < rule.maxValue) {
        result[obj] = { value, invalid: true }
        return
      }

      // Min Length
      if (rule.minLength && value.length < rule.minLength) {
        result[obj] = { value, invalid: true }
        return
      }

      // Max Length
      if (rule.maxLength && value.length > rule.maxLength) {
        result[obj] = { value, invalid: true }
        return
      }

      // Required If
      if (rule.requiredIf !== undefined) {
        result[obj] = { value, invalid: rule.requiredIf }
        return
      }

      result[obj] = { value, invalid: false }
    }
  })
  const listInvalid = Object.values(result).map((item: any) => item.invalid)
  return {
    ...result,
    $invalid: listInvalid.includes(true)
  }
}
