class InvalidPositionError extends Error
{
  constructor(...args)
  {
    super(...args)
    this.code = 'ERR_INVALID_POSITION'
  }
}

module.exports = InvalidPositionError
