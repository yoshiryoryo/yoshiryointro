
<template>
    <v-container
    py-6
    px-10>
        <v-row
        justify="center"
        align-content="center">
        <v-col
        xs="7"
        sm="10"
        md="10"
        lg="10"
        offset-xl="1">
            <Main />
            </v-col>
            
        <template>
            <div class="text-center pb-10 px-1">
                <v-btn
                    x-large
                    color="#2196F3"
                    outlined
                    to="/about"
                    class="mx-4 my-2">
                    about me
                </v-btn>
                <v-btn
                    x-large
                    color="#2196F3"
                    outlined
                    to="/skill"
                    class="mx-4 my-2">
                     skill
                </v-btn>
                <v-btn
                    x-large
                    color="#2196F3"
                    outlined
                    to="/work"
                    class="mx-4 my-2">
                     works
                </v-btn>
            </div>
        </template>
            
        </v-row>
    </v-container>
</template>

<script>
import Main from "../components/Main";

export default {
  components: {
    Main,
  },
};
</script>



