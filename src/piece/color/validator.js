const InvalidColor = require('./error/invalid')

class ColorValidator
{
  validate(color)
  {
    if(color !== 'WHITE' && color !== 'BLACK')
      throw new InvalidColor(`expected "WHITE" or "BLACK", received "${color}"`)
  }
}

module.exports = ColorValidator
