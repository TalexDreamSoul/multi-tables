export default async function () {
  const options = []

  const n1 = Math.floor(Math.random() * 3) + 1
  const n2 = Math.floor(Math.random() * 9) + 1

  const answer = genFormula(n1, n2)

  options.push(answer)

  while (options.length < 4) {
    const random = genFormula(Math.floor(Math.random() * 3) + 1, Math.floor(Math.random() * 9) + 1, false)
    if (!options.includes(random))
      options.push(random)
  }

  return {
    title: '乘法口诀题',
    answer,
    options: options.sort(() => Math.random() - 0.5),
    speak: '下列哪一个是正确的乘法口诀',
    displayText: '正确的是哪一个',
  }
}

function genFormula(_num1: number, _num2: number, state = true) {
  const num1 = Math.min(_num1, _num2)
  const num2 = Math.max(_num1, _num2)

  const e = [
    '一', '二', '三', '四', '五', '六', '七', '八', '九', '十',
    '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '二十',
    '二十一', '二十二', '二十三', '二十四', '二十五', '二十六', '二十七', '二十八', '二十九', '三十',
    '三十一', '三十二', '三十三', '三十四', '三十五', '三十六', '三十七', '三十八', '三十九', '四十',
    '四十一', '四十二', '四十三', '四十四', '四十五', '四十六', '四十七', '四十八', '四十九', '五十',
    '五十一', '五十二', '五十三', '五十四', '五十五', '五十六', '五十七', '五十八', '五十九', '六十',
    '六十一', '六十二', '六十三', '六十四', '六十五', '六十六', '六十七', '六十八', '六十九', '七十',
    '七十一', '七十二', '七十三', '七十四', '七十五', '七十六', '七十七', '七十八', '七十九', '八十',
    '八十一', '八十二', '八十三', '八十四', '八十五', '八十六', '八十七', '八十八', '八十九', '九十', '九十一',
  ]

  return `${e[num1 - 1]}${e[num2 - 1]}得${e[state ? (num1 * num2) - 1 : Math.floor(Math.random() * 81) + 1]}`
}
