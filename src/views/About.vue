<template>
    <v-container
    py-6
    px-10>
        <v-row
        justify="center"
        align-content="center">
        <v-col
        cols=""
        xs="7"
        sm="10"
        md="10"
        lg="10"
        offset-xl="1">
        <h1>
            ABOUT ME
        </h1>
        </v-col>

  <template>
    <div class=" pb-14 px-1">
    <v-col>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="../assets/line_315622894972358.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      芳田  亮のこと
    </v-card-title>

    <v-card-subtitle>
      こんな感じの人間です
    </v-card-subtitle>

    <v-card-actions>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
        前職は村役場で公務員をしていました。
        <br>主な仕事としては総務省が推進している、サテライトオフィス事業と観光施設の管理、子供向けイベントの企画、立案などをおこなっていました。
        <br>その中で、田舎特有のしがらみや、中々新しいことに取り組んでいけない環境をどうにかしたいと思い、転職を決意しました。
        <br>現在は、職業訓練学校に通っており、フロントエンドエンジニアになるために学習しています。
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  </v-col>
    </div>
 </template>

 <template>
   <div class=" pb-14 px-1">
    <v-col>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="..\assets\PvjBSPtBBKcXjQ71607569013.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      好きなこと
    </v-card-title>

    <v-card-subtitle>
      趣味について語ります
    </v-card-subtitle>

    <v-card-actions>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
        私の趣味は釣りと、キャンプです。
        <br>料理が好きなので、食べれる魚しか釣りません。
        <br>写真は、今年釣ったハマチです。釣りたての刺身は日本一うまい！！！
        <br>キャンプでは燻製とアヒージョにはまってます。
        <br>夏キャンより冬キャン派です。
        <br>おすすめのキャンプ場は兵庫県にある丸山県民サンビーチです。ここは無料な上に目の前が海なので、釣りとキャンプ好きにとっては天国です。
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  </v-col>
   </div>
 </template>

 <template>
   <div class="pb-14 px-1">
    <v-col>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="../assets/464686_s.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      これからの展望
    </v-card-title>

    <v-card-subtitle>
      エンジニアになって何がしたいか
    </v-card-subtitle>

    <v-card-actions>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
        公務員の時にはなかった、０から何かを作りたいという思いが強いです。
        <br>エンジニアになり、多くの人の目に入るものを作り、クライアント、ユーザー問わず、たくさんの人に喜んでもらいたいです。
        <br>将来的には、自治体と連携して過疎地に携われるような仕事や、釣りやキャンプなどアウトドア関連のアプリの開発など、自分の経験が活かせるような働き方ができるエンジニアになれればと考えています。
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  </v-col>
   </div>
 </template>

 </v-row>
       <div class="text-center pb-7 px-5">
            <v-btn
             x-large
             color="#2196F3"
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
    data: () => ({
      show: false,
    }),
  }
</script>


