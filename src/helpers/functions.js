const weight = (arr) => {
  return [].concat(...arr.map((obj) => Array(Math.ceil(obj.weight * 100)).fill(obj)))
}

const pick = (demographics) => {
  let weighted = weight(demographics)
  return weighted[Math.floor(Math.random() * weighted.length)]
}

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max)
}

export {pick, getRandomInt}