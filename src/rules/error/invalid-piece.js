class InvalidPieceError extends Error
{
  constructor(...args)
  {
    super(...args)
    this.code = 'ERR_INVALID_PIECE'
  }
}

module.exports = InvalidPieceError
