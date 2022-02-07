<template>
  <h1>Restons en contact</h1>
  <div class="border">
    <a target="_blank" href="mailto:valerianbaillet@gmail.com">
      <a-tooltip>
        <template #title>
          N'hésite pas à me contacter
        </template> 
        <mail-outlined /> Envoyer un mail
      </a-tooltip>
    </a> 
    <a target="_blank" href="https://www.linkedin.com/in/val%C3%A9rian-baillet-047861108/">
      <a-tooltip>
        <template #title>
          Pour connaitre mon parcours professionnel
        </template> 
        <linkedin-outlined /> Linkedin
      </a-tooltip>
    </a>
    <a target="_blank" href="https://github.com/jorianvb">
      <a-tooltip>
        <template #title>
          Pour suivre mes contributions
        </template> 
        <github-outlined /> Github
      </a-tooltip>
    </a>     
  </div>
</template>

<script>

import { LinkedinOutlined } from '@ant-design/icons-vue';
import { GithubOutlined } from '@ant-design/icons-vue';
import { MailOutlined } from '@ant-design/icons-vue';

export default {
  name: "Contact",
  components: {
    LinkedinOutlined,
    GithubOutlined,
    MailOutlined,
  },
}
</script>

<style scoped>

</style>
