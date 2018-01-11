<template>
    <v-card raised tile v-bind:class="[historySectionBackgroundColor,'white--text','darken-2']">
        <v-card-title primary-title class="text-xs-center">
            <h3>{{section.name}}</h3>
        </v-card-title>
        <v-card-text>
            <template>
                <div class="listContainer" v-bind:style="{'height':(historyItemsToShow*60)+'px'}">
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
            },
        },
        historySectionBackgroundColor: function () {
            return this.$store.state.config.historySectionColor;
        },
        historyItemsToShow: function () {
            return this.$store.state.config.historyItemsToShow;
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
        width: 100%;
    }

    .listContainer {
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
        color: white;
        text-decoration: none;
    }

    .card__text {
        padding: 8px;
    }

    .card__title {
        padding: 4px;
    }

    .card__title>h3 {
        text-align: center;
        width: 100%;
    }

    .list__tile__title {
        height: auto;
        line-height: normal;
        text-overflow: unset;
        white-space: unset;
    }

    ul.list {
        background: rgba(0, 0, 0, 0.5);
    }

</style>