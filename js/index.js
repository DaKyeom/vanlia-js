function dice() {
    var num = Math.floor( Math.random()*10 ) + 1;

    if(num <= 6){
        console.log(num);
        return ;
    }
    return;
}

dice();
