document.addEventListener('DOMContentLoaded', function(tab) {
    var node = $("#txtName");
    console.log(typeof node);


    var grid, dialog;
    function Edit(e) {
        $('#ID').val(e.data.record.ID);
        $('#Name').val(e.data.record.Name);
        $('#PlaceOfBirth').val(e.data.record.PlaceOfBirth);
        dialog.open('Edit Player');
    }
    function Delete(e) {
        if (confirm('Are you sure?')) {
            grid.removeRow(e.data.id - 1);
        }
    }
    function Save() {
        if ($('#ID').val()) {
            var id = parseInt($('#ID').val());
            grid.updateRow(id, { 'ID': id, 'Name': $('#Name').val(), 'PlaceOfBirth': $('#PlaceOfBirth').val() });
        } else {
            grid.addRow({ 'ID': grid.count(true) + 1, 'Name': $('#Name').val(), 'PlaceOfBirth': $('#PlaceOfBirth').val() });
        }
        dialog.close();
    }
    $(document).ready(function () {
        grid = $('#grid').grid({
            primaryKey: 'ID',
            pager: { limit: 5 }
        });
        dialog = $('#dialog').dialog();
        $('#btnAdd').on('click', function () {
            $('#ID').val('');
            $('#Name').val('');
            $('#PlaceOfBirth').val('');
            dialog.open('Add Player');
        });
        $('#btnSave').on('click', Save);
        $('#btnCancel').on('click', function () {
            dialog.close();
        });
        $('#btnSearch').on('click', function () {
            grid.reload({ Name: $('#txtName').val(), PlaceOfBirth: $('#txtPlaceOfBirth').val() });
        });
        $('#btnClear').on('click', function () {
            $('#srcName').val('');
            $('#srcPlaceOfBirth').val('');
            grid.reload({ Name: '', PlaceOfBirth: '' });
        });
    });


    // var checkPageButton = document.getElementById('clickIt');

    // checkPageButton.addEventListener('click', function() {
    //     chrome.tabs.getSelected(null, function(tab) {
    //         alert("alert");
    //     })
    // })
});