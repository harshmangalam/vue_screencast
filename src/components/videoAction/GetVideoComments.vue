<template>
    <div style="overflow-y:scroll;height:270px">
        <v-list three-line>
            <v-list-item v-for="comment in videoComments" :key="comment._id">
                <v-list-item-avatar>
                    <v-img :src="comment.commentOn.thumbnail"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title>{{comment.commentBy.name}}</v-list-item-title>
                    <v-list-item-subtitle v-html="comment.commentBody"></v-list-item-subtitle>
                    <p><small>{{new Date(comment.createdAt).toDateString()}}</small></p>
                    <v-divider></v-divider>cd ..
                    
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
        </v-list>
    </div>
</template>
<script>
import { mapState } from "vuex"
export default {
	props:["video"],
    computed: {
        ...mapState(["videoComments"])
    },
    mounted() {
        this.$store.dispatch("fetchVideoComments",this.video._id)
    },
}
</script>