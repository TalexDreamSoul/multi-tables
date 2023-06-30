<script setup>
import { wrongs } from './../hooks/index'

// 将 wrongs 的每一项 ts 倒叙
const _w = computed(() => [...wrongs].reverse())
</script>

<template>
  <p>我的错题</p>
  <br>
  <div class="Wrongs-Container">
    <div v-for="wrong in wrongs" :key="wrong.id" class="Wrong-Item">
      <p class="WrongTitle">
        {{ wrong.title }}
      </p>
      <span>题目描述: {{ wrong.text }}</span>
      <!-- <span>正确答案: {{ wrong.ans }}</span> -->
      <!-- <span style="color: #FB3D22F0">你的答案: {{ wrong.choose }}</span> -->
      <div class="divider" />

      <div v-for="item in wrong.options" :key="item" :class="{ correct: item === wrong.ans, wrong: item === wrong.choose }" class="Wrong-Option">
        {{ item }}
      </div>
      <div class="time">
        {{ new Date(wrong.ts) }}
      </div>
    </div>
  </div>
</template>

<style>
.Wrong-Option.correct {
  background-color: #00FF0050;
}

.Wrong-Option.wrong {
  background-color: #FF000050;
}

.time {
  text-align: right;
  font-size: .8rem;
  font-weight: 300;
  color: #eeeeee80;
}

.Wrong-Option {
  display: inline-block;
  margin: .5rem;

  width: 40%;
  height: 2rem;
  line-height: 2rem;

  text-align: center;
  border-radius: 4px;
  background-color:  #02020280;
}

.WrongTitle {
  text-align: left;
}

.Wrong-Item span {
  display: block;
  margin: .5rem;

  text-align: left;
}

.Wrong-Item {
  padding: .5rem;
  width: 100%;
  max-width: 400px;

  font-size: 1rem;
  font-weight: 300;

  border-radius: 8px;
  border: 1px solid #323232;
}

.Wrongs-Container {
  display: flex;

  flex-direction: column;
  gap: 2rem;

  align-items: center;
}
</style>
