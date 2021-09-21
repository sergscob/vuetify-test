<template>
    <v-data-table
        :headers="headers"
        :items="users"
        :expanded.sync="expanded"
        item-key="name"
        show-expand
        disable-pagination
        hide-default-footer
        :hide-default-header="root"
        class="elevation-1 ml-10"
    >
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
                    <users-table :root="item" :level="level+1" />
                </td>
        </template>
    </v-data-table>
</template>

<script>
export default {
    name: "UsersTable",
    props: {
        root: Object,
        level: Number
    },
    components: {
    },
    data() {
        return {
            expanded: [],
            headers: [
                { 
                    text: "", 
                    value: "data-table-expand",
                    cellClass: "expanded-icon"
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
                .filter( item => this.root ? item.head && item.head===this.root.name : !item.head )
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

<style>
.td-expanded {
    padding: 0 !important;
}

.expanded-icon {
    width: 60px;
}


.v-data-table > .v-data-table__wrapper tbody tr.v-data-table__expanded__content {
    -webkit-box-shadow: none;
    box-shadow: none;
}

</style>


</style>
