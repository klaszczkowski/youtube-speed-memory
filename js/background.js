chrome.runtime.onMessage.addListener(function (response, sender, sendResponse) {
  // alert(response);
});


// window.setTimeout(function() {
//    var count = document.querySelectorAll("div");
//     window.setTimeout(function() {
        
//         alert(count.length);

//         // declarativeContent.SetIcon
    
//     }, 1000);

// }, 10000);


// chrome.runtime.onInstalled.addListener(function() {
//     // Replace all rules ...
//     chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
//       // With a new rule ...
//       chrome.declarativeContent.onPageChanged.addRules([
//         {
//           // That fires when a page's URL contains a 'g' ...
//           conditions: [
//             new chrome.declarativeContent.PageStateMatcher({
//               pageUrl: { urlContains: 'g' },
//             })
//           ],
//           // And shows the extension's page action.
//           actions: [ new chrome.declarativeContent.ShowPageAction() ]
//         }
//       ]);
//     });
//   });