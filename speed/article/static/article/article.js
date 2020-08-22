$( document ).ready(function() {
    function show_result(comments){
        var $comments_div = $("#comment");
        $comments_div.html(comments);
    }

    function request_comments(){
        $.ajax({
          method: "GET",
          url: "/comment/",
        })
          .done(function( comments ) {
            show_result(comments);
          });
    }

    function add_handlers(){
        $("#comment-btn").click(function(){
            request_comments();
        });
    }
    add_handlers();
});