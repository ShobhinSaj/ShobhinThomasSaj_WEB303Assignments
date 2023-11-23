(function ($) {
    $.fn.customPhotoViewer = function () {
        var request;
        var $current;
        var cache = {};
        var $frame = $('.photo-box');
        var $thumbs = this.find('.thumbnail-anchor'); // Adjusted to find within the current context

        function crossfade($img) {
            if ($current) {
                $current.stop().fadeOut('slow');
            }

            $img.css({
                marginLeft: -$img.width() / 2,
                marginTop: -$img.height() / 2
            });

            $img.stop().fadeTo('slow', 1);
            $current = $img;
        }

        $thumbs.on('click', function (e) {
            var $img;
            var src = this.href;

            request = src;

            e.preventDefault();
            $thumbs.removeClass('active');
            $image = $thumbs.find('img');
            $image.removeClass('active');
            $(this).addClass('active');
            $(this).find('img').addClass('active');
            $frame.attr('href', src);

            if (cache.hasOwnProperty(src)) {
                if (cache[src].isLoading === false) {
                    crossfade(cache[src].$img);
                }
            } else {
                $img = $('<img/>');

                cache[src] = {
                    $img: $img,
                    isLoading: true
                };

                $img.on('load', function () {
                    $img.hide();
                    $frame.removeClass('is-loading').append($img);
                    cache[src].isLoading = false;

                    if (request === src) {
                        crossfade($(this));
                    }
                });

                $frame.addClass('is-loading');
                $img.attr({
                    'src': src,
                    'alt': this.title || ''
                });
            }
        });

        
        $thumbs.eq(0).click();

        return this;
    };
})(jQuery);
