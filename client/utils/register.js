export default function validateRegister(user_name, user_email, password, confirm_password) {

  let validationStatus = {
      messagePassword : '',
      messageEmail : '',
      messageUserName : '',
      valid : true
  }  

  let isPasswordOK = validatePassword(password, confirm_password) 
  let isEmailOK = validateEmail(user_email)
  let isUserNameOK = validateUserName(user_name)
  
  if (!isPasswordOK) { 
    validationStatus.messagePassword = 'Sorry, passwords do not match'
    validationStatus.valid = false
  } 
  
  if (!isEmailOK) { 
    validationStatus.messageEmail = 'Please check your email, it looks incorrect'
    validationStatus.valid = false
  } 
  
  if (!isUserNameOK) { 
    validationStatus.messageUserName = 'Please enter a user name'
    validationStatus.valid = false
  }   

  return validationStatus
 
}

function validatePassword(password, confirm_password) {
  return password == confirm_password
}

function validateEmail(user_email) {
  // From https://www.w3resource.com/javascript/form/email-validation.php  
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if (user_email.match(mailformat)) {
    return true  
  } else {
    return false  
  }
}

function validateUserName(user_name) {
  console.log({user_name})
  return user_name.length > 0
}

