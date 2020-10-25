import {
  emailValidation,
  houseNameValidation,
  phoneValidation,
  postcodeValidation,
  stringValidation,
} from '../helper/validation'

it('string validation rules', () => {
  expect(stringValidation('a120', 'error msg')).toBe('error msg')
  expect(stringValidation('', 'error msg')).toBe('error msg')
  expect(stringValidation('pure string', 'error msg')).toBe('')
})

it('email validation rules', () => {
  expect(emailValidation('m12@gmail', 'not email')).toBe('not email')
  expect(emailValidation('m12@unsw.edu', 'not email')).toBe('')
  expect(emailValidation('m12@gmail.com', 'not email')).toBe('')
})

it('postcode validation rules', () => {
  expect(postcodeValidation('m126', 'not postcode')).toBe('not postcode')
  expect(postcodeValidation('123', 'not postcode')).toBe('not postcode')
  expect(postcodeValidation('2017', 'not postcode')).toBe('')
})

it('phone validation rules', () => {
  expect(phoneValidation('1410680111', 'not phone')).toBe('not phone')
  expect(phoneValidation('141068011', 'not phone')).toBe('not phone')
  expect(phoneValidation('141068011x', 'not phone')).toBe('not phone')
  expect(phoneValidation('0410680111', 'not phone')).toBe('')
})

it('house name validation rules', () => {
  expect(houseNameValidation('12', 'not house')).toBe('')
  expect(houseNameValidation('unit 12', 'not house')).toBe('')
  expect(houseNameValidation('unit 12!', 'not house')).toBe('not house')
})
