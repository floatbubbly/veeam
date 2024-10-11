$(document).ready(function(){
    if( navigator.userAgent.match(/iPhone/i)
         || navigator.userAgent.match(/iPad/i)
         || navigator.userAgent.match(/iPod/i)
         ){

        $('a.apple').on('click touchend', function(e) {
            var el = $(this);
            var link = el.attr('href');
            var target = el.attr('target');
            //alert(target);
            switch(target){
                case '_self':
                    window.location = link;
                    break;
                case '_blank':
                    window.open(link);
                    break;
                 };

        });
      };
});