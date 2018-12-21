class PositionNotAvailible extends Error
{
  constructor(...args)
  {
    super(...args)
    this.code = 'ERR_POSITION_NOT_AVAILIBLE'
  }
}

module.exports = PositionNotAvailible
