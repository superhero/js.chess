class InvalidMoveError extends Error
{
  constructor(...args)
  {
    super(...args)
    this.code = 'ERR_INVALID_MOVE'
  }
}

module.exports = InvalidMoveError
