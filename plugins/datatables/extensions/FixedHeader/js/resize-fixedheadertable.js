$(document).ready( function () {
	//initialize datatable
	var oTable = $('#table').dataTable({
		"dom": '<"top"CLRT>rt<"data-box-footer"ipl><"clear">',
		"language":{
			 "lengthMenu": "Hiển thị _MENU_ ",
			 "info": "Hiển thị trang _PAGE_ trong _PAGES_ trang.",
			 "paginate": {
		        "first":      "Đầu",
		        "last":       "Cuối",
		        "next":       "Sau",
		        "previous":   "Trước"
		    },
		},
	});
	//initialize FixedHeader
	// get header height if fixed
	var offsetTop = 0;
	//if ($('.navbar-static-top').length>0)
	//		offsetTop = $('.navbar-static-top').eq(0).innerHeight();
	var oFH = new FixedHeader( oTable, {offsetTop: offsetTop} );


	//redraw fixedHeaders as necessary
	$(window).resize(function () {
		redrawFixedTable();
	});

	function redrawFixedTable () {
		oFH._fnUpdateClones(true);
		oFH._fnUpdatePositions();
	}

	$( ".sidebar-toggle").click(function() {
		setTimeout( function () {
			redrawFixedTable();
			setTimeout( function () {
				$('body').scroll()
			}, 500);
		}, 500)
	});

});