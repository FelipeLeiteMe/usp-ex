$( document ).ready( function ()
{
    $( '.panel' ).click( function ( e )
    {
        e.preventDefault();

        $( '.panel-collapse' ).collapse( 'hide' );
        var target = $( this ).find( 'a' ).attr( 'href' );
        $( target ).collapse( 'toggle' );

        var hasClass = $( this ).find( '.panel-arrow' ).hasClass( 'rotate-180' );
        $( '.panel-arrow' ).removeClass( 'rotate-180' );
        if ( !hasClass )
        {
            $( this ).find( '.panel-arrow' ).addClass( 'rotate-180' );
        }
    } );
} );

///////

$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
            $(".collapse").removeClass("in");
        });
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
    // $(window).scroll(function () {
        
    //     var position = $(window).scrollTop();
    //     // console.log(position);
    //     if (position > 450) {
    //         // console.log("aqui");
    //         $(".navbar-brand").removeClass("hidden-lg");
    //     } else {
    //         $(".navbar-brand").addClass("hidden-lg");
    //     }
    //     });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#menu-center a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-center ul li a').removeClass("active");
            currLink.addClass("active");
            
        }
        else{
            currLink.removeClass("active");
            console.log("Não");
        }
    });

}