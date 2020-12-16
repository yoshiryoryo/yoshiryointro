<template>

    <v-app :style="{ background: $vuetify.theme.themes.light.background, color: $vuetify.theme.themes.light.color }" 
    >
      
      <div>
        <v-app-bar color="#1A237E">
         <v-toolbar-title class="pt-4"><p>MY PORTFORIO</p></v-toolbar-title>
         <v-spacer></v-spacer>
      <v-btn
      class="mx-2"
      fab
      small
      color="#7cfc00"
      to="/about"
    >
      <v-icon dark>
        mdi-account
      </v-icon>
    </v-btn>

    <v-btn
      class="mx-2"
      fab
      small
      color="#7cfc00"
      to="skill"
    >
      <v-icon dark>
        mdi-xml
      </v-icon>
    </v-btn>

    <v-btn
      class="mx-2"
      fab
      small
      color="#7cfc00"
      to="work"
    >
      <v-icon dark>
        mdi-laptop-chromebook
      </v-icon>
    </v-btn>
        </v-app-bar>
      </div>

        <router-view />

      <div>
        <v-app-bar color="#1A237E">
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
   color: #7cfc00;
 }
  
</style>


