const
InvalidPieceType  = require('./error/invalid-type'),
King              = require('./king'),
Queen             = require('./queen'),
Rook              = require('./rook'),
Bishop            = require('./bishop'),
Knight            = require('./knight'),
Pawn              = require('./pawn')

class PieceFactory
{
  constructor(colorFactory, rules)
  {
    this.colorFactory = colorFactory
    this.rules        = rules
  }

  create(type, color)
  {
    color = this.colorFactory.create(color)

    switch(type)
    {
      case 'KING'   : return new King   (this.rules, color)
      case 'QUEEN'  : return new Queen  (this.rules, color)
      case 'ROOK'   : return new Rook   (this.rules, color)
      case 'BISHOP' : return new Bishop (this.rules, color)
      case 'KNIGHT' : return new Knight (this.rules, color)
      case 'PAWN'   : return new Pawn   (this.rules, color)
    }

    throw new InvalidPieceType
  }
}

module.exports = PieceFactory
