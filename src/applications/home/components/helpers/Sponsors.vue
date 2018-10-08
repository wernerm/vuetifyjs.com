<template>
  <v-card flat color="grey lighten-4 pa-5 text-xs-center">
    <v-layout
      column
      mb-5
    >
      <v-title class="grey--text">
        Patreon Sponsors
      </v-title>

      <v-container
        v-for="(tier, i) in tiers"
        :key="i"
        grid-list-xl
      >
        <v-layout
          justify-center
          wrap
        >
          <v-flex
            v-for="(sponsor, j) in tier.sponsors"
            :key="j"
            shrink
          >
            <v-card
              :width="i > 0 ? 120 : 160"
              class="d-flex align-center justify-center"
              height="48"
              v-text="`Patron ${j + 1}`"
            />
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>

    <v-title class="grey--text">
      Open Collective Sponsors
    </v-title>

    <v-container
      grid-list-xl
    >

      <v-layout
        justify-center
        wrap
      >
        <template v-for="tier in tiers">
          <v-flex
            v-for="(sponsor, j) in tier.sponsors"
            :key="j"
            shrink
          >
            <v-card
              class="d-flex align-center justify-center"
              height="48"
              width="120"
              v-text="`Open Collective ${j + 1}`"
            />
          </v-flex>
        </template>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      tiers: [
        {
          name: 'Diamond',
          sponsors: [
            {}, {}, {}
          ]
        },
        {
          name: 'Palladium',
          sponsors: [
            {}, {}, {}, {}, {}, {}, {}
          ]
        }
      ]
    })
  }
</script>
