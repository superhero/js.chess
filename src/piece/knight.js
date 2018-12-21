const Piece = require('.')

class Knight extends Piece
{
  constructor(rules, color)
  {
    super(rules, color)
    this.type = 'Knight'
  }

  validateMove(moveToPosition)
  {
    this.rules.pieceMustBeOnABoardToMoveIt(this)
    this.rules.positionMustBeOnTheBoard(moveToPosition)
    this.rules.moveOrCaptureInTheShapeOfASeven(this, moveToPosition)
  }
}

module.exports = Knight
