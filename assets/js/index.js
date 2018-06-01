let active1 = true;
let active2 = true;
let active3 = true;
let active4 = true;
$('#vid1').on('click', ()=>{
  if(active1){
    $('#firstVideoPlay').hide();
      $('#firstVideoText').text('En este video te mostraremos en qué se basa esta información y por qué es tan efectiva.').animate({
        marginLeft:'9px'
      },'fast')
      $('#vid1').css('box-shadow','inset 0px 0px 0px 200px rgba(255,96,59,.8)')
      active1 = false;
  }else{
      $('#firstVideoPlay').show();
  $('#firstVideoPlay').removeClass('bannerHover')
  $('#firstVideoText').text('Inicia un negocio rentable por internet').animate({
    marginLeft:'0px',
    fontSize: '16px',
  },'fast')
  $('#vid1').css('box-shadow','inset 0 0 0 200px rgba(28, 36, 74, .8)')
  active1 = true;
  }
})

$('#vid1s').on('click', ()=>{
  if(active1){
    $('#firstVideoPlays').hide();
      $('#firstVideoTexts').text('En este video te mostraremos en qué se basa esta información y por qué es tan efectiva.').animate({
        marginLeft:'9px'
      },'fast')
      $('#vid1s').css('box-shadow','inset 0px 0px 0px 200px rgba(255,96,59,.8)')
      active1 = false;
  }else{
      $('#firstVideoPlays').show();
  $('#firstVideoPlays').removeClass('bannerHover')
  $('#firstVideoTexts').text('Inicia un negocio rentable por internet').animate({
    marginLeft:'0px',
    fontSize: '16px',
  },'fast')
  $('#vid1s').css('box-shadow','inset 0 0 0 200px rgba(28, 36, 74, .8)')
  active1 = true;
  }
})

$('#vid2').on('click', function(){
  if(active2){
    $('#secondVideoPlay').hide();
    $('#secondVideoText').text('Cuáles son los modelos de negocio que mejor rendimiento pueden darte y cómo puedes desarrollarlos en tu tiempo libre. ').animate({
      marginLeft:'9px'
    },'fast')
    $('#vid2').css('box-shadow','inset 0px 0px 0px 200px rgba(255,96,59,.8)')
    active2 = false;
  }else{
    $('#secondVideoPlay').show();
    $('#secondVideoText').text('Primera parte del seminario').animate({
      marginLeft:'0px',
      fontSize: '16px'
    },'fast')
    $('#vid2').css('box-shadow','inset 0 0 0 200px rgba(28, 36, 74, .8)')
    active2 = true;
  }
})

$('#vid2s').on('click', function(){
  if(active2){
    $('#secondVideoPlays').hide();
    $('#secondVideoTexts').text('Cuáles son los modelos de negocio que mejor rendimiento pueden darte y cómo puedes desarrollarlos en tu tiempo libre. ').animate({
      marginLeft:'9px'
    },'fast')
    $('#vid2s').css('box-shadow','inset 0px 0px 0px 200px rgba(255,96,59,.8)')
    active2 = false;
  }else{
    $('#secondVideoPlays').show();
    $('#secondVideoTexts').text('Primera parte del seminario').animate({
      marginLeft:'0px',
      fontSize: '16px'
    },'fast')
    $('#vid2s').css('box-shadow','inset 0 0 0 200px rgba(28, 36, 74, .8)')
    active2 = true;
  }
})




$('#vid3').on('click', function(){
  if(active3){
    $('#thirdVideoPlay').hide();
    $('#thirdVideoText').text('Vamos a mostrarte los modelos de negocios que son efectivos y cuáles no lo son.').animate({
      marginLeft:'9px'
    },'fast')
    $('#vid3').css('box-shadow','inset 0px 0px 0px 200px rgba(255,96,59,.8)')
    $('#videoTittle3').text('[24 horas después de ver la primera parte se te enviará este video].')
    active3 = false;
  }else{
    $('#thirdVideoPlay').show();
    $('#videoTittle3').text('Video #3')
    $('#thirdVideoText').text('Segunda parte del seminario').animate({
      marginLeft:'0px',
      fontSize: '16px'
    },'fast')
    $('#vid3').css('box-shadow','inset 0 0 0 200px rgba(28, 36, 74, .8)')
    active3 = true;
  }
})

$('#vid3s').on('click', function(){
  if(active3){
    $('#thirdVideoPlays').hide();
    $('#thirdVideoTexts').text('Vamos a mostrarte los modelos de negocios que son efectivos y cuáles no lo son.').animate({
      marginLeft:'9px'
    },'fast')
    $('#vid3s').css('box-shadow','inset 0px 0px 0px 200px rgba(255,96,59,.8)')
    $('#videoTittle3s').text('[24 horas después de ver la primera parte se te enviará este video].')
    active3 = false;
  }else{
    $('#thirdVideoPlays').show();
    $('#videoTittle3s').text('Video #3')
    $('#thirdVideoTexts').text('Segunda parte del seminario').animate({
      marginLeft:'0px',
      fontSize: '16px'
    },'fast')
    $('#vid3s').css('box-shadow','inset 0 0 0 200px rgba(28, 36, 74, .8)')
    active3 = true;
  }
})



$('#vid4').on('click', function(){
  if(active4){
    $('#fourthVideoPlay').hide();
    $('#fourthVideoText').text('Vamos a mostrarte el proyecto que desarrollamos actualmente, las ganancias que puede dar y el potencial de crecimiento que tiene.').animate({
      marginLeft:'9px'
    },'fast')
    $('#videoTittle4').text('[En 24 horas después de ver la segunda parte del seminario se enviara este video.]')
    $('#vid4').css('box-shadow','inset 0px 0px 0px 200px rgba(255,96,59,.8)')
    active4 = false;
  }else{
    $('#fourthVideoPlay').show();
    $('#videoTittle4').text('Video #4')
    $('#vid4').css('box-shadow','inset 0 0 0 200px rgba(28, 36, 74, .8)')

    $('#fourthVideoText').text('Presentación del proyecto.').animate({
      marginLeft:'0px',
      fontSize: '16px'
    },'fast')
    active4 = true;
  }
})

$('#vid4s').on('click', function(){
  if(active4){
    $('#fourthVideoPlays').hide();
    $('#fourthVideoTexts').text('Vamos a mostrarte el proyecto que desarrollamos actualmente, las ganancias que puede dar y el potencial de crecimiento que tiene.').animate({
      marginLeft:'9px'
    },'fast')
    $('#videoTittle4s').text('[24 horas después de ver la segunda parte se enviara este video.]')
    $('#vid4s').css('box-shadow','inset 0px 0px 0px 200px rgba(255,96,59,.8)')
    active4 = false;
  }else{
    $('#fourthVideoPlays').show();
    $('#videoTittle4s').text('Video #4')
    $('#vid4s').css('box-shadow','inset 0 0 0 200px rgba(28, 36, 74, .8)')

    $('#fourthVideoTexts').text('Presentación del proyecto.').animate({
      marginLeft:'0px',
      fontSize: '16px'
    },'fast')
    active4 = true;
  }
})

$('#messengerChat').on('click', ()=>{
  window.location = 'https://m.me/ACADEMY.NOVAERA?ref=Seminario-online'
})
$('#register').on('click', ()=>{
  window.location = 'https://www.academynovaera.com/registro.html'
})
