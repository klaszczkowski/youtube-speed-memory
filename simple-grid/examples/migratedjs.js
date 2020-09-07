
$(function() {
    $.mockjax({
        url: '*',
        response: ExampleData.handleMockjaxResponse
    });

    $('#grid').simple_datagrid({
        order_by: true
    });
});
