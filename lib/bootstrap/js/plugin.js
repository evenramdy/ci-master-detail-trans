$(function() {

	'use strict';

	var options = {
		ajax : {
			url : 'http://localhost/ci-master-detail-trans/title',
			cache : true,
			dataType  : 'json',
			delay : 250,
			processResults: function (data) {
				$.each(data.items, function(i, o) { data.items[i].text = o.title; });
				
				return {
					results: data.items
				};
			}
		}
	};

	$('#add-address').on('click', addAddress);
	$('.btn-delete-address').on('click', deleteAddress);
	$('.select2').select2(options);

	function addAddress() {
		var html = '' +
		'<tr>' +
            '<td><select class="form-control select2" name="title_id[]" required></select></input></td> ' +
            '<td><input type="text" class="form-control" name="address[]" required></input></td> ' +
            '<td class="text-center">' +
            	'<button type="button" class="btn btn-danger btn-sm btn-delete-address"><i class="fa fa-trash-o"></i></button>' +
            '</td> ' +
        '</tr>';

		$('#table-address tbody').append(html);

		$('.btn-delete-address').on('click', deleteAddress);
		$('.select2').select2(options);
	}

	function deleteAddress() {
		var row = $(this).parents('tr').first();

		if (row.length > 0) $(row[0]).remove();
	}

});