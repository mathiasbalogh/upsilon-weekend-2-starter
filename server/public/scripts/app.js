var i = 0;
var next = i+1;
var prev = i-1;
var time = 9;
$(document).ready(function(){

    $.ajax({
      type: "GET",
      url: "/data",
      success: function(response){
        var person = response.people[i];
        $('#name').text(person.name);
        $('#githubUserName').text(person.githubUserName);
        $('#shoutout').text(person.shoutout);
        $('#'+i).addClass('highlighted')

        $('#next').on('click', function(){
          $('#person').fadeOut('slow');
          if(i <16 ){
            $('.highlighted').removeClass('highlighted');
            i = next;
            var timeout = setTimeout(function(){
              var person = response.people[i];
              $('#name').text(person.name);
              $('#githubUserName').text(person.githubUserName);
              $('#shoutout').text(person.shoutout);
            },500);
            console.log(i);
            next = i+1;
            prev = i-1;
            $('#person').fadeIn('slow');
            $(this).closest('body').find('#'+i).addClass('highlighted');
            time = 9;
          } else {
            $('.highlighted').removeClass('highlighted');
            i = 0;
            next = 1;
            prev = 16;
            var timeout = setTimeout(function(){
              var person = response.people[i];
              $('#name').text(person.name);
              $('#githubUserName').text(person.githubUserName);
              $('#shoutout').text(person.shoutout);
            },500);
            $('#person').fadeIn('slow');
            $(this).closest('body').find('#'+i).addClass('highlighted');
            time= 9;
          }
       });
        $('#prev').on('click', function(){
          $('#person').fadeOut('slow');
          if(i > 0){
            $('.highlighted').removeClass('highlighted');
            i = prev;
            var timeout = setTimeout(function(){
              var person = response.people[i];
              $('#name').text(person.name);
              $('#githubUserName').text(person.githubUserName);
              $('#shoutout').text(person.shoutout);
            },500);
            $('#person').fadeIn('slow');
            console.log(i);
           next = i+1;
           prev = i-1;
           $(this).closest('body').find('#'+i).addClass('highlighted');
           time = 9;
         } else {
           $('.highlighted').removeClass('highlighted');
           i = 16;
           next = 0;
           prev = 15;
           var timeout = setTimeout(function(){
             var person = response.people[i];
             $('#name').text(person.name);
             $('#githubUserName').text(person.githubUserName);
             $('#shoutout').text(person.shoutout);
           },500);
           $('#person').fadeIn('slow');
           $(this).closest('body').find('#'+i).addClass('highlighted');
           time = 9;
         }
       });
       $('.carousel').on('click', function(){
         $('#person').fadeOut('slow');
         $('.highlighted').removeClass('highlighted');
         i = Number($(this).attr('id'));
         next = i+1;
         prev = i-1;
         var timeout = setTimeout(function(){
           var person = response.people[i];
           $('#name').text(person.name);
           $('#githubUserName').text(person.githubUserName);
           $('#shoutout').text(person.shoutout);
         },500);
         $('#person').fadeIn('slow');
         $(this).addClass('highlighted');
         time = 9;
       });
       var standardInterval = setInterval(function(){
         time--;
         if(time == 0){
         $('#person').fadeOut('slow');
         if(i <16 ){
           $('.highlighted').removeClass('highlighted');
           i = next;
           var timeout = setTimeout(function(){
             var person = response.people[i];
             $('#name').text(person.name);
             $('#githubUserName').text(person.githubUserName);
             $('#shoutout').text(person.shoutout);
           },500);
           console.log(i);
           next = i+1;
           prev = i-1;
           $('#person').fadeIn('slow');
           $('#person').closest('body').find('#'+i).addClass('highlighted');
           time = 9;
         } else {
           $('.highlighted').removeClass('highlighted');
           i = 0;
           next = 1;
           prev = 16;
           var timeout = setTimeout(function(){
             var person = response.people[i];
             $('#name').text(person.name);
             $('#githubUserName').text(person.githubUserName);
             $('#shoutout').text(person.shoutout);
           },500);
           $('#person').fadeIn('slow');
           $('#person').closest('body').find('#'+i).addClass('highlighted');
           time = 9;
         }
       }
       }, 1000);
    }
  });
});
