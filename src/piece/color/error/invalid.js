class InvalidColorError extends Error
{
  constructor(...args)
  {
    super(...args)
    this.code = 'ERR_INVALID_COLOR'
  }
}

module.exports = InvalidColorError
