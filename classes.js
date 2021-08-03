// abaixo a classe é definida

debugger;

class Quadrado
{
    altura=1;
    largura=2;
    area=2;

    constructor(altura, largura)
    {
        this.altura=altura;
        this.largura=largura;
        this.area=this.altura*this.largura;
    }

}

// abaixo a classe é criada

let quadrado = new Quadrado(3, 4);

let _altura = quadrado.altura;
let _largura = quadrado.largura;
let _area = quadrado.area;

quadrado.altura=5;
quadrado.largura=10;
quadrado.novo = 50;