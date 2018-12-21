const PositionNotAvailible = require('./error/position-not-availible')

class Board
{
  constructor(playfield, pieceFactory, positionFactory)
  {
    this.pieceFactory     = pieceFactory
    this.positionFactory  = positionFactory
    this.playfield        = playfield
    this.pieces           = []
  }

  addPiece(color, type, x, y)
  {
    const position = this.positionFactory.create(x, y)

    if(!this.playfield.isPositionAvailible(position))
      throw new PositionNotAvailible

    const
    piece = this.pieceFactory.create(type, color),
    id    = this.pieces.push(piece),
    board = this

    piece.setReference(id, board)
    this.playfield.setPieceAtPosition(piece, position)

    return piece
  }
}

module.exports = Board
