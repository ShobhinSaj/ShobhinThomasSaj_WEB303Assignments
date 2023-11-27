function reqAjax() {
    $.ajax({
        url: 'data.json',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            $.each(data, function (index, item) {
                var $fnames=[];
                $fnames.push(item.firstName); 
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
                console.log($fnames);
             });

        }


    });
}
$(document).ready(function () {
    reqAjax();

});
