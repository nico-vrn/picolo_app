let liste_nom=[];
var nombre_precedent;
var liste_questionpose=[];

function init(){
    localStorage.name="";
    console.log(localStorage.name);
}

function ajouter_nom(){
    console.log("entrer");
    var div=document.getElementById("all");
    var name= document.getElementById("name").value;
    var chaque_name=document.createElement("p");
    chaque_name.textContent=name;
    div.appendChild(chaque_name);
    liste_nom.push(name);
    name="sd";
    console.log("test:", name, liste_nom);
}

function enregistrer_name(){
    localStorage.name=JSON.stringify({liste_nom});
    console.log(localStorage.name);
}

function jenaijamais(){
    var nom= JSON.parse(localStorage.name);
    var nom2=nom.liste_nom;
    //console.log(localStorage.name);
    //console.log(nom2)
    var taille =nom2.length;
    var nombre_nom=Math.floor(Math.random()*taille);
    //console.log(nombre_nom,nombre_precedent);
    while(nombre_nom==nombre_precedent){
        nombre_nom=Math.floor(Math.random()*taille);
        //console.log("while");
    }
    //console.log(nombre_nom);
    nombre_precedent=nombre_nom;
    //console.log(nombre_precedent);

    var taille_q=liste_jenaijamais.length;
    var nombre_q=Math.floor(Math.random()*taille_q);
    console.log(nombre_q);
    for(var i=0; i<liste_questionpose.length;i++){
        console.log("i=",i,"length=", liste_questionpose.length);
        if(nombre_q==liste_questionpose[i]){
            console.log(nombre_q,liste_questionpose[i]);
            while(nombre_q==liste_questionpose[i]){
                console.log("while");
                nombre_q=Math.floor(Math.random()*taille_q);
                console.log("nombre q=", nombre_q);
                console.log("liste1=",liste_jenaijamais.length,"liste2=",liste_questionpose.length)
                if(liste_jenaijamais.length==liste_questionpose.length){
                    document.getElementById("questionis").textContent="plus de questions";
                    window.location.href="name.php";
                    console.log("break");
                    break;
                }
                i=0;
                console.log("i=",i);
            }
        }
    }
    liste_questionpose.push(nombre_q);
    console.log(liste_questionpose);
    document.getElementById("quijoue").textContent=nom2[nombre_nom];
    document.getElementById("questionis").textContent=liste_jenaijamais[nombre_q];
}


var liste_jenaijamais=["Raconte t???as premi??re fois","Que dirais tu ?? la derni??re personne que tu as embrass??","J???ai d??j?? / je n???ai jamais Black out ", "J???ai d??j?? / je n???ai jamais p??cho en bo??te", "J???ai d??j?? / je n???ai jamais tromp?? ", "J???ai d??j?? / je n???ai jamais ??t?? tromp?? ", "J???ai d??j?? / je n???ai jamais pris de drogue", "Raconte nous la derni??re fois que tu as p??cho quelqu???un (contexte)", "Qu???elle ??tait ta premi??re impression quand tu as vu les autres joueurs pour la premi??re fois ", "Fais 20 squat (d??fi)", "Raconte t???as pire honte", "Qui est la/le plus f??tard ?", "La pire excuse pour mettre un r??teau ou quitter quelqu???un ?", "Fais un arbre droit (d??fi)", "As tu d??j?? menti ?? un jeu d???alcool", "Quel est le nombre max de personne que tu a p??cho en un mois ?"
,"A tu d??j?? regretter quelques choses que tu a fais en ??tant bourr??e ? Si oui quoi?", "A tu d??j?? fait l???amour dans un lieu public? Si oui le quel? ",
"    Quelle est la personne que tu aimes le plus dans ta famille ?", "Tes parents t???ont-ils d??j?? surpris au lit avec une fille ?", "Qu???est-ce qui est r??dhibitoire chez une fille ou un gar??on pour toi ?",
"As-tu d??j?? re??u des messages coquins ?", "Quel est le d??faut que tu d??testes le plus chez une personne ?", "A tu d??j?? espionner un ou une ex sur les r??seaux sociaux ",
"As-tu d??j?? menti ?? un entretien d???embauche ou sur ton CV ?", "As tu d??j?? couch?? avec un ou une coll??gue de travail ?", " Quelle est la plus grosse gaffe que tu aies faite ?",
"Quelle est la plus grosse honte de ta vie ?", "Quel est ton plus grand remords ?","T???es-tu d??j?? r??veill?? sans te souvenir de ta soir??e ?",
" Quel est le pire surnom que l???on t???ait donn?? ?", "Je ne me suis jamais fait virer d???un bar ou d???une discoth??que.", "Je n???ai jamais menti ?? mes parents sur l???endroit o?? j?????tais.",
" Je ne me suis jamais fait arr??ter.", " Je n???ai jamais fait semblant de rire ?? une blague que je n???avais pas comprise.", " Je n???ai jamais flirt?? avec quelqu???un pour gagner un pari",
" Je n???ai jamais menti pendant un RDV galant afin d???y mettre un terme au plus vite.", "  Je n???ai jamais embrass?? d???inconnu ", " Je n???ai jamais envoy?? de nude "," Je n???ai jamais vomi ?? cause de l???alcool ",
" Je n???ai jamais fait de bain de minuit ", " Je n???ai jamais embrass??e plus d???une personne en 24h ", "Je n???ai jamais fouill?? dans les affaires de mon ou ma partenaire ", 
"Je n???ai jamais dormi dehors pendant toute une nuit ", " Je n???ai jamais ??t?? l???alibi d???un ami menteur", "Je n???ai jamais appeller mon ex en ??tat d???ebriete ",
"Je n???ai jamais convaincu un ami de larguer son partenaire ", "Je n???ai jamais appeller mon partenaire par le mauvais pr??nom ", "Je n???ai jamais fait l???amour dans une voiture",
"A quel ??ge a tu perdu ta virginit?? ? ", "Quel a ??t?? ton pire rendez vous ?", "Qui est le/ la plus probable d???avoir une aventure avec une personne plus ??g??e ? ",
"Qui es le/la plus probable de renverser quelqu???un en voiture ? ", "Qui es le/la plus probable de recoucher avec un/une ex ? ", "T'as d??j?? kiff?? le mec/meuf de ton fr??re ou de ta s??ur ?",
"Quel est l'endroit le plus bizarre ou tu l'as fait ? ","Est-ce que tu te tatouerais le nom de ton/ta partenaire ?", "Si tu ne pouvais manger qu???un seul aliment pour le reste de ta vie, lequel choisirais-tu ?",
"D???apr??s toi, quelle est la couleur qui repr??sente le plus la joie ?","S???il te restait deux heures ?? vivre sur terre, que ferais-tu ?", "Si tu devais faire tes valises et d??m??nager dans un pays ??tranger demain, o?? d??ciderais-tu d???aller ?",
"Quelle est la chanson dont tu connais toutes les paroles ?", "Quel est le dernier mensonge que tu as dit ?", "Est-ce que tu envisagerais un jour d?????tre dans une relation ?? distance ?",
"Si tu avais un clone, que lui demanderais-tu de faire ?", "Quand tu ??tais plus jeune, que voulais-tu faire quand tu serais grand ?", "nomme et raconte ton meilleur coup au lit",
"combien aimerais-tu avois d'enfant", "Connais-tu certains secrets de famille ?", "Quelle est la plus grosse vacherie que t???ai faite un membre de ta famille ?",
"D??cris-toi en tant que futur papa/maman", "As-tu d??j?? fait l???amour dans le lit de tes parents ?", "Comment r??agirais-tu si ton enfant se droguait ?",
"Si ta copine/copain te trompe, tu pr??f??res qu'iel te l???avoue ?", "Qu???est-ce qui est r??dhibitoire chez une fille/un gars pour toi ?", "Pourrais-tu aider un proche ?? cacher un cadavre sans poser de question ? Si oui, qui ?",
"Quel est le truc que tu faisais ado dont tu as honte aujourd'hui ?", " Si tu pouvais voyager dans le temps pour assister ?? UN ??v??nement pass??, ce serait quoi ?",
"As-tu plus peur du vide / de la hauteur ou des endroits profonds / sous la terre ?", "Si tu ne pouvais plus regarder qu'un seul film, ce serait lequel ?",
"Si tu pouvais voir n'importe quel??le artiste ou groupe en concert, mort ou vivant, qui choisirais-tu ?", "De toutes vos connaissances en commun, avec qui aimerais-tu coucher ?",
"Si tu pouvais obtenir de nouvelles connaissances ou comp??tences sans rien faire, que choisirais-tu ?", "As-tu d??j?? couch?? avec quelqu'un pr??sent dans cette pi??ce ?", 
"T'es-tu d??j?? fait trahir par un??e ami??e ? Comment as-tu r??agi ?", "Cite trois trucs que tu n'aimes pas alors que la majorit?? des gens adorent ", 
"Si tu avais le pouvoir de tuer quelqu'un que tu connais ?? distance, est-ce que tu l'utiliserais ?", "Crois-tu aux esprits ? Si oui, en as-tu peur ?", "Quel est l'endroit le plus insolite o?? tu as pratiqu?? le sexe ? Quel autre endroit aimerais-tu tester ?",
"Si tu pouvais parler aux animaux d'une esp??ce seulement, laquelle choisirais-tu ?", "Raconte ta pire gal??re de soir??e, celle dont tu te souviendras toujours ", 
"As-tu une attirance que tu consid??res honteuse pour une personne, c??l??brit?? ou non ?", "Si tu pouvais revenir en arri??re pour changer une d??cision que tu as prise, ce serait quoi ?",
"As-tu d??j?? arr??t?? un rapport sexuel parce que tu t'ennuyais ? ", "As-tu d??j?? ??t?? vir????e de cours ou pris une heure de colle au coll??ge/lyc??e ? Si oui, pourquoi ?",
"Comment r??agirais-tu en cas d'apocalypse zombie ? Tenterais-tu de survivre ou laisserais-tu tomber ?", "Quel est le jeu dont tu ne pourrais jamais te lasser ?", 
"je n'ai jamais voulu ??tre du sexe oppos??", "je n'ai jamais ??t?? battu","je ne suis jamais rest?? eveill?? pour reste r?? parler avec une personne","je n'ai jamais ??t?? toxique","je n'ai jamais ", "je n'ai jamais esp??rer + avec une personne", "etat des lieux", "la musique qui te fzis le + pense a un ex", "D??fi : fais la chaise 2 min / fais la planche 2 min", "La derni??re personne que tu as p??cho (son nom)", "Laisse la personne ?? ta droite d??cid?? du message et de la personne ?? qui tu l???envoie", "Je n???ai jamais pris la pilule du lendemain", "Je n???ai jamais eu le Covid", "Je n???ai jamais vomi"];
