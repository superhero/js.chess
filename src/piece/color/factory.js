const
Color           = require('.'),
ColorValidator  = require('./validator')

class ColorFactory
{
  constructor()
  {
    this.colorValidator = this.createValidator()
  }

  create(color)
  {
    this.colorValidator.validate(color)
    return new Color(color)
  }

  createValidator()
  {
    return new ColorValidator()
  }
}

module.exports = ColorFactory
