<template>
  <v-content>
    <v-container fluid pa-0>
      <v-layout>
        <v-item-group
          v-model="selections"
          class="xs12 sm10 md8 lg6 layout wrap flex"
          multiple
        >
          <v-item
            v-for="palette in palettes"
            :key="palette"
          >
            <v-hover
              slot-scope="{ active, toggle }"
            >
              <v-card
                slot-scope="{ hover }"
                :color="palette"
                :style="getStyle(active, hover)"
                :value="palette"
                :class="`elevation-${active || hover ? '12' : '0'}`"
                class="pa-2 d-flex"
                tile
                height="400"
                max-width="125"
                width="125"
                @click.native="toggle"
              >
                <v-layout column justify-space-between align-space-between>
                  <v-subtitle-2 tag="strong" v-text="palette.toUpperCase()" />
                  <v-slide-x-transition
                    class="text-xs-right"
                    hide-on-leave
                    group
                  >
                    <v-icon key="icon">mdi-check</v-icon>
                    <v-subtitle-1 v-if="primary === palette" key="primary">Primary</v-subtitle-1>
                    <v-subtitle-1 v-if="secondary === palette" key="secondary">Secondary</v-subtitle-1>
                  </v-slide-x-transition>
                </v-layout>
              </v-card>
            </v-hover>
          </v-item>
        </v-item-group>
        <v-flex
          xs12
          sm10
          md8
          lg6
          pa-5
        >
          <v-card
            class="elevation-16 mx-auto"
            color="white"
            dark
            height="500"
            max-width="500"
            tile
          >
            <v-card
              :color="primary"
              flat
              height="275"
              tile
            >
              <v-system-bar
                :class="primary"
                class="darken-2"
                status
              />
              <v-toolbar
                color="transparent"
                flat
              >
                <v-btn icon>
                  <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
                <v-spacer />
                <v-btn icon>
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </v-toolbar>
              <div
                class="pl-5 py-4"
              >
                <v-display-1 class="pl-5 font-weight-light">Theme Preview</v-display-1>
                <v-subtitle-1 class="pl-5 font-weight-light">Export your theme below</v-subtitle-1>
              </div>
              <v-btn
                :color="secondary"
                absolute
                bottom
                fab
                right
              >
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <theme-bottom-sheet>
      <v-btn
        :color="primary"
        :key="`primary-${primary}`"
        depressed
      >
        Primary
        {{ colors[primary] ? colors[primary].base : '' }}
      </v-btn>
      <v-btn
        :color="secondary"
        :key="`secondary-${secondary}`"
        depressed
      >
        Secondary
        {{ colors[secondary] ? colors[secondary].base : '' }}
      </v-btn>
    </theme-bottom-sheet>
  </v-content>
</template>

<script>
  // Utilities
  import colors from 'vuetify/es5/util/colors'
  import kebabCase from 'lodash/kebabCase'

  export default {
    components: {
      ThemeBottomSheet: () => import('./BottomSheet')
    },

    data: () => ({
      colors,
      selections: []
    }),

    computed: {
      palettes () {
        const keys = Object.keys(this.colors)

        return keys.map(kebabCase).slice(0, keys.length - 2)
      },
      primary () {
        if (!this.selections.length) return 'grey'

        return this.palettes[this.selections[0]]
      },
      secondary () {
        if (this.selections.length < 2) return 'grey'

        return this.palettes[this.selections[1]]
      }
    },

    watch: {
      selections (val) {
        if (val.length > 2) {
          this.$nextTick(() => {
            this.selections.shift()
          })
        }
      }
    },

    methods: {
      getStyle (active, hover) {
        return {
          transform: active || hover ? 'scale(.9, .85)' : 'none'
        }
      }
    }
  }
</script>
