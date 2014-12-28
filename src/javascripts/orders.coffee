_ = require 'lodash-node'

module.exports =
  A033307: (x, y) ->
    _.flatten([x..y].map((n) -> (n + '').split(''))).join(', ')
