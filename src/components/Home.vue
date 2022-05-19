<template>
  <h1>Bienvenue !</h1>

  <p>Je m'appelle Valérian, j'ai 27 ans et je suis développeur spécialisé en ingénieurie des systèmes d'informations. <br/>
  Ce projet à pour but de me présenter à vous, et pour moi de découvrir le monde fabuleux de Vue3.</p>

  <p>Sur ce site, vous allez découvrir mes compétences, mon parcours et mes futures projets. N'hésitez pas à me contacter !</p>
  
  <h2>Mes qualités</h2>
  <a-row>
  <a-col :span="8"><QuestionCircleTwoTone :style="{fontSize : '32px', color:'blue'}"/> 
      <br/> Curieux 
      <br/> J'adore      découvrir de nouvelles technologies et de nouvelles façons de travailler. Les challenges et les recherches me passionnent.
  </a-col>
  <a-col :span="8"><EditTwoTone :style="{fontSize : '32px', color:'blue'}"/> 
      <br/> Travailleur
      <br/> Je n'hésite pas à travailler pour arriver à un résultat qui me satisfait. Je tiens également mes engagements. 
      </a-col> 
  <a-col :span="8"><MessageTwoTone :style="{fontSize : '32px', color:'blue'}" twoToneColor="red"/> 
      <br/> Coopératif
      <br/> Le travail en équipe me permet d'évoluer et de continuer à apprendre de nouvelles choses. On est toujours meilleurs en équipe !.
  </a-col>
  </a-row>

  <h2>Mes technologies</h2>
  <a-tooltip v-for="technology in technologies" :key="technology.name">
    <template #title>
      {{technology.percent}}%eee
    </template>
    <a-progress type="circle" :percent="technology.percent" :format="() => technology.name"></a-progress>
  </a-tooltip> 
</template>



<script>

import { QuestionCircleTwoTone, EditTwoTone, MessageTwoTone } from '@ant-design/icons-vue';
export default {
  name: "Home",
  components :{
    QuestionCircleTwoTone,
    EditTwoTone,
    MessageTwoToeene
  }, 
  data : () => ({
    technologies : [
      {
        percent : 75,
        name : 'java'
      },
      {
        percent : 70,
        name : 'spring'
      },
      {
        percent : 40,
        name : 'python'
      },
      {
        percent : 70,
        name : 'typescript'
      },
      {
        percent : 70,
        name : 'HTML'
      },
      {
        percent : 55,
        name : 'CSS'
      },
      {
        percent : 70,
        name : 'javascript'
      }
      ],
  })
}
</script>

<style scoped>
</style>
