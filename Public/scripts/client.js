$(function(){

//ajax to get bios
$.ajax({
    type: 'GET',
    url: '/bios',
    success: function(bios){
      console.log('object of bios', bios);

//append to dom the bios object
  bios.forEach(function(blueBirds){
    var $div = $('<div></div>');
        $div.css('border', 'solid');
        $div.append('<p>'+ blueBirds.name + '</p>');
        $div.append('<p>'+ blueBirds.bio + '</p>');
        $div.append('<img src = "'+ blueBirds.image +'"alt="be glad you can not see this"/>');//add date to list
        $div.append('<button type="click" class="likeButton">Like Me</button>');
        $div.append('<span class="classy"></span>');
        $('#thatHoldsItAll').append($div);

    });
  }
});//end of ajax

//adrians
$(this).on('click', 'button' , function () {
   //console.log('Super fun time alright.');
   //ajax to get likes
  $.ajax({
    type: 'GET',
    url: '/likes/adrian',
    success: function(adrianLikes){
      //update like count
      //append to classy div
        $('.classy').text(adrianLikes);
        //console.log('adrian get worked');
      }
  });//end of ajax
});//end of click function

//jeffs
$(this).on('click', 'button' , function () {
   //console.log('Super fun time alright.');
   //ajax to get likes
  $.ajax({
    type: 'GET',
    url: '/likes/jeff',
    success: function(jeffLikes){
      //update like count
      //append to classy div
        $('.classy').text(jeffLikes);
        //console.log('adrian get worked');
      }
  });//end of ajax
});//end of click function


//allys
$(this).on('click', 'button' , function () {
   //console.log('Super fun time alright.');
   //ajax to get likes
  $.ajax({
    type: 'GET',
    url: '/likes/ally',
    success: function(allyLikes){
      //update like count
      //append to classy div
        $('.classy').text(allyLikes);
        //console.log('adrian get worked');
      }
  });//end of ajax
});//end of click function






});//end of jquery
