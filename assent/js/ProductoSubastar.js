class ProductoSubastar {

    comision = 1.05;
    dineroVendedor = 0;
    subastaFinalizada = false;
    precioVendido = 0;
    dineroPagina = 0;

    constructor(tipoProducto, descripcionProducto, precioPretendido){
        this.tipoProducto=tipoProducto;
        this.descripcionProducto=descripcionProducto;
        this.precioPretendido=precioPretendido;
    }

    verDescripcionDelProducto(){
        return this.tipoProducto + " " + this.descripcionProducto;
    }

    valorInicialParaSubasta(){
        return this.precioPretendido / 2;
    }

    subastaRealizada(precio){
        this.precioVendido = precio;
        this.dineroVendedor = precio;
        this.subastaFinalizada = true;
    }

    pagarVendedor(){
        if(this.subastaFinalizada == true){
            this.dineroVendedor = this.dineroVendedor / this.comision;
        }else{
            alert("aun no finalizo la subasta");
        }

        this.dineroPagina = this.dineroVendedor - this.precioVendido;

        return this.dineroVendedor;
    }

    comisionGanadaPorPagina(){
        if(this.subastaFinalizada == true && this.dineroVendedor != 0){
            return this.dineroPagina;
        }else{
            alert("la subasta no finalizo");
        }
    }
}