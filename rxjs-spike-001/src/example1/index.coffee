
module.exports = {
  doIt: ->
    logValue = (value) -> console.log "Value: #{value}"
    src = Rx.Observable.range(1, 5)
    upper = src.map (name) ->
      return name * 2
    upper.subscribe logValue
}