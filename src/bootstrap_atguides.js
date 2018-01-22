jQuery(document).ready(function() {
	if (jQuery('.screensteps-content-wrapper.lesson').length)
    {
		var sidebar = jQuery('.screensteps-sidebar');
		sidebar.prepend(jQuery('#screensteps-rss'));
		sidebar.prepend(jQuery('#recent-updates'));
		sidebar.prepend(jQuery('#sidebar-chapters'));
        sidebar.prepend(jQuery('#lesson-sidebar-info'));
	};
	if (jQuery('.screensteps-content-wrapper.site-index, .screensteps-content-wrapper.manual-toc, .screensteps-content-wrapper.chapter, .screensteps-content-wrapper.site-search').length)
    {
		var sidebar = jQuery('.screensteps-sidebar');
		sidebar.prepend(jQuery('#screensteps-rss'));
		sidebar.prepend(jQuery('#recent-updates'));
		sidebar.prepend(jQuery('#manual-pdf'));
		sidebar.prepend(jQuery('#sidebar-chapters'));
	};
    if (jQuery('.screensteps-content-wrapper.site-index').length)
    {
		$('#space-tags-list').remove();
	};

    $( ".screensteps-site-logo" ).remove();
});
