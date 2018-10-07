<template>
  <v-card
    class="pa-5 text-xs-center"
    color="blue lighten-4"
    flat
  >
    <v-container grid-list-xl>
      <v-layout fill-height align-center justify-center>
        <v-flex
          v-for="n in 3"
          :key="n"
          xs4
          d-flex
        >
          <v-card
            class="d-flex align-center"
            height="125"
          >
            <v-card-text>Feature {{ n }}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>
