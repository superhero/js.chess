const Piece = require('.')

class Rook extends Piece
{
  constructor(rules, color)
  {
    super(rules, color)
    this.type = 'Rook'
  }

  validateMove()
  {
    this.rules.pieceMustBeOnABoardToMoveIt(this)
    this.rules.positionMustBeOnTheBoard(moveToPosition)

    try
    {
      this.rules.moveOrCaptureHorizontally(this, moveToPosition, true)
    }
    catch(error)
    {
      this.rules.moveOrCaptureVertically(this, moveToPosition, true)
    }
  }
}

module.exports = Rook
