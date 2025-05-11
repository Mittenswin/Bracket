const liste = $('ul');
$('#input').on('keydown', function(event){
    if(event.key==='Enter'){
        if($('li').length>=8){return}
        let li = $('<li></li>');
        li.text($('#input').val());
        li.addClass('joueur');
        liste.append(li);
        $('#input').val('');
        $('.joueur').attr('title','Supprimer');
        $('.joueur').on('mousedown', function(event){
            event.target.remove();
        });
    }
});
///// 
$('#lancer').on('click', ()=> {
const pElements = document.querySelectorAll('p');
let tabi = $('li');
let tabf = [];
while(tabi.length>0){
    let index=Math.floor(Math.random()*tabi.length);
    tabf.push(tabi.splice(index,1)[0]);
}

for(let i = 0; i < tabf.length; i++){
    pElements[i].textContent = tabf[i].textContent;
}

///
$('#match').css('display', 'inline-flex');
}
)
///
let round = 1;
let tjoueur = $("#ptree>p");
let t2 = $("#pquart>p");
let i = 0;
let j = 0;

$('#match').on('click', function() {
    $('#pop-up').css('display', 'inline-flex');
    updateMatchInfo();

    $('p#c1, p#c2').off('click').on('click', function(event) {
        if (j < t2.length) {
            t2[j].textContent = event.target.textContent;
            j++;
        }
        i += 2;
        if (i < tjoueur.length) {
            updateMatchInfo();
        } 
        else {
            $('#pop-up').css('display', 'none');
            i = 0;
            j = 0;
            round++;
            switch (round) {
                case 2:
                    tjoueur = $("#pquart>p");
                    t2 = $("#pdemi>p");
                    break;
                case 3:
                    tjoueur = $("#pdemi>p");
                    t2 = $("p#winner");
                    break;
                case 4:
                    $('#captureButton').css('display', 'inline-flex')
                    let img = $('<img>');
                    img.addClass('confetis');
                    img.attr({
                        src: "confetis.gif",
                        alt: "confetis"
                    });
                    $('body').append(img);
                    console.log($('p#winner').text());
                    let img2 = $('<img>');
                    img2.addClass('confetis2');
                    img2.attr({
                        src: "giphy.gif",
                        alt: "cr7"
                    });
                    $('body').append(img2);
                    console.log($('p#winner').text());
                    $('img.confetis2').on('click', function(event){
                        location.reload();
                    }
                    )
                    $('img.confetis2').attr('title','Recommencer');
                }       
        }
    });
});

function updateMatchInfo() {
    $('p#c1').text(tjoueur[i].textContent);
    $('p#c2').text(tjoueur[i + 1].textContent);

    $('#vs').on('mousedown', function(event){
        if($('#texte').css('display')=='flex'){
            $('#texte').css('display', 'none')
        }
        else{
        $('#texte').css('display', 'flex');
        }
    });
}
/// ---------------------------------- Partie Bouton de l'image du Bracket

document.getElementById('captureButton').addEventListener('click', () => {
    $('#copyright').css('display', 'flex');
    const captureArea = document.querySelector('#Bracket');
    
    html2canvas(captureArea, {
        backgroundColor: null,
        scale: 2, // Augmente la qualité de l'image
        logging: false, // Désactive les logs
        allowTaint: true, // Permet le chargement d'images cross-origin
        useCORS: true // Utilise CORS pour les images
    }).then(canvas => {
        const link = document.getElementById('downloadLink');
        link.href = canvas.toDataURL('image/png');
        link.download = 'Bracket.png';
        link.style.display = 'block';
        link.textContent = 'Télécharger Bracket';
    }).catch(err => {
        console.error('Erreur de capture:', err);
    });
});
