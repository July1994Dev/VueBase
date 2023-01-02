<script setup>
import { onMounted, ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { JQJuly } from '../../../utils/ExternalVariables.js';

const props = defineProps({
    items: Array,
    hasFooter: Boolean
});

const isData = ref(false);
const id = uuidv4();
const { items, hasFooter } = props;

const columns = items && items.length > 0 ? Object.keys(items[0]) : [];

onMounted(() => {
    isData.value = items && items.length > 0;
    JQJuly.exec(`#${id}`).DataTable();
});

</script>
<template>
    <table v-if="isData" :id="id" class="table table-hover table-striped table-bordered w-100">
        <thead>
            <tr>
                <th v-for="c in columns">{{ c }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="i in items">
                <td v-for="c in columns">{{ i[c] }}</td>
            </tr>
        </tbody>
        <tfoot v-if="hasFooter">
            <tr>
                <th v-for="c in columns">{{ c }}</th>
            </tr>
        </tfoot>
    </table>
    <div v-else class="text-center">
        No hay datos para mostrar
    </div>
</template>