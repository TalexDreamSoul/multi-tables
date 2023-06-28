export default async function () {
  const options = []

  const n1 = Math.floor(Math.random() * 40) + 1
  const n2 = Math.floor(Math.random() * 20) + 1
  const n3 = Math.floor(Math.random() * 10) + 1

  const symbol1 = Math.random() > 0.5 ? 1 : -1
  const symbol2 = Math.random() > 0.5 ? 1 : -1

  const answer = n1 + symbol1 * n2 + symbol2 * n3

  options.push(answer)

  while (options.length < 4) {
    const random = Math.floor(Math.random() * 300) + 1
    if (!options.includes(random))
      options.push(random)
  }

  return {
    title: '计算题',
    answer,
    speak: '这道题的答案是多少',
    displayText: `${n1} ${symbol1 === 1 ? '+' : '-'} ${n2} ${symbol2 === 1 ? '+' : '-'} ${n3}`,
    options: options.sort(() => Math.random() - 0.5),
  }
}
