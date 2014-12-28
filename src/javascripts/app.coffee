$ = require 'jquery'
Range = require './range'
Orders = require './orders'

$ ->
  ($stage = $('body'))
    .append(Orders.A033307((range = new Range(n: 1, interval: 1024)).next()...))

  $(window).on 'scroll', ->
    if ((h = $(document).height()) - ($(window).height() + $(window).scrollTop())) / h < 0.1
      $stage
        .append(', ')
        .append(Orders.A033307(range.next()...))
