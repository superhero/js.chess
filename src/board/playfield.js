class Playfield
{
  constructor(size)
  {
    this.grid = new Array(size).fill(new Array(size).fill(null))
    this.moveHistory = []
  }

  isPositionAvailible(position)
  {
    return !this.fetchPieceByPosition(position)
  }

  fetchPieceByPosition({x, y})
  {
    return this.grid[x][y]
  }

  setPieceAtPosition(piece, position)
  {
    piece.position = position
    this.grid[position.x][position.y] = piece
    this.moveHistory.push({ piece, position })
  }

  movePieceToPosition(piece, position)
  {
    piece.validateMove(position)
    delete this.grid[piece.position.x][piece.position.y]
    this.setPieceAtPosition(piece, position)
  }
}

module.exports = Playfield
