class Item {
    libro;
    cantidad;
    // precio;
    // nuevoPrecio;

    constructor (libro, cantidad) {
        this.libro = libro;
        this.cantidad = cantidad;
    }
    calcularIva=  () => {return this.libro.precio * IVA}

    precioTotal = () => {
    let precioTotal= (this.cantidad * this.libro.precio)
    return (precioTotal)}

    // descuentoCantidad = () => { 
    //  this.nuevoPrecio = (this.libro.precio *0.9)
    //  return (this.nuevoPrecio)
    }

