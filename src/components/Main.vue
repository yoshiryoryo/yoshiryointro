<template>
    <v-container
        py-10
        px-5>
        <v-row
            justify="center"
            align-content="center">
            <v-col
                cols="10"
                xs="7"
                sm="10"
                md="9"
                lg="10"
                offset-xl="1">   
                        <section class="welcome">
                            <div id="typed-strings">
                               <h1>WELCOME<br>MY<br>PORTFORIO!!!</h1>
                            </div>
                            <span id="introduction" />
                            <span class="typed-cursor" />
                        </section>      
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Typed from "typed.js";

export default {
  mounted() {
    new Typed("#introduction", {
      stringsElement: "#typed-strings",
      startDelay: 500,
      backSpeed: 100,
      typeSpeed: 100,
      loop: false,
      showCursor: false
    });

  },
}
</script>

<style>
    #introduction {
        white-space: pre-wrap;
    }

    @keyframes my-fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }


    .welcome{
        text-align: center;
        width: auto;
        height: auto;
        border-radius: 8px 8px 0 0;
        min-height: 450px;
        margin: auto;
        position: relative;
        animation-name: my-fade-in;
        animation-duration: 4s;
        font-size: 100px;
        font-weight: bold;
        color: white;
        background-color: #1A237E;
    }

    .v-application--wrap {
        min-height: 100%;
    }

</style>