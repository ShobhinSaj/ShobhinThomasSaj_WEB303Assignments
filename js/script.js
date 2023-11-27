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
            $(function () {
                var $search = $('#filter-search');
                function searchTable() {
                    var query = this.value.trim().toLowerCase();
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
                            if (query === '') {
                                console.log("emptyy");
                                row.removeClass("active");
                                row.addClass("inactive");
                            }
                            // Check if the cell text contains the query
                            else if (cellText.includes(query)) {
                                
                                row.removeClass("active inactive");
                                row.addClass("active");
                                return false; // Exit the inner loop
                            } else {
                                
                                row.removeClass("active inactive");
                                row.addClass("inactive");
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

            $(function () {
                function resetAll() {
                    $('#tableBody tr').each(function () {
                        var row = $(this);
                        row.show();
                    });
                }
                function filterTable(flag) {
                    $('#tableBody tr').each(function () {
                        var row = $(this);
                        row.show();
                        if (flag === 0) {
                            row.find('td:nth-child(2)').each(function () {
                                var cellText = $(this).text().toLowerCase();
                                if (!(cellText.charAt(0) >= 'a' && cellText.charAt(0) <= 'm')) {
                                    row.removeClass("active inactive");
                                    row.addClass("inactive");
                                    row.hide();
                                }
                            });
                        }
                        else if (flag == 1) {
                            row.find('td:nth-child(2)').each(function () {
                                var cellText = $(this).text().toLowerCase();
                                if (!(cellText.charAt(0) >= 'n' && cellText.charAt(0) <= 'z')) {
                                    row.removeClass("active inactive");
                                    row.addClass("inactive");
                                    row.hide();
                                }
                            });
                        }
                        else {
                            row.show();
                        }
                    });
                }
                $('.ambtn').on('click', function () { filterTable(0); });
                $('.nzbtn').on('click', function () { filterTable(1); });
                $('.rstbtn').on('click',resetAll);
            });
        }


    });
}
$(document).ready(function () {
    reqAjax();


});
