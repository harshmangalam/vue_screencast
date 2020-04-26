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
                                <div v-if="!currentUser.bio">
                                    <h3>
                                        Say Something About Yorself so that people know about you
                                    </h3>
                                    <v-row justify="center">
                                        <v-col cols="6" xs="12">
                                            <!-- user bio  -->
                                            <div>
                                                <v-dialog v-model="dialog" width="500">
                                                    <template v-slot:activator="{ on }">
                                                        <v-btn color="green darken-4" v-on="on">
                                                            Write About Yourself
                                                        </v-btn>
                                                    </template>
                                                    <v-card>
                                                        <v-form>
                                                            <v-card-text>
                                                                <v-row align="center">
                                                                    <v-col>
                                                                        <v-textarea v-model="bio" label="write Bio..." prepend-icon="mdi-user"></v-textarea>
                                                                    </v-col>
                                                                </v-row>
                                                            </v-card-text>
                                                            <v-divider></v-divider>
                                                            <v-card-actions>
                                                                <v-spacer></v-spacer>
                                                                <v-btn @click="Bio" color="pink accent-3">Bio</v-btn>
                                                                <v-btn @click="dialog=false" color="pink accent-3">close</v-btn>
                                                            </v-card-actions>
                                                        </v-form>
                                                    </v-card>
                                                </v-dialog>
                                            </div>
                                            <!-- user bio  -->
                                        </v-col>
                                    </v-row>
                                </div>

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
    data() {
        return {
            dialog: false,
            bio: ""
        }
    },

    methods: {
        async Bio() {
            const data = { bio: this.bio, user_id: this.currentUser._id }
            const msg = await this.$store.dispatch("Bio", data)
            await this.$store.dispatch("setSnackbar", { ...msg, showing: true })
            this.dialog = false
        }
    },
    computed: {
        ...mapState(["currentUser"])
    },

}
</script>
