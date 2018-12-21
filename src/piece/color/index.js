class Color
{
  constructor(color)
  {
    this.color = color

    Object.freeze(this)
  }
}

module.exports = Color
