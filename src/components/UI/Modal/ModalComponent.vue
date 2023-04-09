<script setup>
import { onMounted, reactive } from 'vue';
import { JQJuly } from '../../../utils/ExternalVariables';
import { useModalStore } from '../../../stores';
import { storeToRefs } from 'pinia';

const { Content, HasHeader, HasFooter } = storeToRefs(useModalStore());

onMounted(() => {
    JQJuly.exec("#ModalComponent").on("hidden.bs.modal", function (e) {
        Content.value = null;
    });
});

</script>

<template>
    <div id="ModalComponent" class="modal" tabindex="-1" role="dialog" aria-labelledby="gridModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <slot name="body"></slot>
            </div>
        </div>
    </div>
</template>