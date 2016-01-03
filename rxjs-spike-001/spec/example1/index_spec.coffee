

describe 'index', ->
  sut = undefined

  beforeEach ->
    sut = require('../../../example1/index.coffee')

  it 'do it', ->
    sut.doIt()
