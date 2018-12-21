const
Position        = require('.'),
PositionMapper  = require('./mapper')

class PositionFactory
{
  create(x, y)
  {
    x = +x
    y = +y

    return new Position(x, y)
  }

  createMapper()
  {
    return new PositionMapper
  }
}

module.exports = PositionFactory
