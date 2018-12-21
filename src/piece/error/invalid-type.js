class InvalidPieceTypeError extends TypeError
{
  constructor(...args)
  {
    super(...args)
    this.code = 'ERR_INVALID_PIECE_TYPE'
  }
}

module.exports = InvalidPieceTypeError
