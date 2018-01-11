<template>
    <div>
        <v-btn icon @click.native="show = true">
            <v-icon>edit</v-icon>
        </v-btn>
        <v-dialog v-model="show" transition="dialog-bottom-transition" :overlay="false" scrollable max-width="290">
            <v-card>
                <v-toolbar style="flex: 0 0 auto;" color="blue-grey darken-2" class="dark">
                    <v-btn icon @click.native="show = false" dark>
                        <v-icon>close</v-icon>
                    </v-btn>
                    <v-toolbar-title>{{name}}</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                    </v-toolbar-items>
                </v-toolbar>
                <v-card-text>
                    <v-form v-model="valid">
                        <v-text-field label="Name" v-model="historySection.name"  required></v-text-field>
                        <v-text-field label="Regex" v-model="historySection.regex" required></v-text-field>
                    </v-form>
                </v-card-text>
                       <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="white" flat="flat" @click.native="show = false">Cancel</v-btn>
          <v-btn color="white" flat="flat" @click.native="saveChanges(historySection.id,historySection.name,historySection.regex)">Save</v-btn>  
        </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
  import draggable from 'vuedraggable'

  export default {
    name: "HistorySectionEditor",
    components: {
      draggable
    },
    computed: {
      historySection: function() {
          return { id: this.id,name: this.name,regex: this.regex}
      }

    },
    methods: {
      saveChanges(id,name,regex) {
        this.$store.commit("saveHistorySection", {id,name,regex})
        this.show = false
      }
    },
    props: ['id', 'name','regex'],
    data() {
      return {
        show: false,
        valid: true,
      };
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>