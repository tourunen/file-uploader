var createImageElement = function (imageData) {
    return (
        $('<div>', {class: 'image-thumbnail'}).append(
            $('<a>', {href: 'download/' + imageData._id}).append(
                $('<img>', {class: 'thumbnail-image', src: 'thumbnail/' + imageData._id})
            )
        )
    );
};

// on load
$(function () {
    $('#message').text('starting');

    $.ajax({
        url: '/search/.',
        type: 'GET',
        success: function (data) {
            $('#message').text('search complete, found ' + data.length + ' items');
            for (var i = 0; i < data.length; i++) {
                $('#image_list').append(createImageElement(data[i]));
            }
        },
        failure: function (data) {
            $('#message').text('failure: ' + data);
        }
    });
});
