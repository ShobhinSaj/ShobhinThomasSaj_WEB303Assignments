$(document).ready(function(){
    $.ajax({
        url: 'data.json',
        type:'GET',
        dataType: 'json',
        success: function(data) {
            
            $.each(data, function(index, item) {
                $('#charactersTableBody').append(
                    '<tr>' +
                        '<td>' + item.firstName + '</td>' +
                        '<td>' + item.lastName + '</td>' +
                        '<td>' + item.gender + '</td>' +
                        '<td>' + item.role + '</td>' +
                        '<td>' + item.dateOfBirth + '</td>' +
                       
                    '</tr>'
                );
            });
        }
});
});