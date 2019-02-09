
function validatePrivilege(username, profile) {
  if (username === profile.username) {
    return true
  } else {
    return false
  }
}

module.exports = {
  validatePrivilege,
}