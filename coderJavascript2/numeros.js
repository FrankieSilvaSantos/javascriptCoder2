const peso1 = 1.2
const peso2 = Number('2.0')

console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

avaliacao1 = 9.871
avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total /(peso1 + peso2)

console.log(media.toFixed(2))
