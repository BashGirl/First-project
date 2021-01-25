const init = function () {
    // Native js
    const button = document.getElementById('jsCreatePizza');
    button.addEventListener('click', newPizza);


    // Jquery
    $('body').on('click', '.jsRiseIt', riseIt);
    $('body').on('click', '.jsCookIt', cookIt);
};

const riseIt = function(e) {
    let index = extractIndex(e);
    //leaveneds[index].rise(); // restituisce un'istanza erche stiamo dicendo "prendi il valore dell'array con posizione index e restituisci un'istanza
    let leavenedInstance = leaveneds[index];

    if (leavenedInstance.isCooked === false) {
        let $button = $(e.target);
        let $leavened = $button.parents('.leavened');
        let $icon = $leavened.find('.leavenedIcon');
        $icon.addClass('isLeavened');
    }

    leavenedInstance.rise();
};


const cookIt = function(e) {
    let index = extractIndex(e);
    let leavenedInstance = leaveneds[index];

    if (leavenedInstance.isLeavened === false) {
        let $button = $(e.target);
        let $leavened = $button.parents('.leavened');
        let $icon = $leavened.find('.leavenedIcon');
        $icon.addClass('isBurned');
    } else if (leavenedInstance.isCooked === false) {
        let $button = $(e.target);
        let $leavened = $button.parents('.leavened');
        let $icon = $leavened.find('.leavenedIcon');
        $icon.addClass('isCooked');
    } else {
        let $button = $(e.target);
        let $leavened = $button.parents('.leavened');
        let $icon = $leavened.find('.leavenedIcon');
        $icon.addClass('isBurned');
    }

    leavenedInstance.cook();
};

const extractIndex = function(e){
    let $button = $(e.target);
    let $leavened = $button.parents('.leavened');
    let $leaveneds = $('.container .leavened');
    //let index = $leaveneds.index($leavened);
    //return index;
    return $leaveneds.index($leavened);
};

const newPizza = function (e) {
    console.log('Creazione nuova pizza');
    $(".leavened.hidden").clone().removeClass('hidden').appendTo(".container");

    let leavened = new Pizza();
    leaveneds.push(leavened);
}


let leaveneds = [];

init();

