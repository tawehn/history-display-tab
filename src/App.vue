<template>
  <v-app>
    <v-content>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <div>
            <v-layout row align-top>
              <v-flex xs8 offset-xs2>
                <h1 class="display-2" style="opacity: .7">
                  <clock></clock>
                </h1>
              </v-flex>
              <v-flex xs1 offset-xs1 text-xs-right>
                <settings></settings>
              </v-flex>
            </v-layout>
            <v-divider></v-divider>

            <history-sections></history-sections>
          </div>
        </v-slide-y-transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import Clock from './components/clock'
  import Settings from './components/settings'
  import HistorySections from './components/historySections'

  export default {
    name: 'app',
    components: {
      Clock,
      Settings,
      HistorySections
    },
    data () {
      return {

      }
    }
  }
</script>
