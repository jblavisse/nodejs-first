/*
Ecrire un algorithme qui calcule la factorielle de 8
NB : la factorielle de 8, notée 8!, vaut
1 x 2 x 3 x 4 x 5 x 6 x 7 x 8 = 40320
*/

let mult = 1;

for(let i=1; i<=8; i++) {
    mult = mult * i;
}

console.log(`La factorielle de 8 vaut ${mult}`);