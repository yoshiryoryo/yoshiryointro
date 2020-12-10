<template>

    <v-app>
      <div>
        <v-app-bar  color="blue" dense dark>
         <v-toolbar-title>MY PORTFORIO</v-toolbar-title>
         <v-spacer></v-spacer>
      <v-btn
      class="mx-2"
      fab
      small
      color="#1A237E"
      to="/about"
    >
      <v-icon dark>
        mdi-account
      </v-icon>
    </v-btn>

    <v-btn
      class="mx-2"
      fab
      dark
      small
      color="#1A237E"
      to="skill"
    >
      <v-icon dark>
        mdi-xml
      </v-icon>
    </v-btn>

    <v-btn
      class="mx-2"
      fab
      dark
      small
      color="#1A237E"
      to="work"
    >
      <v-icon dark>
        mdi-laptop-chromebook
      </v-icon>
    </v-btn>
        </v-app-bar>
      </div>

        <router-view />
        
     <v-footer
    dark
    padless
    >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="blue">
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>MY PORTFOLIO</strong>
      </v-card-text>
    </v-card>
  </v-footer>
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

