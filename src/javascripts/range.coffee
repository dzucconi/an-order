_ = require 'lodash-node'

module.exports = class Range
  constructor: ({ @n, @interval }) -> #

  y: ->
    @n + @interval - 1

  tap: ->
    [@n, @y()]

  next: ->
    _.tap [@n, @y()], ([x, y]) => @n = y + 1
