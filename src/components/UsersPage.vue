<template>
    <div>
        <v-toolbar flat>
            <v-toolbar-title>Пользователи</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn color="primary" rounded @click="showAddDialog=true"> Добавить </v-btn>
        </v-toolbar>
        <user-add-dialog v-model="showAddDialog" />
        <users-table :root="null" :level="0" />
    </div>
</template>

<script>
import UserAddDialog from "@/components/UserAddDialog"
import UsersTable from "@/components/UsersTable"
export default {
    name: "UsersPage",
    components: {
        UserAddDialog, UsersTable
    },
    data() {
        return {
            showAddDialog: false,
        }
    },
    computed: {
    },
    methods: {
    }


}
</script>

<style scoped>
.td-expanded {
    padding: 0 !important;
}

</style>>


</style>
