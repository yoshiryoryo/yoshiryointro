<template>
    <v-container
    py-6
    px-10
    pt-12
    >
        <v-row
        justify="center"
        align-content="center">
        <v-col
        xs="7"
        sm="10"
        md="10"
        lg="10"
        offset-xl="1">
        <h1>
            MY SKILL
        </h1>
        </v-col>

        <v-col
        xs="12"
        sm="6"
        md="3"
        lg="3"
        v-for="skill in skills" :key="skill.title"
        >
        <template>
            <v-hover>
                <v-card
                    slot-scope="{hover}"
                    class="text-xs-center ma-4"
                    :class="`elevation-${hover ? 12 : 4}`"
                    color="#FFFFFF"
                >
                <v-card-title>
                    <div class="mx-auto">
                                    <v-progress-circular
                                        :value="skill.value"
                                        :color="skill.color"
                                        :rotate="-90"
                                        width="15"
                                        size="100">
                                        {{ skill.value }}
                                    </v-progress-circular>
                                </div>
                </v-card-title>

                <v-card-action>
                    <v-layout justify-space-around>
                        <div class="headline">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on }">
                                    <span
                                    :color="skill.color"
                                    :class="`${skill.color}--text`"
                                    class="subtitle-1"
                                    v-on="on">
                                     <v-icon size="20">
                                        {{ skill.icon }}
                                     </v-icon>
                                    {{ skill.title }}
                                    </span>
                                </template>
                            </v-tooltip>
                        </div>
                    </v-layout>
                </v-card-action>
                </v-card>
            </v-hover>
        </template>
        </v-col>
        </v-row>

        <div class="text-center" pb-7 px-5>
            <v-btn
             x-large
             color="#204969"
             outlined
             to="/"
             class="mx-4 my-2"
            >
            BACK HOME
            </v-btn>
        </div>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            skills: [
                {
                    title: "HTML/CSS",
                    value: 0,
                    absoluteValue: 70,
                    color: "#204969",
                    icon: "mdi-language-html5",
                    show: false,
                },
                {
                    title: "JavaScript",
                    value: 0,
                    absoluteValue: 50,
                    color: "#204969",
                    icon: "mdi-language-javascript",
                    show: false 
                },
                {
                    title: "Vue.js",
                    value: 0,
                    absoluteValue: 70,
                    color: "#204969",
                    icon: "mdi-vuejs",
                    show: false 
                },
                {
                    title: "PHP",
                    value: 0,
                    absoluteValue: 40,
                    color: "#204969",
                    icon: "mdi-language-php",
                    show: false 
                },
                {
                    title: "Laravel",
                    value: 0,
                    absoluteValue: 60,
                    color: "#204969",
                    icon: "mdi-laravel",
                    show: false 
                },
                {
                    title: "Docker",
                    value: 0,
                    absoluteValue: 50,
                    color: "#204969",
                    icon: "mdi-docker",
                    show: false 
                },
                {
                    title: "Fishing",
                    value: 0,
                    absoluteValue: 100,
                    color: "#204969",
                    icon: "mdi-fish",
                    show: false 
                },
                {
                    title: "Camp",
                    value: 0,
                    absoluteValue: 100,
                    color: "#204969",
                    icon: "mdi-campfire",
                    show: false 
                },
            ],
            interval: {},
            expand: false,
        }
    },
    beforeDestroy() {
    clearInterval(this.interval)
  },
  mounted() {
    let timesRun = 0;
    this.interval = setInterval(() => {
      if (timesRun === 10) {
        clearInterval(this.interval);
        return;
      }
      timesRun += 1;
      this.skills.forEach((skill) => {
        if (skill.absoluteValue !== skill.value) {
          skill.value += 10
        }
      });
    }, 300)
    }
};
</script>

<style>
    h1 {
        font-size: 100px;
        text-align: center;
        color: #204969;
    }
    .headline {
        color: #204969;
    }
</style>