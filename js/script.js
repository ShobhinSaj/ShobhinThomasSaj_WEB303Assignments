$(function () {
    $('#photo-viewer').customPhotoViewer().show().on('click', '.photo-box', function (e) {
        var $content = $(this).clone().find('img').css({
            marginLeft: 0,
            marginTop: 0,
            width: '100%',
            height: 'auto'
        });
       e.preventDefault();
       $('#modal-content').html($content);
        $('#image-modal').css('display', 'flex');
        $('#image-modal').click(function (e) {
        if (e.target.id === 'image-modal') {
            $(this).css('display', 'none');
        }
    });

    
    $('#close-modal').click(function () {
        $('#image-modal').css('display', 'none');
    });
    });
    
});
