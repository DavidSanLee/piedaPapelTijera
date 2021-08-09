console.log('Presione 1 para piedra');
console.log('Presione 2 para papel');
console.log('Presione 3 para tijera');

tirada1=prompt('Ingrese su tirada: ');

tirada2 = Math.random();

if ( tirada2 <= 0.32) {

    var tirada2 = 1;
    /* piedra*/
}

else if ( tirada2 >= 0.33  && tirada2 <= 0.65 ) {

    var tirada2 = 2;
    /* papel */
}

else {
    var tirada2 = 3;
    /* tijera*/
}

console.log(tirada1);
console.log(tirada2);

if (tirada1 == 1 ) /* tiro piedra*/  {


    if ( tirada2 == 1) {
        console.log('Ha tirado piedra vs piedra, ha empatado');

    }

    else if (tirada2 == 2) {
        console.log('Ha tirado piedra vs papel, ha perdido');
    }

    else { console.log('Ha tirado piedra vs tijera, ha ganado'); }
        

}

else if (tirada1 == 2) /* tiro papel*/{

    if ( tirada2 == 1) {
        console.log('Ha tirado papel vs piedra, ha ganado');

    }

    else if (tirada2 == 2) {
        console.log('Ha tirado papel vs papel, ha empatado');
    }

    else { console.log('Ha tirado papel vs tijera, ha perdido'); }

}

else if (tirada1 == 3) /* tiro tijera*/ {

    if ( tirada2 == 1) {
        console.log('Ha tirado tijera vs piedra, ha perdido');

    }

    else if (tirada2 == 2) {
        console.log('Ha tirado tijera vs papel, ha ganado');
    }

    else { console.log('Ha tirado tijera vs tijera, ha empatado'); }


}



