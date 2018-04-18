'use strict'

const assert = require('assert')
const isNumber = require('.')

describe('isNumber()', function () {
  it('should return true if value is a number', function () {
    assert(isNumber(123))
    assert(isNumber(0))
    assert(isNumber(-0))
    assert(isNumber(-123))
  })

  it('should return false if value is a numeric string', function () {
    assert(!isNumber('123'))
  })

  it('should return true if value is Infinity', function () {
    assert(isNumber(Infinity))
    assert(isNumber(-Infinity))
  })

  it('should return false if value is NaN', function () {
    assert(!isNumber(NaN))
  })

  it('should return false if value is a Number object', function () {
    assert(!isNumber(new Number(123))) // eslint-disable-line no-new-wrappers
  })

  it('should return false if value is non-numeric', function () {
    assert(!isNumber({}))
  })
})
