<template>
    <div>
        <v-layout row wrap>
            <v-flex xs8 offset-xs2>
                <v-btn fixed dark fab bottom right color="green">
                    <v-icon>add</v-icon>
                </v-btn>
                <v-list two-line>
                    <draggable v-model="historySections">
                        <template v-for="item in historySections">
                            <div v-bind:key="item.name">
                                <v-list-tile>
                                    <v-list-tile-content>
                                        <v-list-tile-title v-html="item.name"></v-list-tile-title>
                                        <v-list-tile-sub-title v-html="item.regex"></v-list-tile-sub-title>
                                    </v-list-tile-content>
                                    <v-list-tile-action>
                                        <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
                                        <history-section-editor :id="item.id" :name="item.name" :regex="item.regex"></history-section-editor>
                                        <v-icon color="red lighten" @click="">delete</v-icon>

                                    </v-list-tile-action>

                                </v-list-tile>
                                <v-divider v-bind:key="item.name" v-bind:inset="item.inset"></v-divider>
                            </div>
                        </template>
                    </draggable>
                </v-list>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
  import draggable from 'vuedraggable'
  import historySectionEditor from './historySectionEditor'
  export default {
    name: "HistorySections",
    components: {
      draggable,
      historySectionEditor
    },
    computed: {
      historyItemsToShow: {
        get() {
          return this.$store.state.config.historyItemsToShow;
        },
        set(value) {
          this.$store.commit("updateHistoryItemsToShow", value);
        }
      },
      historySections: {
        get() {
          return this.$store.state.config.historySections;
        },
        set(value) {
          this.$store.commit('updatehistorySections',value)
        }
      }
    },
    methods: {
      saveConfig(historyItemsToShow, historyItems) {
        this.$store.dispatch("saveConfig", historyItemsToShow, historyItems);
      }
    },
    data() {
      return {
        valid: true
      };
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>