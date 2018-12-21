const
InvalidMove     = require('./error/invalid-move'),
InvalidPiece    = require('./error/invalid-piece'),
InvalidPosition = require('./error/invalid-psoition')

/*
  TODO seperate the rules into "move" rules and "capture" rules
  will use in piece as "validateMove" and "validateCapture"
  will use in playfield as "movePieceToPosition" and "capturePieceAtPosition"
  ...in "capturePieceAtPosition" we change state of captured piece to "captured"
  ...in "movePieceToPosition" we do not change any state
 */
class Rules
{
  pieceMustBeOnABoardToMoveIt(piece)
  {
    if(!piece.board)
      throw new InvalidPiece(`piece does not have a reference to a board`)

    if(!piece.position)
      throw new InvalidPiece(`piece does not have a position`)
  }

  positionMustBeOnTheBoard(position)
  {
    const
    { x, y }  = position,
    MIN       = 0,
    MAX       = 7

    if(x < MIN)
      throw new InvalidPosition(`x:"${x}" must not be less then "${MIN}"`)

    if(x > MAX)
      throw new InvalidPosition(`x:"${x}" must not be more then "${MAX}"`)

    if(y < MIN)
      throw new InvalidPosition(`y:"${y}" must not be less then "${MIN}"`)

    if(y > MAX)
      throw new InvalidPosition(`y:"${y}" must not be more then "${MAX}"`)
  }

  /**
   * @param {Piece} piece
   * @param {Position} destination
   * @param {boolen} infinity if true, then there is no restriction on how far
   * the piece can move
   */
  moveOrCaptureDiagonal(piece, destination, infinity)
  {
    if(destination.x - piece.position.x !== destination.y - piece.position.y)
      throw new InvalidMove(`move is not digonal: ${piece.position} -> ${destination}`)

    if(!infinity && Math.abs(destination.x - piece.position.x) > 1)
      throw new InvalidMove(`move is not only one square: ${piece.position} -> ${destination}`)
  }

  moveOrCaptureHorizontally(piece, destination, infinity)
  {
    if(destination.y - piece.position.y !== 0)
      throw new InvalidMove(`move is not horizontal: ${piece.position} -> ${destination}`)

    const diff = Math.abs(destination.x - piece.position.x)

    if(diff === 0)
      throw new InvalidMove(`not moving: ${piece.position} -> ${destination}`)

    if(!infinity && diff === 1)
      throw new InvalidMove(`moving more then 1 square: ${piece.position} -> ${destination}`)
  }

  moveOrCaptureVertically(piece, destination, infinity)
  {
    if(destination.x - piece.position.x !== 0)
      throw new InvalidMove(`move is not vertical: ${piece.position} -> ${destination}`)

    const diff = Math.abs(destination.y - piece.position.y)

    if(diff === 0)
      throw new InvalidMove(`not moving: ${piece.position} -> ${destination}`)

    if(!infinity && diff === 1)
      throw new InvalidMove(`moving more then 1 square: ${piece.position} -> ${destination}`)
  }

  moveOrCaptureInTheShapeOfASeven(piece, destination)
  {
    const
    horizontal  = Math.abs(destination.x - piece.position.x),
    vertical    = Math.abs(destination.y - piece.position.y)

    if((horizontal === 3 && vertical === 1)
    || (horizontal === 1 && vertical === 3))
    {
      return
    }

    throw new InvalidMove(`move is not in the shape of a seven: ${piece.position} -> ${destination}`)
  }

  moveForward(piece, destination)
  {
    if(piece.color.color === 'WHITE')
    {
      if(destination.y - piece.position.y !== 1)
        throw new InvalidMove(`not moving piece: ${piece} one square forward: ${piece.position} -> ${destination}`)
    }
    else
    {
      if(destination.y - piece.position.y !== -1)
        throw new InvalidMove(`not moving piece: ${piece} one square forward: ${piece.position} -> ${destination}`)
    }
  }

  moveFastForward(piece, destination)
  {
    if(piece.color.color === 'WHITE')
    {
      if(piece.position.y !== 1)
        throw new InvalidMove(`not moving piece: ${piece} for the first time: ${piece.position}`)

      if(destination.y - piece.position.y !== 2)
        throw new InvalidMove(`not moving piece: ${piece} two squares forward: ${piece.position} -> ${destination}`)
    }
    else
    {
      if(piece.position.y !== 6)
        throw new InvalidMove(`not moving piece: ${piece} for the first time: ${piece.position}`)

      if(destination.y - piece.position.y !== -2)
        throw new InvalidMove(`not moving piece: ${piece} two squares forward: ${piece.position} -> ${destination}`)
    }
  }

  capturesForwardDiagonal(piece, destination)
  {
    if(piece.color.color === 'WHITE')
    {
      if(destination.y - piece.position.y !== 1)
        throw new InvalidMove(`not moving piece: ${piece} one square forward: ${piece.position} -> ${destination}`)
    }
    else
    {
      if(destination.y - piece.position.y !== -1)
        throw new InvalidMove(`not moving piece: ${piece} one square forward: ${piece.position} -> ${destination}`)
    }

    if(destination.x - piece.position.x !==  1
    && destination.x - piece.position.x !== -1)
      throw new InvalidMove(`not moving piece: ${piece} one square digonal: ${piece.position} -> ${destination}`)

    const enemy = piece.board.playfield.fetchPieceByPosition(destination)

    if(!enemy)
      throw new InvalidMove(`can't capture: no piece on destination ${piece.position}`)

    if(piece.color === enemy.color)
      throw new InvalidMove(`can't capture: both pieces are in the same team: ${piece} and ${enemy}`)
  }

  passant(piece, destination)
  {
    // The piece must be a pawn
    // The piece must have been passed by a fast pawn the former move
    // The piece can only capture the fast pawn that passed the piece
    // The passed pawn must be on the same y cordinate
  }

  promote(piece, destination, promotion)
  {
    if(piece.type !== 'Pawn')
      throw new InvalidMove(`can't promote: piece must be a "Pawn", "${piece.type}" provided`)

    switch(promotion)
    {
      case 'Queen'  :
      case 'Rook'   :
      case 'Knight' :
      case 'Bishop' : piece.type = promotion
      default: throw new InvalidMove(`can't promote: unrecognized promotion type: "${promotion}"`)
    }
  }

  castle(piece, destination)
  {
    if(piece.type !== 'King')
      throw new InvalidMove(`can't castle: piece must be a "King", "${piece.type}" provided`)

    if(piece.positionHistory.length !== 1)
      throw new InvalidMove(`can't castle: the "King" must not have moved to be allowed to castle`)

    // The rook must not have moved
    // No pieces in between can be occopied
    // The King must not be in chess
    // The king can not jump over chess state
    // The king can not castle into a chess state
  }
}

module.exports = Rules
