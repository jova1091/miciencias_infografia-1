$(window).scroll(function () {

    /* $('.img').each(function(){
        var target = $(this),windowHeight = $(window).height();
        
        //Si el elemento es visible al realizar scroll
        if (inView(target)) {
            var offset = getViewportOffset(target);
            //Si el elemento aparece por la parte de abajo de la ventana
            if (windowHeight > offset.top) {
                $(target).removeClass('hide').addClass('animate__zoomInDown');
            }
        }
    }); */
});

function inView(element, fullHeightInView) {
    var $element = $(element);
    var $window = $(window);
    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();
    var elemTop = $element.offset().top;
    var elemBottom;

    if (fullHeightInView) {
        elemBottom = elemTop + $element.height();
    } else {
        elemBottom = elemTop;
    }
    
    return ((elemBottom >= docViewTop) &&
        (elemTop <= docViewBottom) &&
        (elemBottom <= docViewBottom) &&
        (elemTop >= docViewTop));
}

function getViewportOffset(element) {
    var $element = $(element),
        $window = $(window);

    var scrollLeft = $window.scrollLeft(),
        scrollTop = $window.scrollTop(),
        offset = $element.offset();

    return {
        left: offset.left - scrollLeft,
        top: offset.top - scrollTop
    };
}