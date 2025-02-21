let btnCarat = document.getElementsByClassName('btnCarat')

for(let i = 0; i < btnCarat.length; i++){
    btnCarat[i].addEventListener('click',function(){
        for(let j = 0; j < btnCarat.length; j++){
            btnCarat[j].style.color = 'grey'
            btnCarat[j].style.fontSize = '14px'
        }
        this.style.color = 'white'
        this.style.fontSize = '18px'
    })
}