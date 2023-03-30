/* array lista spesa */
const listaSpesa = [
    'latte',
    'pomodori',
    'hamburger',
    'pizza'
];

const listaContainer = document.getElementById( 'listaSpesaPrint' )

/* ciclo for */
/* for( let i = 0; i < listaSpesa.length; i++ ){

    const listItem = document.createElement('li')
    listItem.innerText = listaSpesa[i];
    listaContainer.append(listItem)

} */

/* ciclo while */
var i = 0;
while( i < listaSpesa.length  ){

    const listItem = document.createElement('li')
    listItem.innerText = listaSpesa[i];
    listaContainer.append(listItem)

    i = i + 1;
}
