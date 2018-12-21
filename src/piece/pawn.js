const Piece = require('.')

class Pawn extends Piece
{
  constructor(rules, color)
  {
    super(rules, color)
    this.type = 'Pawn'
  }

  validateMove(moveToPosition)
  {
    this.rules.pieceMustBeOnABoardToMoveIt(this)
    this.rules.positionMustBeOnTheBoard(moveToPosition)

    try
    {
      this.rules.moveForward(this, moveToPosition)
    }
    catch(error)
    {
      try
      {
        this.rules.moveFastForward(this, moveToPosition)
      }
      catch(error)
      {
        try
        {
          this.rules.capturesForwardDiagonal(this, moveToPosition)
        }
        catch(error)
        {
          this.rules.passant(this, moveToPosition)
        }
      }
    }
  }
}

module.exports = Pawn
