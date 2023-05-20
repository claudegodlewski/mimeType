/*
MIME Type (CodinGame).
URL: https://www.codingame.com/ide/puzzle/mime-type
*/

// Stockage du nombre d'éléments.
let nombreElementsN = readline();

// Stockage du nombre de fichiers.
let nombreFichiersQ = readline();

// Table d'association.
let tableAssociation = {};

// Stockage des extensions et des types MIME.
for (let i = 0; i < nombreElementsN; i++) {
    let [extensions, typesMIME] = readline().split(' ');
    tableAssociation[extensions.toLowerCase()] = typesMIME;
}

// Stockage des extensions des fichiers.
for (let i = 0; i < nombreFichiersQ; i++) {
    let tableauDesExtensions = readline().toLowerCase().split('.');
    if (tableauDesExtensions.length > 1 && tableAssociation[ tableauDesExtensions[tableauDesExtensions.length-1] ]) { 
        console.log(tableAssociation[ tableauDesExtensions[tableauDesExtensions.length-1] ]) 
    } 
    else { 
        console.log('UNKNOWN') 
    };
}