class Game
{
  constructor(board)
  {
    this.board = board
  }

  newGame()
  {
    this.clearBoard()
    this.setupBoard()
  }

  clearBoard()
  {
    this.board.pieces = []
  }

  setupBoard()
  {
    // WHITE
    this.board.addPiece('WHITE', 'ROOK',    0, 0)
    this.board.addPiece('WHITE', 'KNIGHT',  1, 0)
    this.board.addPiece('WHITE', 'BISHOP',  2, 0)
    this.board.addPiece('WHITE', 'QUEEN',   3, 0)
    this.board.addPiece('WHITE', 'KING',    4, 0)
    this.board.addPiece('WHITE', 'BISHOP',  5, 0)
    this.board.addPiece('WHITE', 'KNIGHT',  6, 0)
    this.board.addPiece('WHITE', 'ROOK',    7, 0)

    // BLACK
    this.board.addPiece('BLACK', 'ROOK',    0, 7)
    this.board.addPiece('BLACK', 'KNIGHT',  1, 7)
    this.board.addPiece('BLACK', 'BISHOP',  2, 7)
    this.board.addPiece('BLACK', 'QUEEN',   3, 7)
    this.board.addPiece('BLACK', 'KING',    4, 7)
    this.board.addPiece('BLACK', 'BISHOP',  5, 7)
    this.board.addPiece('BLACK', 'KNIGHT',  6, 7)
    this.board.addPiece('BLACK', 'ROOK',    7, 7)

    // PAWNS
    for(let i = 0; i < 8; i++)
    {
      this.board.addPiece('WHITE', 'PAWN', i, 1)
      this.board.addPiece('BLACK', 'PAWN', i, 6)
    }
  }
}

module.exports = Game
