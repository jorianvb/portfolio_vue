<template>
  <a-timeline mode="alternate" reverse>
    <a-timeline-item 
     v-for="(ex,index) in experience"
     :key = index
    >
      <a-card>
        <p><mapMarkerIcon small/> {{ex.location}} </p>
        <a-card-meta :title="ex.title" :description="ex.description">
          <template #avatar>
            <a-avatar :src="ex.image" />
          </template>
        </a-card-meta>
      </a-card>
    </a-timeline-item>
  </a-timeline>
</template>

<script>

import MapMarkerIcon from 'vue-material-design-icons/MapMarker.vue'; 

export default {
  name: "Experience", 
  components : {
    MapMarkerIcon,
  },
  data : () => ({
    experience : [
      {
        year : "2014 - 2017",
        title : "Diplôme ingénieur",
        description : "Obtention d'un diplôme d'ingénieur en informatique et mathématique appliquées \n spécialité ingéniérie des systèmes d'informations",
        location : "Grenoble",
        image : "https://upload.wikimedia.org/wikipedia/commons/1/1a/Logo_ENSIMAG_2008.svg",
      },
      {
        year : "mai 2016 - aout 2016",
        title : "Stage assistant ingénieur",
        description : "Stage assistant ingénieur à Thalès avionics",
        location : "Valence",
        image : "https://upload.wikimedia.org/wikipedia/commons/1/1a/Logo_ENSIMAG_2008.svg",
      },
      {
        year : "février 2017 - aout 2017",
        title : "Projet de fin d'étude",
        description : "Projet de fin d'étude à SQLI",
        location : "Lyon",
        image : "https://upload.wikimedia.org/wikipedia/commons/1/1a/Logo_ENSIMAG_2008.svg",
      },
      {
        year : "octobre 2017 - octobre 2021",
        title : "Ingénieur conception développement",
        description : "Développement de plusieurs projets pour le compte de KleeGroup",
        location : "Lyon",
        image : "https://upload.wikimedia.org/wikipedia/commons/1/1a/Logo_ENSIMAG_2008.svg",
      },] 
  }),
}
</script>

<style scoped>
</style>
