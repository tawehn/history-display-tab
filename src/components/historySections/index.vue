<template>
    <v-layout row justify-space-between wrap>
        <template v-for="section in sections">
            <v-flex px-3 my-2 md4 xs12 :key="section.name">
                <history-section :section="section"></history-section>
            </v-flex>
        </template>
    </v-layout>
</template>

<script>
import HistorySection from "./historySection";

export default {
  name: "HistorySections",
  components: {
    HistorySection
  },
  mounted() {
      this.$store.dispatch('getHistory')
  },
  computed: {
    sections: {
      get() {
        return this.$store.state.config.historySections;
      }
    }
  },
  methods: {},
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>