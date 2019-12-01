export interface Pedidos {
    Productos: Array<Producto>,
    PrecioTotal: number,

}

export interface Producto {
    Codigo: string,
    Descripcion: string,
}

export interface Cliente {
    Nombre: string,
    CIF: string,
    FechaUltPedido: Date,
    Pedidos:Array<Pedidos>,
    // TODO: Ver que más necesita un cliente:      
}
