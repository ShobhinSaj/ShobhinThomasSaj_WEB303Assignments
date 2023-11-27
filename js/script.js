function reqAjax() {
    
    $.ajax({
        url: 'data.json',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            $.each(data, function (index, item) {
                
                // fnames.push(item.firstName.trim().toLowerCase()); 
                $('#tableBody').append(
                    '<tr>' +
                    '<td>' + item.firstName + '</td>' +
                    '<td>' + item.lastName + '</td>' +
                    '<td>' + item.gender + '</td>' +
                    '<td>' + item.role + '</td>' +
                    '<td>' + item.dateOfBirth + '</td>' +
                    '</tr>'
                );
                
            });
            //strt here
            var compare = {
                name: function (a, b) {

                    if (a < b) {
                        return -1;
                    } else {
                        return a > b ? 1 : 0;
                    }
                },
                date: function (a, b) {
                    a = new Date(a);
                    b = new Date(b);
                    return a - b;
                }
            }
            $('.tablesort').each(function () {
                
                var $table = $(this);
                var $tbody = $table.find('tbody');
                var $controls = $table.find('th');
                var rows = $tbody.find('tr').toArray();
                var origData = rows.slice();
                
                $controls.on('click', function () {
                    var $header = $(this);
                    var order = $header.data('sort');
                    var column;
                    var chevid;
                    $('span').html('');
                    chevid = '#' + $header.attr('id') + 'chevron';
                    var chevron = $(chevid);
                    if ($header.hasClass('ascending')) {

                        if (compare.hasOwnProperty(order)) {
                            
                            column = $controls.index(this);
                            rows.sort(function (a, b) {
                                a = $(a).find('td').eq(column).text();
                                b = $(b).find('td').eq(column).text();
                                return compare[order](a, b);
                            });
                            $tbody.append(rows.reverse());
                            $header.removeClass('ascending').addClass('descending');
                            chevron.html('&#x25BC;');
                        }

                    }
                    else if ($header.hasClass('descending')) {
                        $tbody.empty();
                        $tbody.append(origData);
                        $header.removeClass('descending');
                        chevron.html('');
                    }
                   
                    else {
                       
                        if (compare.hasOwnProperty(order)) {
                            column = $controls.index(this);
                            rows.sort(function (a, b) {
                                a = $(a).find('td').eq(column).text();
                                b = $(b).find('td').eq(column).text();
                                return compare[order](a, b);
                            });
                            $tbody.append(rows);
                            $header.addClass('ascending');
                            chevron.html('&#x25B2;');
                        }

                    }
                });
            });
             $(function(){                  
                var $search = $('#filter-search');
                function searchTable(){
                    var query=this.value.trim().toLowerCase();
                    // if($search.empty()){
                    //     $('#tableBody tr').each(function(){
                    //         $(this).removeClass("active");
                            
                    //     });
                    // }
                    $('#tableBody tr').each(function () {
                        var row = $(this);
                
                        // Iterate through each cell in the row
                        row.find('td:first').each(function () {
                            var cellText = $(this).text().toLowerCase();
                            if(query===''){
                                console.log("emptyy");
                                $('#tableBody tr').each(function(){$(this).removeClass("active")});
                            }
                            // Check if the cell text contains the query
                            if (cellText.includes(query)) {
                                // If found, show the row
                                row.addClass("active")
                                return false; // Exit the inner loop
                            } else {
                                // If not found, hide the row
                                row.removeClass("active");
                            }
                        
                        });
                    });
                
                }
                if ('oninput' in $search[0]) {
                    // Use input event to call filter()
                    $search.on('input', searchTable);
                    } else { // Otherwise
                    // Use keyup event to call filter()
                    $search.on('keyup', searchTable);
                    }
             });

        }


    });
}
$(document).ready(function () {
    reqAjax();

});
