<template>
  <v-container
    py-6
    px-10
    mt-5
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
            WORK
        </h1>
            </v-col>

            

 <template>
  <v-card
    class="mx-auto"
    max-width="400"
    color="#204969"
  >
    <v-img
      class="black--text align-end"
      height="180px"
      src="../assets/キャプチャ.jpg"
    >
      <v-card-title>掲示板アプリ</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
    </v-card-subtitle>

    <v-card-text class="pb-1">
      <p>構成要素: Docker, Laravel</p>
      <p>DockerでLaravel環境を構築し、作成した。</p>
      <p>MVCモデルの理解や,Route設定など基礎を抑えるのに大変良い学習になった。
      <br>migrateで結構つまずいたので、ここはしっかり復習して学習を深めていきたい。
      </p>
    </v-card-text>

    <v-card-actions class="pt-1 pb-1">
      <v-btn
        color="green"
        text
      >
        Jump
      </v-btn>

      <v-btn
       color="blue"
       text
      >
      <a href="https://github.com/yoshiryoryo/keijiban">
        source code
        </a>
      </v-btn>

    </v-card-actions>
  </v-card>

  <v-card
    class="mx-auto"
    max-width="400"
    color="#204969"
  >
    <v-img
      class="white--text align-end"
      height="180px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>写真投稿アプリ</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
    </v-card-subtitle>

    <v-card-text class="pb-1">
      <p>構成要素: Docker, Laravel, Vue.js</p>

      <p>DockerでLaravel環境を構築し、フロント部分をVue.jsで作成した。</p>
      <p>LaravelとのMixは自分の中でうまく理解できたと感じた。
      <br>Vuexの理解が浅いので、これからの学習で重点的に取り組んでいきたい。</p>
    </v-card-text>

    <v-card-actions class="pt-0 pb-1">
      <v-btn
        color="green"
        text
      >
        Jump
      </v-btn>

      <v-btn
       color="blue"
       text
      >
      <a href="https://github.com/yoshiryoryo/sakanaphoto">
        source code
        </a>
      </v-btn>

    </v-card-actions>
  </v-card>
 </template>
 </v-row>

         <div class="text-center pt-5 pb-2 px-5">
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

<style>
   a {
  text-decoration: none;

   } 
</style>

