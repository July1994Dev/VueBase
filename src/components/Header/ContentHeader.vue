<script setup>

</script>

<template>
        <div class="app-page-title">
        <div class="page-title-wrapper">
            <div class="page-title-heading">
                <div class="page-title-icon">
                    <slot name="Icon"></slot>
                </div>
                <div>
                    <slot name="Title"></slot>
                    <div class="page-title-subheading">
                        <slot name="Description"></slot>
                    </div>
                </div>
            </div>
            <div class="page-title-actions">
                <slot name="Controls"></slot>
            </div>
        </div>
    </div>
</template>