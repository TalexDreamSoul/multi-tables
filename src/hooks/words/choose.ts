import { words } from './words'

export default async function () {
  const _ws = [...words].sort(() => Math.random() - 0.5).slice(0, 4)

  const _w: any = _ws[0]

  let answer, options, displayText, speak: string | string[]

  if (_w.t) {
    // 完整选出

    const _a = [..._w.a].sort(() => Math.random() - 0.5).slice(0, 3)

    options = [_w.w, ..._a]

    answer = _w.w
    displayText = _w.o

    speak = `${_w.o} 是什么`
  }
  else {
    // 中文选英文

    const word = _w.w

    const _a = [..._ws].slice(1, 4).map(_ => _.w)

    options = [word, ..._a]

    answer = word
    displayText = _w.o

    speak = `${_w.o} 的英文是`
  }

  return {
    title: '词意题',
    answer,
    displayText,
    options: options!.sort(() => Math.random() - 0.5),
    speak,
  }
}
