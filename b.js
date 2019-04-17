function wrong(){
    console.log(whatever)
    var whatever=console.log(document.getElementById('amao'))
    console.log(1/0)
    console.log(0/100)
    console.log(typeof(100))
    if(100==='100'){
        document.write(typeof(100))
    }else{
        document.write(typeof('a'))
    }
}
window.onload=wrong