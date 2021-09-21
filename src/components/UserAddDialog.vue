<template>
    <v-dialog v-model="show" persistent max-width="600">
        <v-card>
            <v-toolbar flat>
                <v-toolbar-title>Добавление пользователя</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon @click="$emit('change', false)">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-toolbar>          
            <v-card-title class="text-h5">
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field label="Имя*" required v-model="user.name"></v-text-field>
                            <v-text-field label="Телефон*" required v-model="user.phone"></v-text-field>
                            <v-select :items="heads" label="Начальник" v-model="user.head"></v-select>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>

            <v-card-actions>
                <!-- <v-spacer></v-spacer> -->
                <v-btn color="green darken-1" text @click="addUser">
                    Сохранить
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>  
</template>

<script>
export default {
    model: {
        prop: 'show',
        event: 'change'
    }, 
    props: {
        show: Boolean,
    },
    data() {
        return {
            user: {
                name: '',
                phone: '',
                head: ''
            }
        }
    },
    computed: {
        heads() {
            return ['', ...this.$store.getters['users']
                // .filter( item => !item.head )
                .map( el => el.name )
            ]
        }
    },
    methods:{
        addUser() {
            this.$store.dispatch('addUser', {...this.user})
            this.user.head = this.user.name = this.user.phone = ''
            this.$emit('change', false)        
        }
    }

}
</script>

<style>

</style>