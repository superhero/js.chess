const Piece = require('.')

class Bishop extends Piece
{
  constructor(rules, color)
  {
    super(rules, color)
    this.type = 'Bishop'
  }

  validateMove(moveToPosition)
  {
    this.rules.pieceMustBeOnABoardToMoveIt(this)
    this.rules.positionMustBeOnTheBoard(moveToPosition)
    this.rules.moveOrCaptureDiagonal(this, moveToPosition, true)
  }
}

module.exports = Bishop
