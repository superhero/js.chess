const Piece = require('.')

class Queen extends Piece
{
  constructor(rules, color)
  {
    super(rules, color)
    this.type = 'Queen'
  }

  validateMove()
  {
    this.rules.pieceMustBeOnABoardToMoveIt(this)
    this.rules.positionMustBeOnTheBoard(moveToPosition)

    try
    {
      this.rules.moveOrCaptureDiagonal(piece, moveToPosition, true)
    }
    catch(error)
    {
      try
      {
        this.rules.moveOrCaptureHorizontally(piece, moveToPosition, true)
      }
      catch(error)
      {
        this.rules.moveOrCaptureVertically(piece, moveToPosition, true)
      }
    }
  }
}

module.exports = Queen
