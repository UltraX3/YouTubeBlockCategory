$(document).ready(function () {
   $('input').each(function () {
       var element = $(this);
       var categoryId = element.attr('name');
       chrome.storage.sync.get(categoryId,function (items) {
           console.log(items);
           console.log("Checking categoryId " + categoryId);
           var newVar = items[categoryId];
           console.log("item: "+newVar);
           if(newVar){
               console.log("Setting checked");
               element.attr('checked','checked');
           }
       })
   })
});


$('input').change(function () {
    var categoryId = $(this).attr('name');
    var checked = $(this).is(":checked");
    chrome.storage.sync.set({[categoryId]: checked}, function () {
        if (chrome.runtime.error) {
            console.log("Runtime error.");
        }
    });
});