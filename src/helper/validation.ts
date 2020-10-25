/**
 * This validation just to check whether value is string(space allowed)
 * If there is future validation specified, will add validation for
 * - street
 * - suburb
 * - state
 * - country
 * @param value
 * @param errorMsg return if the value not in right format

 */
export const stringValidation = (value: string, errorMsg: string) => {
  const r = /^[a-z ]+$/i
  return r.test(value) ? '' : errorMsg
}

/**
 * This validation is to check whether value is in the correct email format
 * @param value
 * @param errorMsg  return if the value not in right format
 */
export const emailValidation = (value: string, errorMsg: string) => {
  const r = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return r.test(value) ? '' : errorMsg
}

/**
 * This validation is to check whether value is in the correct postcode format
 * 4 digits
 * @param value
 * @param errorMsg  return if the value not in right format
 */
export const postcodeValidation = (value: string, errorMsg: string) => {
  const r = /^(0[289][0-9]{2})|([1-9][0-9]{3})$/
  return r.test(value) ? '' : errorMsg
}

/**
 * This validation is to check whether value is in the correct phone format
 * start with 0 - 0410680111(traditional au phone)
 * @param value
 * @param errorMsg  return if the value not in right format
 */
export const phoneValidation = (value: string, errorMsg: string) => {
  const phone = value.replace(/\s/g, '')
  const r = /^0[0-9]{9}$/
  return r.test(phone) ? '' : errorMsg
}

/**
 * This validation is to check whether value is in the correct houseName format
 * It could be number, string or both mixed
 * 1, unit 5, c402
 * @param value
 * @param errorMsg  return if the value not in right format
 */
export const houseNameValidation = (value: string, errorMsg: string) => {
  const r = /^[a-zA-Z0-9\s]*$/
  return r.test(value) ? '' : errorMsg
}
