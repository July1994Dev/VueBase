<script setup>
import { onMounted } from 'vue';
import { JQJuly } from '../../../utils/ExternalVariables';

onMounted(() => {
    JQJuly.exec("#ModalComponent").modal();
});

</script>

<template>
    <div class="modal fade" id="ModalComponent" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <slot></slot>
        </div>
    </div>
</template>