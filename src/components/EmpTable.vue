<template>
    <div>
        <EmpDialog v-model="showAddDialog" />
        <v-data-table
            :headers="headers"
            :items="users"
            :expanded.sync="expanded"
            item-key="name"
            show-expand
            disable-pagination
            hide-default-footer
            class="elevation-1"
        >
            <template v-slot:top>
                <v-toolbar flat>
                    <v-toolbar-title>Пользователи</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" rounded @click="showAddDialog=true"> Добавить </v-btn>
                </v-toolbar>
            </template>

            <template v-slot:item.data-table-expand="{ expand, item, isExpanded }">
                <v-icon v-if="getStaff(item).length" 
                    class="v-data-table__expand-icon"
                    :class="{ 'v-data-table__expand-icon--active': isExpanded}"
                    @click.stop = "expand(!isExpanded)"
                >
                    mdi-menu-down
                </v-icon>
            </template>

            <template v-slot:expanded-item="{ headers, item }">
                    <td class="td-expanded" :colspan="headers.length">
                    <v-data-table
                        :items="getStaff(item)"
                        :headers="headers.filter((_, i) => true)"
                        item-key="name"
                        hide-default-footer
                        hide-default-header
                    >
                    </v-data-table>
                    </td>
                
            </template>
        </v-data-table>
    </div>
</template>

<script>
import EmpDialog from "@/components/EmpDialog"
export default {
    name: "EmpTable",
    components: {
        EmpDialog
    },
    data() {
        return {
            showAddDialog: false,
            expanded: [],
            headers: [
                { 
                    text: "", 
                    value: "data-table-expand" 
                },
                {
                    text: "Имя",
                    align: "start",
                    sortable: true,
                    value: "name",
                },
                {
                    text: "Телефон",
                    sortable: true,
                    value: "phone",
                },
            ],
        }
    },
    computed: {
        users() {
            return this.$store.getters['users']
                .filter( item => !item.head )
        } 
    },
    methods: {
        getStaff(head) {
            return this.$store.getters['users']
                .filter( item => item.head && item.head===head.name )
        }
    }


}
</script>

<style scoped>
.td-expanded {
    padding: 0 !important;
}

</style>>


</style>
