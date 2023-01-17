
function play(){
    var coins = $('#coins');
    var betValue = $('#betValue');
    var betNumber = $('#betNumber');
    var n = Math.floor(Math.random() * 2);
    if($('#betNumber').val() === n.val()){
        coins.val(coins + betValue)

        //exibir resultado
        var win = `Numero sorteado: ${n}. Parabéns`;
        $('#result').val(win);
        alert("aa");
    }else{
        alert('hh')
    }
}