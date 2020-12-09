
<template>
    <v-app>   
            <Main />
            <div class="text-center pb-6 px-1">
                <v-btn
                    x-large
                    color="#2196F3"
                    rounded
                    to="/About"
                    class="mx-4 my-2">
                    about me
                </v-btn>
                <v-btn
                    x-large
                    color="#2196F3"
                    rounded
                    to="/Skill"
                    class="mx-4 my-2">
                     skill
                </v-btn>
                <v-btn
                    x-large
                    color="#2196F3"
                    rounded
                    to="/Work"
                    class="mx-4 my-2">
                     works
                </v-btn>
            </div>
    </v-app>
</template>

<script>
import Main from "../components/Main";

export default {
  components: {
    Main,
  },
};
</script>



