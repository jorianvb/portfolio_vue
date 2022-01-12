<template>
  <a-timeline mode="alternate" reverse>
    <a-timeline-item 
     v-for="(ex,index) in experience"
     :key = index
    >
      <a-card size="small"
      :title="ex.title">
        <template #extra>
          <span class="informations"><informationIcon/></span>
        </template>
        <p><mapMarkerIcon small/> {{ex.location}} </p>
        <a-card-meta  :description="ex.description">
          <template #avatar>
            <a-avatar :src="ex.image" />
          </template>
        </a-card-meta>
        <br/>
          <a-tag color="blue" v-for="(tech, index) in ex.technos"
          :key=index>
            {{tech}}
          </a-tag>
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
        moreDescription : "Spécialité ingéniérie des systèmes d'informations",
        isMoreDescription : false,
        technos : ["java", "angular"]
      },
      {
        year : "mai 2016 - aout 2016",
        title : "Stage assistant ingénieur",
        summary : "Mise en place d'une solution d'intégration continue sur le poste de développeur",
        description : "Mise en place d'une solution d'intégration continue sur le poste de développeur",
        location : "Thales Avionic - Valence",
        image : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Thales_Logo.svg/langfr-1920px-Thales_Logo.svg.png",
        moreDescription : "Normalisation et développement de tests pour l'intégration continue au poste. \n \
        Le projet avait pour but de déployer des tests directement sur les postes de développeur pour gagner du temps et de la puissance de calcul par rapport aux serveurs.\
        Ma partie a été de normaliser l'ensemble des codes de tests puis de créer automatiquement des exécutables windows pour rendre les tests exécutables depuis les postes de développeur.",
        isMoreDescription : false,
        technos : ["python 2", "windows"]
      },
      {
        year : "février 2017 - aout 2017",
        title : "Projet de fin d'étude",
        summary : "Maintenance évolutive pour le compte de Groupama et création d'un site pour le paiement par carte bancaire",
        description : "Maintenance évolutive pour le compte de Groupama et création d'un site pour le paiement par carte bancaire",
        location : "SQLI - Lyon",
        image : "https://img.search.brave.com/-yzoD7q3Ya7CDxdEY_Ei-XxCRaKok5voi_sN8TpE3CQ/fit/1200/1080/ce/1/aHR0cDovL2plZ3Jv/bi5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTUvMDcvc3Fs/aS1sb2dvLmpwZw",
        moreDescription : "Ecriture de spécification sur un sujet de suivi des actions clients en relation avec la MOA Groupama et GAN. Le projet est arrêté car les MOAs n'arrivaient pas à se mettre d'accord sur le fonctionnement. \
        Maintenance évolutive sur le projet de tarification et de souscription des commerciaux Groupama \
        Création d'un projet de paiement par carte bancaire pour différent compte. Mise en place d'un front récupérant les données client pour le paiement par carte bancaire des échéanciers",
        isMoreDescription : false,
        technos : ["java", "angular"]
      },
      {
        year : "octobre 2017 - octobre 2021",
        title : "Ingénieur conception développement",
        summary : "Développement de plusieurs projets pour le compte de KleeGroup",
        description : "Développement de plusieurs projets pour le compte de KleeGroup",
        location : "Klee Group - Lyon",
        image : "https://www.kleegroup.com/themes/custom/kleegroup_theme/images/logo-klee_group.png",
        moreDescription : "tada",
        isMoreDescription : false,
        technos : ["java", "angular", "groovy", "Atlassian", "Vue"]
      },
      {
        year : "octobre 2021 - aujourd'hui",
        title : "Ingénieur conception développement",
        summary : "Portage de fonctionnalité sur une architechture microservice",
        description : "Prise de connaissance sur l'existant et mise en place de divers correctifs sur l'existant",
        location : "G2S - Ecully",
        image : "https://img.search.brave.com/oDCA81K0FdBmvwMI0_aZTEDLm5FymhX86fGoaRTSVnc/fit/1196/225/ce/1/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC50/YXBjLUFBc09YZkky/T3N0dUhZUjhBQUFB/QSZwaWQ9QXBp",
        moreDescription : "tada",
        isMoreDescription : false,
        technos : ["java", "angular", "javascript"]
      },
      ] 
  }),
  methods :{
    //Need to be use for more description
    extendsDescription(index) {
      let ex = this.experience[index]
      console.log(ex)
      ex.isMoreDescription = !ex.isMoreDescription;
      ex.description = ex.isMoreDescription ? ex.moreDescription : ex.summary
    }
  },
}
</script>

<style scoped>
span.informations{
  margin-left : 10px;
}
</style>
