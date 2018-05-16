import validateRegister from '../../../client/utils/register'

test('validate Register is all cool ', () => {
  const expected = 'Sorry, passwords do not match'

  let user_name =  ''
  let user_email = ''
  let password = '' 
  let confirm_password = 'a'

  const actual = validateRegister(user_name, user_email, password, confirm_password)

  expect(actual.messagePassword).toEqual(expected)
})


test('validate Register is all cool ', () => {
  const expected = 'Please check your email, it looks incorrect'

  let user_name =  ''
  let user_email = 'ross@'
  let password = '' 
  let confirm_password = ''

  const actual = validateRegister(user_name, user_email, password, confirm_password)

  expect(actual.messageEmail).toEqual(expected)
})

test('validate Register is all cool ', () => {
  const expected = 'Please enter a user name'

  let user_name =  ''
  let user_email = ''
  let password = '' 
  let confirm_password = ''

  const actual = validateRegister(user_name, user_email, password, confirm_password)

  expect(actual.messageUserName).toEqual(expected)
})