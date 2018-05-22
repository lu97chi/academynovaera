
$('#vid1').hover(function(){
  $('#firstVideoPlay').hide();
  $('#firstVideoPlay').addClass('bannerHover')
  $('#firstVideoText').text('En este video te mostraremos en qué se basa esta información y por qué es tan efectiva.').animate({
    marginLeft:'9px'
  },'fast')
  $('#vid1').css('box-shadow','inset 0px 0px 0px 200px rgba(255,96,59,.8)')

},()=>{
  $('#firstVideoPlay').show();
  $('#firstVideoPlay').removeClass('bannerHover')
  $('#firstVideoText').text('Inicia un negocio rentable por internet').animate({
    marginLeft:'0px',
    fontSize: '16px',
  },'fast')
  $('#vid1').css('box-shadow','inset 0 0 0 200px rgba(28, 36, 74, .8)')

})

$('#vid1s').on('touchstart',()=>{
  $('#firstVideoPlays').hide();
  $('#firstVideoTexts').text('En este video te mostraremos en qué se basa esta información y por qué es tan efectiva.').animate({
    marginLeft:'9px'
  },'fast')
  $('#vid1s').css('box-shadow','inset 0px 0px 0px 200px rgba(255,96,59,.8)')

}).on('touchend',()=>{
  $('#firstVideoPlays').show();
  $('#firstVideoTexts').text('Inicia un negocio rentable por internet').animate({
    marginLeft:'0px',
    fontSize: '16px'
  },'fast')
  $('#vid1s').css('box-shadow','inset 0 0 0 200px rgba(28, 36, 74, .8)')

})

$('#vid2').hover(function(){
  $('#secondVideoPlay').hide();
  $('#secondVideoText').text('Cuáles son los modelos de negocio que mejor rendimiento pueden darte y cómo puedes desarrollarlos en tu tiempo libre. ').animate({
    marginLeft:'9px'
  },'fast')
  $('#vid2').css('box-shadow','inset 0px 0px 0px 200px rgba(255,96,59,.8)')

},()=>{
  $('#secondVideoPlay').show();
  $('#secondVideoText').text('Primera parte del seminario').animate({
    marginLeft:'0px',
    fontSize: '16px'
  },'fast')
  $('#vid2').css('box-shadow','inset 0 0 0 200px rgba(28, 36, 74, .8)')

})

$('#vid2s').on('touchstart',()=>{
  $('#secondVideoPlays').hide();
  $('#secondVideoTexts').text('Cuáles son los modelos de negocio que mejor rendimiento pueden darte y cómo puedes desarrollarlos en tu tiempo libre. ').animate({
    marginLeft:'9px'
  },'fast')
  $('#vid2s').css('box-shadow','inset 0px 0px 0px 200px rgba(255,96,59,.8)')

}).on('touchend',()=>{
  $('#secondVideoPlays').show();
  $('#secondVideoTexts').text('Primera parte del seminario').animate({
    marginLeft:'0px',
    fontSize: '16px'
  },'fast')
  $('#vid2s').css('box-shadow','inset 0 0 0 200px rgba(28, 36, 74, .8)')

})


$('#vid3').hover(function(){
  $('#thirdVideoPlay').hide();
  $('#thirdVideoText').text('Vamos a mostrarte los modelos de negocios que son efectivos y cuáles no lo son.').animate({
    marginLeft:'9px'
  },'fast')
  $('#vid3').css('box-shadow','inset 0px 0px 0px 200px rgba(255,96,59,.8)')
  $('#videoTittle3').text('[24 horas después de ver la primera parte se te enviará este video].')
},()=>{
  $('#thirdVideoPlay').show();
  $('#videoTittle3').text('Video #3')

  $('#thirdVideoText').text('Segunda parte del seminario').animate({
    marginLeft:'0px',
    fontSize: '16px'
  },'fast')
  $('#vid3').css('box-shadow','inset 0 0 0 200px rgba(28, 36, 74, .8)')

})

$('#vid3s').on('touchstart',()=>{
  $('#thirdVideoPlays').hide();
  $('#thirdVideoTexts').text('Vamos a mostrarte los modelos de negocios que son efectivos y cuáles no lo son.').animate({
    marginLeft:'9px',
  },'fast').css('font-size', '14px')
  $('#vid3s').css('box-shadow','inset 0px 0px 0px 200px rgba(255,96,59,.8)')

  $('#videoTittle3s').text('[24 horas después de ver la primera parte se te enviará este video].')
}).on('touchend',()=>{
  $('#thirdVideoPlays').show();
  $('#videoTittle3s').text('Video #3')
  $('#vid3s').css('box-shadow','inset 0 0 0 200px rgba(28, 36, 74, .8)')

  $('#thirdVideoTexts').text('Segunda parte del seminario').animate({
    marginLeft:'0px',
    fontSize: '16px'
  },'fast')
})


$('#vid4').hover(function(){
  $('#fourthVideoPlay').hide();
  $('#fourthVideoText').text('Vamos a mostrarte el proyecto que desarrollamos actualmente, las ganancias que puede dar y el potencial de crecimiento que tiene.').animate({
    marginLeft:'9px'
  },'fast')
  $('#videoTittle4').text('[En 24 horas después de ver la segunda parte del seminario se enviara este video.]')
  $('#vid4').css('box-shadow','inset 0px 0px 0px 200px rgba(255,96,59,.8)')

},()=>{
  $('#fourthVideoPlay').show();
  $('#videoTittle4').text('Video #4')
  $('#vid4').css('box-shadow','inset 0 0 0 200px rgba(28, 36, 74, .8)')

  $('#fourthVideoText').text('Presentación del proyecto.').animate({
    marginLeft:'0px',
    fontSize: '16px'
  },'fast')
})

$('#vid4s').on('touchstart',()=>{
  $('#fourthVideoPlays').hide();
  $('#fourthVideoTexts').text('Vamos a mostrarte el proyecto que desarrollamos actualmente, las ganancias que puede dar y el potencial de crecimiento que tiene.').animate({
    marginLeft:'9px'
  },'fast').css('font-size', '14px')
  $('#vid4s').css('box-shadow','inset 0px 0px 0px 200px rgba(255,96,59,.8)')

  $('#videoTittle4s').text('[En 24 horas después de ver la segunda parte del seminario se enviara este video.]')

}).on('touchend',()=>{
  $('#fourthVideoPlays').show();
  $('#videoTittle4s').text('Video #4')
  $('#vid4s').css('box-shadow','inset 0 0 0 200px rgba(28, 36, 74, .8)')

  $('#fourthVideoTexts').text('Presentación del proyecto.').animate({
    marginLeft:'0px',
    fontSize: '16px'
  },'fast')
})
