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
round=1;
$('#match').on('click',function(){
    $('#pop-up').css('display', 'inline-flex');
////
    let tjoueur = $("#ptree>p");
    let t2 = $("#pquart>p");
    let premierClic = true;
    let i=0;
    let j=0;

    $('p#c1').text(tjoueur[i].textContent);
    $('p#c2').text(tjoueur[i+1].textContent);

    $('p#c1, p#c2').on('click',function(event){
        if (premierClic) {
            premierClic = false;
        }
        else if(i<tjoueur.length && !premierClic)
        {
            if (j<t2.length)
            {
                t2[j].textContent = event.target.textContent;
                j+=1;
            }
            i+=2;
            if(i<tjoueur.length) {
                $('p#c1').text(tjoueur[i].textContent);
                $('p#c2').text(tjoueur[i+1].textContent);
            }
            else {
                $('#pop-up').css('display', 'none');
                i=0;
                premierClic = true;
                round+=1;
            }
        }
    });
///
});
///
