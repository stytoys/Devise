const url = 'http://data.fixer.io/api/latest?access_key=b9a734ce5d133fcf9902b7fd8665c40f&base=EUR&symbols=USD,AUD,CAD,PLN,GBP,JPY,EUR,MXN'

function recupererValue() {
    jQuery.ajax({
        url: url,
        type: 'GET',
        success: function(res, status, rec) {
            //console.log(res.rates);

        const rates = res.rates
        ,   fromAmount = document.getElementById('fromAmount').value
        ,   from = document.getElementById('from').value
        ,   toAmount = document.getElementById('toAmount').value
        ,   to = document.getElementById('to').value

        //Formule de change
        const result = fromAmount * rates[to] / rates[from]

        document.getElementById('toAmount').value = result
        }
    })
};