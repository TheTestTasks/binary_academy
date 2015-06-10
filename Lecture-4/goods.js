$(function() {

    // Add new goods / edit existing goods handler
    $(document).on('keypress', function(e) {        
        var $target = $(e.target);

        var title = $.trim($target.val());
        if (e.keyCode != 13 || title == '') return;

        if ($target.hasClass('edit-goods')) {
            $target.parent().find('.view-goods label').text(title);
            closeEditBox();
        } else if ($target.hasClass('new-goods')) {
            var tpl = $('#goods-item-tpl').html();
            title = $('<div />').text(title).html(); // escape title jQuery way :)
            tpl = tpl.replace(/\{\{title\}\}/g, title);
            $('ul.goods-list').append(tpl);
            $target.val('');
            refreshGoodsMark();
        }        
    }).on('keyup', function(e) {
        if (e.keyCode != 27) return;

        var $target = $(e.target);
        if ($target.hasClass('edit-goods')) {
            $target.val( $target.parent().find('.view-goods label').text() );
            closeEditBox();
        } else if ($target.hasClass('new-goods')) {
            $target.val('');
        }
    });

    // Delete goods handler
    $(document).on('click', '.delete-goods, .delete-all-goods', function() {
        if ($(this).hasClass('delete-all-goods')) {
            $('.mark-goods.mark-single:checked').each(function(){
                $(this).parent().parent().remove();    
            });
        } else {
            $(this).parent().parent().remove();    
        }        
        refreshGoodsMark();
        $('input.new-goods').focus();
    });

    // Show edit goods box (double click handler)
    $(document).on('dblclick', '.view-goods label', function() {
        $(this).parent().hide();
        $(this).parent().parent().find('.edit-goods').show().focus();
    });

    // Mark goods handler
    $(document).on('change', '.mark-goods', function() {
        if ($(this).hasClass('mark-all')) {
            $('.mark-goods.mark-single').each(function(){
                markGoods($(this), $('.mark-all').prop('checked'));
            });            
        } else {
            markGoods($(this), $(this).prop('checked'));            
        }
        refreshGoodsMark();
    });

    // Catch click on any place of page for close edit goods box
    $(document).on('click', function(e) {
        if (!$(e.target).hasClass('edit-goods')) closeEditBox();        
    });

    
    // Helpers
    function closeEditBox() {
        $('.goods-list li .edit-goods').hide();
        $('.goods-list li .view-goods').show();
        $('input.new-goods').focus();
    }

    function markGoods($el, checked) {
        $el.parent().parent().toggleClass('marked');
        $el.prop('checked', checked);
    }

    function refreshGoodsMark() {
        $('.mark-all').prop('checked', $('.goods-list li').length > 0 && ($('.mark-single:checked').length == $('.goods-list li').length));
        $('.delete-all-goods').prop('disabled', $('.mark-goods.mark-single:checked').length == 0);        
    }
});