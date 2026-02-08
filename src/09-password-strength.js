/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {

  function checkUpperCase(password){
    for(let ch of password){
      if(ch >= 'A' && ch <= 'Z')
        return true
    }
      return false
  }

  function checkLowerCase(password){
    for(let ch of password){
      if(ch >= 'a' && ch <= 'z')
        return true
    }
      return false
  }

  function checkNumber(password){
    for(let ch of password){
      if(ch >= '0' && ch <= '9')
        return true
    }
      return false
  }

  function checkSpecial(password){
    let str = '!@#$%^&*()_+-=[]{}|;:,.<>?'
    for(let ch of password){
      if(str.includes(ch))
        return true
    }
      return false
  }

  let criteriaCount = 0

  if(typeof password === 'string' ){ 
    if(password.length >= 8)
      criteriaCount += 1
    
    if(checkUpperCase(password))
      criteriaCount += 1
    
    if(checkLowerCase(password))
      criteriaCount += 1
    
    if(checkNumber(password))
      criteriaCount += 1
    
    if(checkSpecial(password))
      criteriaCount += 1
  }

  if(criteriaCount < 2)
    return 'weak'
  else if(criteriaCount >= 2 && criteriaCount < 4)
    return 'medium'
  else if(criteriaCount == 4)
    return 'strong'
  else if(criteriaCount == 5)
    return 'very strong'
}