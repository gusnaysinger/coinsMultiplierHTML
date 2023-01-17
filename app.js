var coins = 5;
$('#coins').val(coins);
function login(){
    var user = $('#user').val();
    $('#username').val(`${user}`);
}
function play(){
    var betValue = $('#betValue').val();
    var betNumber = $('#betNumber').val();
    var n = Math.floor(Math.random() * 51);
    if(coins <= 0){
        alert('Você não tem saldo suficiente, volte outro dia.')
        $('#coins').val('0');
        $('#betNumber').val('');
        $('#betValue').val('');
        $('#result').val('');
        return;
    }else if(betNumber <= 0 || betNumber >= 50){
        alert('Aposte um número válido.')
        $('#betNumber').val('');
        $('#betNumber').focus();
        return;
    }
    if(+$('#betNumber').val() === n){
        coins = coins + +betValue;
        $('#coins').val(coins);

        //exibir resultado
        var win = `Numero sorteado: ${n}. Parabéns`;
        $('#result').val(win);
    }else{
        coins = coins - +betValue;
        $('#coins').val(coins);
        
        //exibir resultado
        var lose = `Numero sorteado: ${n}. Você perdeu`;
        $('#result').val(lose);
    }
}