const btns = document.querySelectorAll('button');
const cells = Array.from(btns);
let con = 1;
let con2 = 1;
const text = document.getElementById('txt');

btns.forEach(index => 
    {
        index.value = 1;
    });
 function handelTurns(){
    con = 1;
    this.style.background = 'cyan';
    this.value = 2;

    while( (con <= 1 && con2 < 5)){
        var num = Math.floor(Math.random() * cells.length);
    
    
        if(cells[num].value == 1){
    
            cells[num].style.background = 'red'
    
            cells[num].value = 3
    
            con++;
            con2++;
    
    
        }
        }
        if( cells[0].value  == 2 && cells[1].value  == 2 && cells[2].value  == 2 ){youwin()}
        else if( cells[3].value  == 2 && cells[4].value  == 2 && cells[5].value  == 2 ){youwin()}
        else if( cells[6].value  == 2 && cells[7].value  == 2 && cells[8].value  == 2 ){youwin()}
        else if( cells[0].value  == 2 && cells[3].value  == 2 && cells[6].value  == 2 ){youwin()}
        else if( cells[1].value  == 2 && cells[4].value  == 2 && cells[7].value  == 2 ){youwin()}
        else if( cells[2].value  == 2 && cells[5].value  == 2 && cells[8].value  == 2 ){youwin()}
        else if( cells[0].value  == 2 && cells[4].value  == 2 && cells[8].value  == 2 ){youwin()}
        else if( cells[2].value  == 2 && cells[4].value  == 2 && cells[6].value  == 2 ){youwin()}
        
        if( cells[0].value  == 3 && cells[1].value  == 3 && cells[2].value  == 3 ){youlost()}
        else if( cells[3].value  == 3 && cells[4].value  == 3 && cells[5].value  == 3 ){youlost()}
        else if( cells[6].value  == 3 && cells[7].value  == 3 && cells[8].value  == 3 ){youlost()}
        else if( cells[0].value  == 3 && cells[3].value  == 3 && cells[6].value  == 3 ){youlost()}
        else if( cells[1].value  == 3 && cells[4].value  == 3 && cells[7].value  == 3 ){youlost()}
        else if( cells[2].value  == 3 && cells[5].value  == 3 && cells[8].value  == 3 ){youlost()}
        else if( cells[0].value  == 3 && cells[4].value  == 3 && cells[8].value  == 3 ){youlost()}
        else if( cells[2].value  == 3 && cells[4].value  == 3 && cells[6].value  == 3 ){youlost()} 
    }
    function youwin(){
    text.classList.add('active');
}   

function youlost(){
    text.innerHTML = 'you lost!'
    text.classList.add('active');
} 


 btns.forEach(param => (param.addEventListener('click', handelTurns, {once : true})));