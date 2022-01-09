<template>
  <a-timeline mode="alternate" reverse>
    <a-timeline-item 
     v-for="(ex,index) in experience"
     :key = index
    >
      <a-card>
        <template #extra>
          <span @click="extendsDescription(index)"><informationIcon/></span>
        </template>
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
import InformationIcon from 'vue-material-design-icons/Information.vue';

export default {
  name: "Experience", 
  components : {
    MapMarkerIcon,
    InformationIcon
  },
  data : () => ({
    experience : [
      {
        year : "2014 - 2017",
        title : "Diplôme ingénieur",
        summary : "Spécialité ingéniérie des systèmes d'informations",
        description : "Spécialité ingéniérie des systèmes d'informations",
        location : "ENSIMAG - Grenoble",
        image : "https://upload.wikimedia.org/wikipedia/commons/1/1a/Logo_ENSIMAG_2008.svg",
        moreDescription : "tada",
        isMoreDescription : false,
      },
      {
        year : "mai 2016 - aout 2016",
        title : "Stage assistant ingénieur",
        summary : "Mise en place d'une solution d'intégration continue sur le poste de développeur",
        description : "Mise en place d'une solution d'intégration continue sur le poste de développeur",
        location : "Thales Avionic - Valence",
        image : "https://upload.wikimedia.org/wikipedia/commons/1/1a/Logo_ENSIMAG_2008.svg",
        moreDescription : "tada",
        isMoreDescription : false,
      },
      {
        year : "février 2017 - aout 2017",
        title : "Projet de fin d'étude",
        summary : "Maintenance évolutive pour le compte de Groupama",
        description : "Maintenance évolutive pour le compte de Groupama",
        location : "SQLI - Lyon",
        image : "https://upload.wikimedia.org/wikipedia/commons/1/1a/Logo_ENSIMAG_2008.svg",
        moreDescription : "tada",
        isMoreDescription : false,
      },
      {
        year : "octobre 2017 - octobre 2021",
        title : "Ingénieur conception développement",
        summary : "Développement de plusieurs projets pour le compte de KleeGroup",
        description : "Développement de plusieurs projets pour le compte de KleeGroup",
        location : "Klee Group - Lyon",
        image : "https://upload.wikimedia.org/wikipedia/commons/1/1a/Logo_ENSIMAG_2008.svg",
        moreDescription : "tada",
        isMoreDescription : false,
      },
      ] 
  }),
  methods :{
    extendsDescription(index) {
      let ex = this.experience[index]
      console.log(ex)
      ex.isMoreDescription = !ex.isMoreDescription;
      ex.description = ex.isMoreDescription ? ex.moreDescription : ex.summary
      console.log(ex.isMoreDescription)
    }
  },
}
</script>

<style scoped>
</style>
