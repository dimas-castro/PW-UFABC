// TODO: Implemente de acordo com o enunciado 
class Dado {
    private _face!: number;

    get face(){
        return this._face
    }

    set face(face:number){
        this._face = face
    }

    constructor() {
        this._face = this.jogar();
    }

    jogar(): number {
        return Math.floor(Math.random() * 6 + 1)
    }
}

type NullableHTMLElement = HTMLElement | null

let n: number = 15;

let total: number = 0;

let vetor = [new Dado()];

function start(){
    document.getElementById("roll-button")?.addEventListener("click", rollDice)

    const dice = document.getElementById("dice-container")
    
    for(let i=0; i<n; i++){
        let img = document.createElement("img")
        img.setAttribute("src", `../src/img/die${vetor[i].face}.png`)
        dice?.appendChild(img)
        img.setAttribute("id", `dice${i}`)
        if(i+1<n) {
            vetor.push(new Dado())
        }
    }

    document.getElementById("dice-qty")!.textContent = n.toString();

    UpdateFreq();
    UpdatePerc();
}

function rollDice(){
    const dice = document.getElementById("dice-container")
    
    for(let i=0; i<n; i++){
        if(document.getElementById(`dice${i}`) != null){
            vetor[i].face = vetor[i].jogar()
            document.getElementById(`dice${i}`)?.setAttribute("src", `../src/img/die${vetor[i].face}.png`)
        }
    }
    UpdateFreq();
    UpdatePerc();
}

function UpdateFreq(){
    for(let i=1; i<=6; i++) {
        let aux = parseInt(document.getElementById(`freq-${i}`)?.textContent?.toString() || "0")
        for(let j=0; j<n; j++) {
            if(vetor[j].face == i){
                aux++;
            }
        }
        document.getElementById(`freq-${i}`)!.textContent = aux.toString()
        total = total + aux;
    }
}

function UpdatePerc(){
    for(let i=1; i<=6; i++) {
        let aux = parseInt(document.getElementById(`freq-${i}`)?.textContent?.toString() || "0")
        let aux2 = ((aux/total)*100).toFixed(3)
        document.getElementById(`perc-${i}`)!.textContent = aux2.toString()
    }
}

window.addEventListener("load", start)

