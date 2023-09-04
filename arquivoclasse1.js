class Dispositivo {

    constructor(nome){
        this.nome = nome;
        this.ligado = false;
        
    }

    ligar (){
        if (this.ligado){
            console.log("ja esta ligado");
            return;
        }
        this.ligado = true;
    }
 

    

}