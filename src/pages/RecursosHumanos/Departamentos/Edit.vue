<script setup>
import ContentHeader from '../../../components/Header/ContentHeader.vue';
import { CardComponent, CardHeaderComponent, CardBodyComponent } from '../../../components/UI/Card';
import { ref, onMounted } from 'vue';
import { useDepartamentoStore } from '../../../stores';
import router from '../../../router/index.js';

const props = defineProps({
    id: Number
});
const { id } = props;
const { GetDepartamento, UpdateDepartamento, Departamentos } = useDepartamentoStore();
const Departament = ref({});

const onBackPressed = () =>{
    router.push({ name: 'Departamentos' })
}

onMounted(() => {
    if(Departamentos.length == 0){
        router.push({ name: 'Departamentos' })
    }
    Departament.value = GetDepartamento(id);
});
</script>

<template>
    <ContentHeader class="animate__animated animate__fadeIn animate__repeat-2">
        <template v-slot:Icon>
            <i class="pe-7s-plugin icon-gradient bg-mean-fruit"></i>
        </template>
        <template v-slot:Title>
            Editar Departamento
        </template>
        <template v-slot:Description>
            En este modulo se puede modificar la informacion de un departamento.
        </template>
    </ContentHeader>
    <CardComponent>
        <template v-slot:CardBody>
            <CardBodyComponent>
                <div class="row p-3">
                    <button class="btn btn-info" @click="onBackPressed"><span class="fa fa-chevron-left mr-1"></span>Regresar</button>
                </div>
                <div class="row p-3">
                    <div class="d-flex w-100">
                        <input type="text" class="form-control" v-model="Departament.descripcion" />
                        <button class="btn btn-success mx-3" @click="UpdateDepartamento(Departament)">Guardar</button>
                    </div>
                </div>
            </CardBodyComponent>
        </template>
    </CardComponent>
</template>