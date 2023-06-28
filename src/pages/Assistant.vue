<script setup>
const items = [
  {
    title: '综合练习 · 简单',
    desc: '整体随机出题，包含 字母（单词，名字）、数学、口诀（九九乘法表） 等，共计 100 题!',
    route: '/challenge/normal',
  },
  {
    title: '综合练习 · 中等',
    desc: '整体随机出题，包含 字母、数学、口诀（九九乘法表） 等，共计 100 题，需在 15 分钟内完成!',
    route: '/challenge/medium',
  },
  {
    title: '综合练习 · 困难',
    desc: '随机出题，包含 字母、数学、口诀 等，共计 100 题，需在 10 分钟内完成，并且通过率在 85% 以上!',
    route: '/challenge/hard',
  },
]
</script>

<template>
  <div class="Assistant-Container">
    <p>练习助手</p>

    <div class="Assistant-Areas">
      <div v-for="item in items" :key="item.route" class="Assistant-Item" @click="() => $router.push(item.route)">
        <div class="Assistant-Title">
          {{ item.title }}
        </div>
        <div class="Assistant-Desc">
          {{ item.desc }}
        </div>
      </div>
    </div>

    <div class="Wrong-Button" @click="() => $router.push('/Wrongs')">
      我的错题
    </div>
  </div>
</template>

<style>
.Wrong-Button:hover {
  cursor: pointer;
  opacity: .75;
  background-color: #6A9FB550;
  filter: drop-shadow(0 0 1rem #6A9FB580);
}

.Wrong-Button {
  display: inline-block;
  margin-top: 2rem;

  width: 8rem;
  height: 3rem;
  line-height: 2.6rem;

  font-size: 1.5rem;
  font-weight: 300;

  border-radius: 8px;
  transition: all .25s;
  border: 1px solid #323232;
}

.Assistant-Desc {
  position: relative;

  left: 1rem;

  width: calc(100% - 2rem);
  height: 6rem;

  /* background-color: red; */
}

.Assistant-Title {
  margin: 1rem;

  text-align: left;

  font: 1em sans-serif;
  font-weight: bold;
}

.Assistant-Item {
  position: relative;

  width: 20rem;
  height: 9rem;

  margin: 1rem;

  font-size: 1rem;
  font-weight: 300;

  border-radius: .5rem;
  border: 1px solid #323232;
  background-color: #32323230;

  cursor: pointer;
}

.Assistant-Item:hover {
  opacity: .75;
}

.Assistant-Areas {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>
