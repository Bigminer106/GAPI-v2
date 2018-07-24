// // // Logic to filter using .search-key filters:
// function searchAll() {
//     let trs, tds;
//     const vlu = [];

//     // Find all search filters:
//     const searchKey$ = Array.from(document.getElementsByTagName('.search-key'));
//     console.log(searchKey$``);

//     // Get each value entered, upon keyUp:
//     for (key in searchKey$) {
//         var contents = $('#tableFilter'[key]);
//         vlu.push(document.getElementById(searchKey$[key]).value); // does not return the values
//         const searchVal = $(this).val();
//         // const searchVal2 = document.getElementById(searchKeys[d]).value;
//         console.log(contents);
//         console.log(searchVal);
//         console.log(searchVal2);
//         // $(d).text(searchVal);
//         console.log($(searchKeys).innerHTML);
//         console.log($(searchKeys).value());
//         // vlu.push((searchKey[d]).value());
//         let vluu = $(searchKeys).val();
//         console.log(vluu);
//     };

//     // // Create an array which records each table row.
//     trs = Array.from($('tr td'));
//     // console.log(trs);
//     vlu.push(document.getElementById(vlllu[d]).value);
//     // // For each table row, let tr = row.
//     trs.forEach(function (tr, i) {

//         let filters = [];
//         vlu.forEach((filter, j) =>
//             filters.push(filter.toUpperCase()));




//         // const testhere$ = new Array($('tr td')); // prints classes!
//         const testhere$ = Array.from(document.getElementsByTagName('tr td'));
//         testhere$.forEach(function(i) {

//             if (testhere$) {
//                 for (index in testhere$) {
//                     if (testhere$.innerHTML.toUpperCase.indexOf(index[i]) > -1) {
//                         tr.style.display = "";
//                     } else {
//                         tr.style.display = "none"
//                     }
//                 }
//             };
//         });
//     });
// };
