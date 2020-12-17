<template>

    <v-app :style="{ background: $vuetify.theme.themes.light.background, color: $vuetify.theme.themes.light.color }" 
    >
      
      <div>
        <v-app-bar color="#7A5930">
         <v-toolbar-title class="pt-4"><strong><p>MY PORTFORIO</p></strong></v-toolbar-title>
         <v-spacer></v-spacer>
      <v-btn
      class="mx-2"
      fab
      small
      color="#fff7f7"
      to="/about"
    >
      <v-icon>
        mdi-account
      </v-icon>
    </v-btn>

    <v-btn
      class="mx-2"
      fab
      small
      color="#fff7f7"
      to="skill"
    >
      <v-icon>
        mdi-xml
      </v-icon>
    </v-btn>

    <v-btn
      class="mx-2"
      fab
      small
      color="#fff7f7"
      to="work"
    >
      <v-icon>
        mdi-laptop-chromebook
      </v-icon>
    </v-btn>
        </v-app-bar>
      </div>

        <router-view />

      <div>
        <v-app-bar color="#7A5930">
        
           <v-spacer></v-spacer>
      <v-icon class="mx-2">
        mdi-email-multiple
      </v-icon>
        <div class="mail">19920629ryo@gmail.com</div>
      </v-app-bar>
      </div>
    </v-app>
    
</template>

<script>

export default {
  data: () => ({
    links: [
      /* icon & link data */
      
    ]
  })
}
</script>

<style> 
 p {
   color: #FFFFFF;
 }

 .mail {
   color: #FFFFFF;
 }
  
</style>


