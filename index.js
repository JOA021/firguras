class FiguraGeometrica {
    constructor(pAncho, pLargo, pRadio) {
        this.ancho = pAncho;
        this.largo = pLargo
        this.radio = pRadio
    }

    Area() {
        console.log(`el area del cuadrado es: ${(this.ancho) * (this.largo)} `)
    }

    Perimetro() {
        console.log(`el perimetro del cuadrado es: ${(this.ancho) * (this.largo) * 2}`)
    }
}

class Circulo extends FiguraGeometrica{
    Area() {
        console.log(`el area del circulo es: ${(this.radio^2) * (3.14)}`)
    }

    Perimetro() {
        console.log(`el perimetro de un circulo es:  ${(2) * (3.14) * (this.radio)}`)
    }
}

class Cuadrado extends FiguraGeometrica{
    Area() {
        console.log(`el area del cuadrado es: ${(this.ancho) * (this.largo)} `)
    }

    Perimetro() {
        console.log(`el perimetro del cuadrado: ${(this.ancho) * (this.largo) * (2)}`)
    }
}

class Rectangulo extends FiguraGeometrica{
    acelerar() {
        console.log(`el area del rectangulo : ${(this.ancho) * (this.largo)} `)
    }

    Perimetro() {
        console.log(`el perimetro del rectangulo es: ${(this.ancho) * (this.largo) * (2)}`)
    }
}


const medida_circulo = new Circulo (1, 1, 4)
medida_circulo.Area()
medida_circulo.Perimetro()

const medida_cuadrado = new Cuadrado (2, 2, 1)
medida_cuadrado.Area()
medida_cuadrado.Perimetro()

const medida_rectangulo = new Rectangulo (3, 3, 1)
medida_rectangulo.Area()
medida_rectangulo.Perimetro()






// Escribir una poci贸n de c贸digo, d贸nde exista una clase padre que se llame
// figura geometrica (FiguraGeometrica) y que tenga las siguientes clases hijas:
// - Circulo
// - Cuadrado
// - Rectangulo
// Hacer una funci贸n para retornar el area y 
// el perimetro de cada figura. 