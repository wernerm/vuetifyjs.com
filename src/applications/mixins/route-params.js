// Utilities
import {
  mapState
} from 'vuex'

export default {
  computed: {
    ...mapState('guide', ['namespace', 'page'])
  }
}
