var renderDownloadButton = table => {
    clearDownloadButton();
    const downloadButton = $('<button>')
        .addClass('download-button')
        .appendTo('.navbar')
        .attr('id', 'downloadButton')
        // .attr('onclick', $('#theTable').table2csv())
        .text('Download CSV');

    $('.download-button').on("click", callTable = () => {
        $('#theTable').table2csv()
    });
};

var clearDownloadButton = table => {
    $('#downloads').empty();
};

// ERROR CHECK FEATURE: logs file loaded to console
logFile();