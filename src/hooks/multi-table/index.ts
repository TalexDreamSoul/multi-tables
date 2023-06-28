export default async function () {
  const options = []
  const n1 = Math.floor(Math.random() * 2) + 1
  const n2 = Math.floor(Math.random() * 9) + 1

  const answer = n1 * n2
  options.push(answer)

  while (options.length < 4) {
    const random = Math.floor(Math.random() * 10) + 1
    if (!options.includes(random))
      options.push(random)
  }

  return {
    title: '乘法表',
    answer,
    displayText: `${n2} x ${n1}`,
    options: options.sort(() => Math.random() - 0.5),
    speak: `${n2} 乘以 ${n1} 得多少`,
  }
}
