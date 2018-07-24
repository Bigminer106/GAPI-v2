// Conditional formatting class setting:
formattedMetric = $('.formatted');
    formattedMetric$ = $(formattedMetric);
    // console.log(formattedMetric);
    // console.log(formattedMetric$);
const KPI = [];
var KPIs = [];
settings;
// console.log(settings);
let setting$ = $(settings);
// console.log(setting$);
setup;
// console.log(setup);
let setup$ = $(setup);
// console.log(setup$);

function formatAssignment() {
    for (i = 0; i < formattedMetric.length; i++) {
        var class1 = $(formattedMetric).attr('hyph');
        console.log(class1);
        const cellText = this.innerHTML;

//         KPI;
//         // $(td)

//         $('tbody td').each(function (i) {
//             if (($('tbody td').hasClass(classNames[i])) &&
//                 (classNames.includes(className))) {
//                 KPI = className.parent()
//                 console.log(KPI);
//                 console.log(className.parent());
//                 console.log("KPI: " + KPI);
//             } else {}
//         });
    }
};
formatAssignment ();


function conditionAssignment() {
    for (i = 0; i < setup.length; i++) {
        let KPIs = setup[i];
        // console.log(KPIs);
        KPIMetric = KPIs.metric;
        KPICondition = KPIs.condition;
        KPIOperator = KPIs.operator;
        KPITarget = KPIs.target;
        KPIValueParams = KPIs.valueParams;
        KPITitle = KPIs.className;
        // console.log(KPIs);
        console.log(KPIMetric);
        console.log(KPICondition);
        console.log(KPIOperator);
        console.log(KPITarget);
        console.log(KPIValueParams);
        console.log(KPITitle);

        // console.log(hyph.includes(KPITitle));
        // console.log(formattedMetric.hyph);
    }
}; // LOOPING PROPERLY

conditionAssignment();

// Sets condition logic:
const cellText = this.innerHTML;

function testingCondition() {
    // let formattedCell = new Array($('.formatted'))
    // console.log('formattedCell$: ' + formattedCell$)
    // console.log(formattedCell);
// };
// testingCondition();


$('.metric-2').each(function () {
    const cellText = $(this).text();
    console.log("cellText: " + cellText);
    const noComma = cellText.replace(/\,/g, '');
    cellNum = parseFloat(noComma);
    console.log(cellNum);
if (cellNum + KPIOperator[0] + KPIValueParams[0]) {
    condition = high[0];
    console.log(condition);
} else if (cellText + operator[op1][0] + valueParams[0]) {
    condition = high[1];
} else if (cellText + op1[0] + valueParams[2]) {
    condition = high[2];
} else if (cellText + op1[0] + valueParams[3]) {
    condition = high[3];
} else if (cellText + op1[0] + valueParams[4]) {
    condition = high[4];
} else {
    condition = "nada"
};
});
};
testingCondition();








// // Conditional formatting class setting:
// const formattedMetric = $('.formatted');
// const KPI = [];
// let KPIs = [];

// formatAssignment();
// //     console.log(settings); // ARRAY
// //     console.log(setup); // ARRAY
// //     console.log(setting$); // OBJECT

// function formatAssignment() {
//     for (i = 0; i < formattedMetric.length; i++) {
//         metrics = $(formattedMetric[i]).attr('hyph'); // hyp
//         console.log(metrics);

//         KPI;
//         $('tbody td').each(function (i) {
//             if ((this.hasClass(metrics[i])) &&
//                 (metrics.includes(setup.metric))) {
//                 KPI = metric.parent();
//                 console.log(KPI);
//                 console.log(metric.parent());
//                 console.log("KPI: " + KPI);
//             } else {}
//         });
//     }
// };



// function conditionAssignment() {
//     for (i = 0; i < setup.length; i++) {
//         KPIs = setup[i];
//         KPICondition = KPIs.condition;
//         KPIOperator = KPIs.operator;
//         KPITarget = KPIs.target;
//         KPIValueParams = KPIs.valueParams;
//         KPITitle = KPIs.className;
//         console.log(KPIs);

//         KPI.push(KPIs);
//         console.log(KPI);

//         // console.log(conditionsBlock);
//         // conditionAssignment();

//         // // Sets condition logic:
//         // // 
//         function testingCondition() {
//             // let formattedCell$ = new Array($('.formatted'))
//             // console.log('formattedCell$: ' + formattedCell$)
//             // console.log(formattedCell$);


//         // function testingCondition() {
//         //     let extrametric$ = new Array($('.extrametric'))
//         //     console.log('extrametric$: ' + extrametric$)
//         //     console.log(extrametric$);
//         // };

//         //   console.log("cellText: " + cellText)

//         // function applyFormatting() {

//         $('metric-2').each(function () {
//             // var cellText = this.innerHTML;
//             var cellText = this.text();
//             var noComma = cellText.replace(/\,/g, '');
//             var cellNum = parseFloat(noComma);
//             console.log(cellNum + op1[0] + valueParams[0]);
//             if ($(this).hasClass('indextitle')) {
//                 $(this).addClass('ignore');
//             } else if (cellNum + op1[0] + valueParams[0]) {
//                 condition = high[0]
//             } else if (cellNum + op1[0] + valueParams[1]) {
//                 condition = high[1];
//             } else if (cellNum + op1[0] + valueParams[2]) {
//                 condition = high[2];
//             } else if (cellNum + op1[0] + valueParams[3]) {
//                 condition = high[3];
//             } else if (cellNum + op1[0] + valueParams[4]) {
//                 condition = high[4];
//             } else {
//                 condition = undefined
//             };
//         });
//     }
// }; testingCondition();

// }
// // ERROR CHECK FEATURE: logs file loaded to console
// logFile();