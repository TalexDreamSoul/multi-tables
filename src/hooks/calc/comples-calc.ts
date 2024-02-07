export default async function () {
  const options = []

  const n1 = Math.floor(Math.random() * 20) + 1
  const n2 = Math.floor(Math.random() * 10) + 1

  const total = n1 * n2

  options.push(n1)

  while (options.length < 4) {
    const random = Math.floor(Math.random() * 100) + 1
    if (!options.includes(random))
      options.push(random)
  }

  return {
    title: '复杂计算题',
    answer: n1,
    speak: '这道题的答案是多少',
    displayText: `${total} ➗ ${n2}`,
    options: options.sort(() => Math.random() - 0.5),
  }
}
