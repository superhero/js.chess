class NoPositionError extends TypeError
{
  constructor(...args)
  {
    super(...args)
    this.code = 'ERR_NO_POSITION'
  }
}

module.exports = NoPositionError
