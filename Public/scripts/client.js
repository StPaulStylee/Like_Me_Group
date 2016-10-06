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
        $div.append('<div class="classy"></div>')
        $('#thatHoldsItAll').append($div);

    });
  }
});//end of ajax


//ajax to get likes
//function adLikes() {
  $.ajax({
    type: 'GET',
    url: '/adrian',
    success: function(likes){
      $(this).on('click', 'button' , function () {
        console.log('Super fun time alright.');
        //update like count
        //append to classy div
        // $('.classy').text()


  });//end of ajax
}

});//end of click function
//}


//ajax to post likes
//trigger on button push





});//end of jquery
