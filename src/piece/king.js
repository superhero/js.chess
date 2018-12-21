const Piece = require('.')

class King extends Piece
{
  constructor(rules, color)
  {
    super(rules, color)
    this.type = 'King'
  }

  validateMove(moveToPosition)
  {
    this.rules.pieceMustBeOnABoardToMoveIt(this)
    this.rules.positionMustBeOnTheBoard(moveToPosition)

    try
    {
      this.rules.moveOrCaptureDiagonal(this, moveToPosition, false)
    }
    catch(error)
    {
      try
      {
        this.rules.moveOrCaptureHorizontally(this, moveToPosition, false)
      }
      catch(error)
      {
        try
        {
          this.rules.moveOrCaptureVertically(this, moveToPosition, false)
        }
        catch(error)
        {
          this.rules.castle(this, moveToPosition)
        }
      }
    }
  }
}

module.exports = King
