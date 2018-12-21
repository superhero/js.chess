const
AbstractMethodError = require('./error/abstract-method'),
NoPositionError     = require('./error/no-position')

/**
 * @abstract
 */
class Piece
{
  constructor(rules, color)
  {
    this.rules            = rules
    this.color            = color
    this.positionHistory  = []
    this.type             = 'piece'
  }

  /**
   * @param {Position} position
   */
  set position(position)
  {
    this.positionHistory.push(position)
    return position
  }

  get position()
  {
    if(!this.positionHistory.length)
      throw new NoPositionError(`${this} has no position`)

    return this.positionHistory[0]
  }

  setReference(id, board)
  {
    this.id     = id
    this.board  = board
  }

  toString()
  {
    return `${super} ${this.type}`
  }

  /**
   * @abstract
   * @param {Position} moveToPosition
   */
  validateMove(moveToPosition)
  {
    const msg = `Abstract "validateMove" method is not implemented for ${this}`
    throw new AbstractMethodError(msg)
  }
}

module.exports = Piece
