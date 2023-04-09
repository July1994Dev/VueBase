const CatalogoEstatus = [
    {
        IdEstatus:1,
        Descripcion:"ACTIVO"
    },
    {
        IdEstatus:2,
        Descripcion:"CANCELADO"
    },
    {
        IdEstatus:3,
        Descripcion:"ACEPTADA"
    },
    {
        IdEstatus:4,
        Descripcion:"PENDIENTE"
    },
    {
        IdEstatus:5,
        Descripcion:"RECHAZADA"
    },
];

const CatalogoImpuestos = [
    {
        IdImpuesto:1,
        Descripcion:"IVA 16%"
    },
    {
        IdImpuesto:2,
        Descripcion:"IVA 0%"
    },
    {
        IdImpuesto:3,
        Descripcion:"EXENTO"
    },
    {
        IdImpuesto:4,
        Descripcion:"IEPS"
    },
    {
        IdImpuesto:5,
        Descripcion:"ISR"
    },
    {
        IdImpuesto:7,
        Descripcion:"RESICO IVA 16% RET ISR 1.25%"
    },
];

const CatalogoUnidadMedida = [
    {
        IdProductoUnidadMedida:1,
        Descripcion:"SERVICIO"
    },
    {
        IdProductoUnidadMedida:2,
        Descripcion:"KILOGRAMO"
    },
    {
        IdProductoUnidadMedida:3,
        Descripcion:"LITRO"
    },
    {
        IdProductoUnidadMedida:4,
        Descripcion:"METRO"
    },
    {
        IdProductoUnidadMedida:5,
        Descripcion:"PAQUETE"
    },
    {
        IdProductoUnidadMedida:6,
        Descripcion:"PIEZA"
    },
    {
        IdProductoUnidadMedida:6,
        Descripcion:"MENSUALIDAD"
    },
];

const CatalogoMetodoCosteo = [
    {
        IdTipoDetalle:12,
        Descripcion:"ULTIMO COSTO"
    }
];

const CatalogoCategoriaProducto = [
    {
        IdListaDetalle: 1,
        Descripcion:"EXPIDE"
    },
    {
        IdListaDetalle: 2,
        Descripcion:"ERPRISE"
    },
    {
        IdListaDetalle: 11,
        Descripcion:"SMART"
    },
    {
        IdListaDetalle: 15,
        Descripcion:"SISTEMA RESTAURANTERO SR"
    },
    {
        IdListaDetalle: 16,
        Descripcion:"PROGRAMACIÓN"
    },
    {
        IdListaDetalle: 18,
        Descripcion:"MANTENIMIENTO DE SOFTWARE"
    },
];

const CatalogoLineaNegocio = [

    {
        IdListaDetalle:10,
        Descripcion: "VENTA DE FOLIOS"
    },
    {
        IdListaDetalle:12,
        Descripcion: "CAPACITACIONES"
    },
    {
        IdListaDetalle:13,
        Descripcion: "DESARROLLO DE SOFTWARE"
    },
    {
        IdListaDetalle:14,
        Descripcion: "FACTURACIÓN"
    },
    {
        IdListaDetalle:17,
        Descripcion: "INFORMÁTICA"
    },
]

export {CatalogoEstatus, CatalogoImpuestos, CatalogoUnidadMedida, CatalogoMetodoCosteo, CatalogoCategoriaProducto, CatalogoLineaNegocio };