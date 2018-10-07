<template>
  <v-card
    class="pa-5 text-xs-center"
    color="green lighten-4"
    flat
  >
    <v-display-1>Made With Vuetify</v-display-1>

    <v-container grid-list-xl>
      <v-layout
        align-center
        fill-height
        justify-center
        wrap
      >
        <v-flex
          v-for="n in 6"
          :key="n"
          xs4
          d-flex
        >
          <v-card
            class="d-flex align-center"
            height="125"
          >
            <v-card-text>Project {{ n }}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>
