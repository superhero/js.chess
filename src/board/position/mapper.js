class PositionMapper
{
  constructor()
  {
    this.x = Object.freeze(
    {
      0:'1',
      1:'2',
      2:'3',
      3:'4',
      4:'5',
      5:'6',
      6:'7',
      7:'8'
    })

    this.y = Object.freeze(
    {
      0:'A',
      1:'B',
      2:'C',
      3:'D',
      4:'E',
      5:'F',
      6:'G',
      7:'H'
    })

    Object.freeze(this)
  }
}

module.exports = PositionMapper
