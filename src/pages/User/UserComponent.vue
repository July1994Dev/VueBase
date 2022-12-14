<script setup>
import { CardComponent, CardHeaderComponent, CardBodyComponent, CardFooterComponent } from '../../components/UI/Card';
import { TableComponent } from '../../components/UI/Table';
</script>

<template>
    <CardComponent>
        <template v-slot:CardHeader>
            <CardHeaderComponent>
                <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
                    <i class="header-icon lnr-users icon-gradient bg-happy-itmeo"></i>
                    Usuarios
                </div>
            </CardHeaderComponent>
        </template>
        <template v-slot:CardBody>
            <CardBodyComponent>
                <div class="row p-3">
                    <div class="col">
                        <TableComponent></TableComponent>
                    </div>
                </div>
            </CardBodyComponent>
        </template>
        <template v-slot:CardFooter>
            <CardFooterComponent>
                <div class="row p-3">

                </div>
            </CardFooterComponent>
        </template>
    </CardComponent>
</template>