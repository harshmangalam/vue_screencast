<template>
    <div>
        <v-row justify="center">
            <v-col cols="12" xs="12" sm="8" md="6">
                <v-text-field solo></v-text-field>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="12" xs="12" sm="8" md="8">
                <v-card>
                    <v-container>
                        <v-row justify="space-between">
                            <v-col cols="12" xs="12" sm="12" md="6">
                                <img src="http://localhost:3001/public/images/logo.svg" />
                                <v-row justify="center">
                                    <v-col cols="6" xs="6" sm="6" md="6">
                                        <v-badge bordered :content="currentUser.createdVideos.toString()" color="pink accent-3" overlap>
                                            <v-chip class="ma-2" color="pink" label text-color="white">
                                                <v-icon left>mdi-label</v-icon>
                                                Videos
                                            </v-chip>
                                        </v-badge>
                                    </v-col>
                                    <v-col cols="6" xs="6" sm="6" md="6">
                                        <v-badge bordered :content="currentUser.comments.toString()" color="pink accent-3" overlap>
                                            <v-chip class="ma-2" color="pink" label text-color="white">
                                                <v-icon left>mdi-label</v-icon>
                                                Commented
                                            </v-chip>
                                        </v-badge>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="12" class="my-4" xs="12" sm="12" md="6">
                                <div v-if="currentUser.bio">
                                    <h3>
                                {{currentUser.bio}}
                            </h3>
                            </div>
                                <div v-else>
                                    <h3>
                                        Say Something About Yorself so that people know about you
                                    </h3>
                                    <v-row justify="center">
                                        <v-col cols="6" xs="12">
                                            <v-btn color="orange accent-3">
                                                About Yourself
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </div>
                                <v-row justify="center">
                                    <v-col cols="6" xs="12">
                                        <v-btn color="blue accent-3">
                                            Subscribe
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>
<script>
import { mapState } from "vuex"
export default {
    computed: {
        ...mapState(["currentUser"])
    },
}
</script>