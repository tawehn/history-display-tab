<template>
  <div>
    <v-btn icon @click.native="show = true">
      <v-icon>settings</v-icon>
    </v-btn>
    <v-dialog v-model="show" fullscreen transition="dialog-bottom-transition" :overlay="false" scrollable>
      <v-card>
        <v-tabs fixed centered>
          <v-toolbar style="flex: 0 0 auto;" color="blue-grey darken-2" class="dark">
            <v-btn icon @click.native="show = false" dark>
              <v-icon>close</v-icon>
            </v-btn>
            <v-toolbar-title>Settings</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
            </v-toolbar-items>
          </v-toolbar>
          <v-tabs-bar color="blue-grey darken-2">
            <v-tabs-slider color="white"></v-tabs-slider>
            <v-tabs-item :href="'#generalSettings'" ripple>
              General Settings
            </v-tabs-item>
            <v-tabs-item :href="'#historySections'">
              Manage History Sections
            </v-tabs-item>

          </v-tabs-bar>
          <v-tabs-items>
            <v-tabs-content :id="'generalSettings'">
              <general-settings></general-settings>
            </v-tabs-content>
            <v-tabs-content :id="'historySections'">
              <history-sections></history-sections>
            </v-tabs-content>
          </v-tabs-items>
        </v-tabs>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import generalSettings from './generalSettings.vue'
  import historySections from './historySections.vue'
  export default {
    name: "Settings",
    components: {
      historySections,
      generalSettings
    },
    computed: {

    },
    methods: {

    },
    data() {
      return {
        show: false,
        valid: true
      };
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>