$(function() {

  $.ajax({
     url: 'https://www.codeschool.com/users/am2studio.json',
     dataType: 'jsonp',
     success: function(response) {
          var badges = response.courses.completed;
          console.log('badges');
          addCourses(badges);
        }
   });

   function addCourses(courses) {

     var $badges_container = $("#badges");
       courses.forEach(function(course) {
         var $course = $('<div />', {
           'class': 'course'
         }).appendTo($badges_container);

         $('<h3 />', {
           text: course.title
         }).appendTo($course);

         $('<img />',{
           src: course.badge
         }).appendTo($course)

         $('<a />', {
           'class': 'btn btn-primary',
           target: '_blank',
           href: course.url,
           text: 'See Course'
         }).appendTo($course)

    
       });
   }

});
