
class UnauthorizedError extends Error {
  constructor(message) {
    super(message)
    this.message = message || 'Anonymous Access is Denied'
    this.code = 401
  }
}


module.exports = {
  UnauthorizedError,
}