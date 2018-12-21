class AbstractMethodError extends TypeError
{
  constructor(...args)
  {
    super(...args)
    this.code = 'ERR_ABSTRACT_METHOD'
  }
}

module.exports = AbstractMethodError
