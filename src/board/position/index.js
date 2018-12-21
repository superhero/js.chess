class Position
{
  constructor(x, y)
  {
    this.x = x
    this.x = y

    Object.freeze(this)
  }

  toString()
  {
    return `(x:${x}, y:${y})`
  }
}

module.exports = Position
