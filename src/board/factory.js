const
Board     = require('.'),
Playfield = require('./playfield')

class BoardFactory
{
  constructor(pieceFactory, positionFactory)
  {
    this.pieceFactory     = pieceFactory
    this.positionFactory  = positionFactory
  }

  create()
  {
    const playfield = this.createPlayfield(8)
    return new Board(playfield, pieceFactory, positionFactory)
  }

  createPlayfield(size)
  {
    return new Playfield(size)
  }
}

module.exports = BoardFactory
