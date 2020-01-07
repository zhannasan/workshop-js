var villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];
villes.forEach(function(element){
    console.log(element)
});

var lettreADansToutesLesVilles = villes.every(function(element){
    var lettre = 'a';
    if(element.indexOf(lettre)>=0){
        return true;
    }
    return false;
});

console.log(lettreADansToutesLesVilles);

var auMoinsUneVilleAvecUnTiret = villes.some(function(element){
    var character = "-";
    if(element.indexOf(character)>=0){
        return true;
    }
    return false;
});

console.log(auMoinsUneVilleAvecUnTiret);

var villesSansTiretSansEspace = villes.filter(function(element){
    var character = "-";
    var space = "\u0020";
    if(element.indexOf(character)<0 && element.indexOf(space)<0){
       return element;
    }
});

console.log(villesSansTiretSansEspace);

var villesMajusculeSeTerminantParS = villes.filter(function(element){
    if(element.lastIndexOf('s')){
        return element;
    }
}).map(function(element, index, array ){
    for(var i=0; i<array.length; i++){
        return array[index].toUpperCase();
    }
});

console.log(villesMajusculeSeTerminantParS);
