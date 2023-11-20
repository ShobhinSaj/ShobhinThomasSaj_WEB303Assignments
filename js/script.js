function reqAjax() {
    $.ajax({
        url: 'data.json',
        type: 'GET',
        dataType: 'json',
        success: function (data) {

            $.each(data, function (index, item) {
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
        }
    });
}
$(document).ready(function () {
    reqAjax();
    var compare = { 
        name: function(a, b) { 
            a = a.replace(/^the /i, ''); 
            b = b.replace(/^the /i, '');
            if (a < b) { 
                return -1;
            }else {
                return a > b ? 1 : 0;
            }
            },
            date:function(a,b){
                a = new Date(a); 
                b = new Date(b);
                return a - b;  
            }
        }
        $('.tablesort').each(function() {
            var $table = $(this);                   
            var $tbody = $table.find('tbody');        
            var $controls = $table.find('th');        
            var rows = $tbody.find('tr').toArray();   
          
            $controls.on('click', function() {       
              var $header = $(this);                 
              var order = $header.data('sort');       
              var column;                             
          
            if ($header.is('.ascending') || $header.is('.descending')) {  
                $header.toggleClass('ascending descending'); 
                $tbody.append(rows.reverse());               
              } else {                                       
                $header.addClass('ascending');               
                $header.siblings().removeClass('ascending descending'); 
                if (compare.hasOwnProperty(order)) { 
                  column = $controls.index(this);    
                  rows.sort(function(a, b) {         
                    a = $(a).find('td').eq(column).text();
                    b = $(b).find('td').eq(column).text();
                    return compare[order](a, b);          
                  });
                  $tbody.append(rows);
                }
            }
            });  
        });
});
