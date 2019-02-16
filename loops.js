function forLoop(array) {
  for(var i = 1; i < 25; i++) {
    array = [...array, `I am ${i} strange loop.`]
  }
  return array
}
