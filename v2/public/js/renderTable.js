// Push Data to table:
function renderTable(tableData) {
    $('#input-filters').removeClass('hide');

    const table = document.getElementById("tableBody");
    const tableHead = document.getElementById("headerRow");

    tableData.forEach((data, i) => {
        if (i === 0) {
            for (const titleItem of data) {
                tableHead.insertCell().append(titleItem);
            }
        } else {
            const row = table.insertRow();
            for (const dataItem of data) {
                row.insertCell().append(dataItem);
            }
        }
    });

// Assign classes to arrays:
    const dimension = ['date range', 'date interval', 'location: most recent', 'manager: most recent', 'position: most recent', 'supervisor: most recent', 'supervisor: historical', 'agent name', 'agent email'];
    const formattedmetric = ['7 day call fcr', 'agent ease', 'replacement rate', 'aux %', 'aht', 'deltacast %', 'replacements and oneoffs per unique tickets updated by updater', 
                            'metric 1', 'metric 2', 'metric 3', 'metric 4', 'metric 5', 'metric 6'];
    let extrametrics = [];
    let classNames = [];
    let idNames = [];
    let fieldType = [];
    let hyph;
    let cleaned;

    let headerCell$ = $('thead td'); // console.log(headerCell$);
    // let bodyCell$ = $('tbody td'); // console.log(bodyCell$);
    // let bodyRow$ = $('tbody tr'); // console.log(bodyRow$);
    
    // let input$ = $('input'); // console.log(input$);


    $(headerCell$).each(function (i) {
        fieldType = 'indextitle';
        const headers = $('thead td');
        const celldata = this.innerHTML;

        $(headers[i]).attr("row", "0");
        $(headers[i]).attr("name", celldata);
        $(headers[i]).attr("id", "index"+i);
        $(headers[i]).addClass('indextitle');

        if (dimension.includes(celldata)) {
            fieldType = 'dimension';

        } else if (formattedmetric.includes(celldata)) {
            fieldType = 'formatted';

        } else {
            $(this).addClass('extrametric')
            fieldType = 'extrametric'
            extrametrics.push(celldata);
        };
        $(headers[i]).attr("fieldtype", fieldType);


        // Assign metric title, data-type, and column headers and cells:
        cleaned = $(this).text()
            .replace(/[%:-]/g, '')
            .trim()
            .replace(/ /g, '');
        idNames.push(cleaned[i]);
        $(headers[i]).attr("cleaned-name", cleaned);

        hyph = $(this).text()
            .replace(/[%:]/g, '')
            .trim()
            .replace(/ /g, '-');
        $(headers[i]).attr("hyph", hyph);

        classNames.push(hyph[i]);
        $(this).addClass(hyph +
            ' ' + fieldType +
            ' ' + i);

        // ENABLE NEXT LINE IN ORDER TO ALSO TAG ROWS:
        startCol = i + 1;
        $('tbody td:nth-child(' + startCol + ')').addClass(hyph +
            ' ' +
            fieldType +
            ' ' + i);

    });
    // console.log("These metrics do not have conditional formatting rules: " + extrametrics);
    // console.log(extrametrics);

    console.log('metric-1'.condition);
    console.log(settings);
    console.log(conditions);
    let status;
    let cellNum;
    let exceptional
    let effective;
    let achieves;
    let NI;


    $('.aht').each(function () {
        const cellText = this.innerHTML;
        exceptional = 600;
        effective = 720;
        achieves = 840;
        NI = 1050;
        const noComma = cellText.replace(/\,/g, '');
        cellNum = parseFloat(noComma);

        if ($(this).hasClass('indextitle')) {
            status = 'ignore';
        } else if (cellNum <= exceptional) {
            status = 'exceptional';
        } else if (cellNum > exceptional && cellNum <= effective) {
            status = 'effective';
        } else if (cellNum > effective && cellNum <= achieves) {
            status = 'achieves';
        } else if (cellNum > achieves && cellNum <= NI) {
            status = 'NI';
        } else if (cellNum > NI) {
            status = 'unacceptable';
        };

        $(!'.indextitle').addClass(status);
        $(this).addClass(status);
    });

    $('.metric-1').each(function () {
        const cellText = this.innerHTML;
        exceptional = 82.00;
        effective = 80.00;
        achieves = 78.00;
        NI = 76.00;
        const noComma = cellText.replace(/\,/g, '');
        cellNum = parseFloat(noComma);

        if ($(this).hasClass('indextitle')) {
            status = 'ignore';
        } else if (cellNum <= exceptional) {
            status = 'exceptional';
        } else if (cellNum > exceptional && cellNum <= effective) {
            status = 'effective';
        } else if (cellNum > effective && cellNum <= achieves) {
            status = 'achieves';
        } else if (cellNum > achieves && cellNum <= NI) {
            status = 'NI';
        } else if (cellNum > NI) {
            status = 'unacceptable';
        };

        $(!'.indextitle').addClass(status);
        $(this).addClass(status);
    });

    $('.metric-2').each(function () {
        const cellText = this.innerHTML;
        exceptional = 9.9;
        effective = 9.7;
        achieves = 9.5;
        NI = 9.2;
        cellNum = parseFloat(cellText);

        if ($(this).hasClass('indextitle')) {
            status = 'ignore';
        } else if (cellNum >= exceptional) {
            status = 'exceptional';
        } else if (cellNum < exceptional && cellNum >= effective) {
            status = 'effective';
        } else if (cellNum < effective && cellNum >= achieves) {
            status = 'achieves';
        } else if (cellNum < achieves && cellNum >= NI) {
            status = 'NI';
        } else if (cellNum < NI) {
            status = 'unacceptable';
        };

        $(!'.indextitle').addClass(status);
        $(this).addClass(status);
    });

    $('.metric-3').each(function () {
        const cellText = this.innerHTML;
        exceptional = .06;
        effective = .07;
        achieves = .08;
        NI = .09;
        cellNum = parseFloat(cellText);

        if ($(this).hasClass('indextitle')) {
            status = 'ignore';
        } else if (cellNum >= exceptional) {
            status = 'exceptional';
        }
        if (cellNum < exceptional && cellNum >= effective) {
            status = 'effective';
        }
        if (cellNum < effective && cellNum >= achieves) {
            status = 'achieves';
        }
        if (cellNum < achieves && cellNum >= NI) {
            status = 'NI';
        }
        if (cellNum < NI) {
            status = 'unacceptable';
        };

        $(!'.indextitle').addClass(status);
        $(this).addClass(status);
    });

    $('.metric-3').each(function () {
        const cellText = this.innerHTML;
        const cleanedText = cellText.replace(/[%]/g, '');
        cellNum = parseFloat(cleanedText);
        // const cleanNum = cellText.replace(/\D/g, '');
        exceptional = (cellNum < 26);
        unacceptable = (cellNum > 32);
        NI = (cellNum > 30 && !unacceptable);
        achieves = (cellNum > 28 && !NI);
        effective = (cellNum >= 26 && !achieves);
        // if ((unacceptable) || (NI) || || ||
        // console.log(condition = true);
        //  unacc.push(condition);

        if ($(this).hasClass('indextitle')) {
            status = 'ignore';
        } else if (exceptional) {
            status = 'exceptional';
        } else if (effective) {
            status = 'effective';
        } else if (achieves) {
            status = 'achieves';
        } else if (NI) {
            status = 'NI';
        } else if (unacceptable) {
            status = 'unacceptable';
        };

    });

    // Call sortTable function to sort column on header click:
    const cells = $('thead').find('td');
    cells.each(function (i) {
        cells[i].onclick = (function (n) {
            return function () {
                sortTable(n);
            };
        })(i);
    });

    renderDownloadButton();
    renderFilters();
};

// ERROR CHECK FEATURE: logs file loaded to console
logFile();