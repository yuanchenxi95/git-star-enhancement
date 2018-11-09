const asyncErrorWrapper = function (fn) {
  return (req, res, next) => {
    fn(req, res, next)
      .catch(e => {
        console.error(e)
        next(e)
      })
  }
}

module.exports = {
  asyncErrorWrapper,
}
