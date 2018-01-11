<template>
    <v-container fluid>
        <v-layout row wrap>
            <v-flex xs12>
                <v-subheader>History Section Background Color</v-subheader>
            </v-flex>
            <v-flex xs12>
                <v-select v-bind:items="availableColors" v-model="historySectionColor" label="Select" single-line bottom></v-select>
            </v-flex>
            <v-flex xs12>
                <v-text-field label="History Items to Show" v-model="historyItemsToShow" required></v-text-field>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  export default {
      name: "GeneralSettings",
      components: {},
      computed: {
          historySectionColor: {
              get() {
                  return this.$store.state.config.historySectionColor;
              },
              set(value) {
                  this.$store.commit("updateHistorySectionColor", value);
              }
          },
          historyItemsToShow: {
              get() {
                  return this.$store.state.config.historyItemsToShow;
              },
              set(value) {
                  this.$store.commit("updateHistoryItemsToShow", value);
              }
          },
          availableColors: function () {
              console.log(this.$store.state.config.colors)
              return this.$store.state.config.colors;

          }

      },
      methods: {

      },
      data() {
          return {};
      }
  };
</script>