
class UnauthorizedError extends Error {
  constructor(message) {
    super(message)
    this.message = message || 'Anonymous Access is Denied'
    this.code = 401
  }
}

class NotFoundError extends Error {
  constructor(message) {
    super(message)
    this.message = message || 'ID not found'
    this.code = 400
  }
}


module.exports = {
  UnauthorizedError,
  NotFoundError,
}