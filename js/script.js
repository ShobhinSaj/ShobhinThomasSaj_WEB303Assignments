function reqJSON() {
    $.getJSON('team.json', function(data) {
    var teamData = '';

        // Loop through the array in the JSON data
        $.each(data, function(index, member) {
            
            var name = '<h2>' + member.name + '</h2>';
            var position = '<h5>' + member.position + '</h5>';
            var bio = '<p>' + member.bio + '</p><hr><br>';
            var memberHtml = name + position + bio;
            teamData += memberHtml;
        });

        // Appending team data into the #team div in html
        $('#team').html(teamData);
    });
}

function reqAjax() {
    // Display "Loading..." message before sending the AJAX request
    $('#team').text('Loading...');

    $.ajax({
        type: 'GET',url: 'team.json',dataType: 'json',success: function(data) {
            setTimeout(function() {
                var teamData = '';
                // Loop through the array in the JSON data
                $.each(data, function(index, member) {
                    var name = '<h2>' + member.name + '</h2>';
                    var position = '<h5>' + member.position + '</h5>';
                    var bio = '<p>' + member.bio + '</p><hr><br>';
                    var memberHtml = name + position + bio;
                    teamData += memberHtml;
                });

                // Appending team data into the #team div
                $('#team').html(teamData);
            }, 3000); // 3-second delay before content is displayed
        },
        error: function() {
            // invoked if request encoounters error
            $('#team').text('Error: Content could not be retrieved.');
        }
    });
}

$(document).ready(function() {
    
    //reqJSON();
    reqAjax();
})