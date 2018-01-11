<template>
    <v-card raised tile  class="white--text blue-grey darken-2">
        <v-card-title primary-title>
            <div class="display-1">{{section.name}}</div>
        </v-card-title>
        <v-card-text>
            <template>
                <div class="listContainer">
                    <v-list two-line dense>
                        <v-list-tile v-for="item in history" :key="item.url" @click="" v-bind:alt="item.title">
                            <a v-bind:href="item.url" v-bind:alt="item.title" class="listLink" rel="noopener" target="_blank">
                                <v-list-tile-content>
                                    <v-list-tile-title>{{item.title}}</v-list-tile-title>
                                    <v-list-tile-sub-title v-html="formatDateTime(item.lastVisitTime)+ ' | ' + item.visitCount"></v-list-tile-sub-title>
                                </v-list-tile-content>
                                <v-divider></v-divider>
                            </a>
                        </v-list-tile>
                    </v-list>
                </div>
            </template>
    
        </v-card-text>
    </v-card>
</template>

<script>
import moment from "moment";

export default {
  name: "HistorySection",
  props: ["section"],
  components: {},
  computed: {
    history: {
      get() {
        var re = new RegExp(this.section.regex);
        return this.$store.state.history.history.filter(item => {
          return item.title && (item.title.toLowerCase().indexOf(this.filter) > -1) && (re.test(item.title) || re.test(item.url));
        });
      }
    }
  },
  methods: {
    formatDateTime(dateTime) {
      return moment(dateTime).fromNow();
    }
  },
  data() {
    return {
        filter: ''
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.headline {
    width:100%;
}
.listContainer {
  height: 400px;
  overflow-y: scroll;
  overflow-x: hidden;
}

.listContainer::-webkit-scrollbar {
  width: 2px;
}

.listContainer::-webkit-scrollbar-thumb {
  background: #666;
}

.listLink {
    color:white;
    text-decoration: none;
}

.card__text {
    padding:8px;
}

.card__title {
    padding:8px;
}
.list__tile__title {
    height: auto;
    line-height: normal;
    text-overflow: unset;
    white-space:unset;
}

</style>