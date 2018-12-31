// $('.text-word').keypress(function(){
//     alert('hrjre')
// })

$(".img-container, .text-container").on("scroll", function() {
    $(".img-container, .text-container").scrollTop($(this).scrollTop());
});

//Editing the text from  the given suggestion and highlighting the image
$('.text-word').click(function(){
    let dataThis      = this,
        dataAttributes= $(this).data(),                           // Fetching all data attributes
        imageid       = dataAttributes.imageid,
        suggestions   = dataAttributes.suggestions.split(','),
        wordId        = '#'+$(this).attr('id'),
        containerName = wordId.split('-'),
        data          = { items: [] },
        list          = "";
    
    // If list of suggestions is not appended append the list by creating the ul element
    if($('[name="'+containerName[1]+'"]').length == 0){
        // 
        for (let suggestionsIndex = 0; suggestionsIndex < suggestions.length; suggestionsIndex++) {
            list += "<a href='#' class='list' tabindex="+(suggestionsIndex)+"> <li class='suggestion_items' tabindex='0' contenteditable='false'>"+suggestions[suggestionsIndex]+"</li> </a>";
            
        }
    
        $(this).append("<ul class='suggestion_list'  tabindex='0' name='"+containerName[1]+"'><div class='ui-widget'><input type='text' id='input-"+containerName[1]+"' /></div>"+list+"</ul>")
    }
    let listContainer = $('[name="'+containerName[1]+'"]')[0],    // Accessing ul list 
        listItems     = $('.suggestion_items'),                   // Accessing complete list
        inputSelect   = $('#input-'+containerName[1]);
console.log(inputSelect.selector);
    listContainer.style.display = "inline-block";                 // make list visible  
    
    // // Creating an object of suggetions
    // suggestions.forEach(function(suggestion) {
    //     data.items.push({
    //         "display_name":suggestion
    //     })
    // });

    // // Autocomplete text suggestion
    // $(wordId).autocomplete({
    //     select: function(){
    //         dataThis.style.color = "#00f";                     
    //     },
    //     source: $.map(data.items, function(item) {
    //         return item.display_name;
    //     }),
    //     autoFocus: true,
    //     minLength: 0
    // });

      $(inputSelect.selector).autocomplete({
        source: suggestions,
        select: function(){
            dataThis.innerText = $(this).val();
            dataThis.style.color = '#00f';
            $('ul.ui-autocomplete.ui-menu.ui-widget.ui-widget-content.ui-corner-all').remove();
        }
      });
    
    // Highlight the image area
    cvi_map.remove(document.getElementById(imageid));     
    cvi_map.add(document.getElementById(imageid), {
        opacity: '25', 
        areacolor: '00ff00'
    });
    extAreaOver(imageid, dataAttributes.wordid);

    // Fade away suggestion and image highlight
    $('.text-word').mouseleave(function(){
        // listContainer.style.display = "none";                     
        $('[name="'+containerName[1]+'"]').remove();                     
        cvi_map.remove(document.getElementById(imageid));     
    });

    $(listContainer).mouseleave(function(){
        // listContainer.style.display = "none";
        $('[name="'+containerName[1]+'"]').remove();                    
        cvi_map.remove(document.getElementById(imageid));     
    });

    // Get the selected list item and change text to selected item
    $(listItems).on('click', function(){
        let selectedSuggestion = $(this).text();
        dataThis.innerText = selectedSuggestion;
        dataThis.style.color = '#00f';
    });
});



// For text with no suggestion
$('.text-no-suggestion').click( function(){
    let dataAttributes= $(this).data(),                           // Fetching all data attributes
        imageid       = dataAttributes.imageid;                   // Get data attributes of a text
        
    // Highlight the image area
    cvi_map.remove(document.getElementById(imageid));     
    cvi_map.add(document.getElementById(imageid), {
        opacity: '25', 
        areacolor: '00ff00'
    });
    extAreaOver(imageid, dataAttributes.wordid);  
    
    this.click(function(){
        let dataAttributes= $(this).data(),                           
            imageid       = dataAttributes.imageid;
        cvi_map.remove(document.getElementById(imageid));             
    })    
})

// Image hover get data
$('.map-image').mouseenter(function(){
    let imageid = $(this).attr('id');

    if(imageid != null || imageid != undefined){
        cvi_map.remove(document.getElementById(imageid));         
        cvi_map.add(document.getElementById(imageid), {
            opacity: '25', 
            areacolor: 'fff'
        });
    }

    // With hoverable
    $("area").mouseenter(function(){
        let areaData    = $(this).data(),
            wordElement = document.getElementById(areaData.textid),
            imageId     = areaData.imageid;

        wordElement.style.backgroundColor = "#aaa";

        // $('area').mouseleave(function(){
        //     wordElement.style.backgroundColor = "#fafafa";    
        // })
    })

    //With mouse click
    $("area").click(function(){
        let areaData    = $(this).data(),
            wordElement = document.getElementById(areaData.textid),
            imageId     = areaData.imageid;

        wordElement.style.backgroundColor = "#fafafa";    
        wordElement.style.backgroundColor = "#aaa";

        $('area').click(function(){
            wordElement.style.backgroundColor = "#fafafa";    
        })
    })
})

//Update Text 
/**
 * Get all the values from contenteditable field
 * save it to the document in defined json format
 */
$('.save-text-button').on('click', function(){
    let pdfSelectTag = document.getElementById('pdf'),
        pdfName = pdfSelectTag.value,
        updatePdfWord = {},
        taginput = $(this).prev(),
        childTaginput = taginput.children('span');
    
    updatePdfWord = {
        "pdfData": [
            {
                "pdfName": pdfName,
                "imageData": []
            }
        ]
    };
    console.log(taginput)
    updatePdfWord.pdfData[0].imageData.push({
        "imageId": childTaginput[0].getAttribute('data-imageid')
    });
    for(let i=0; i<childTaginput.length; i++){
        updatePdfWord.pdfData[0].imageData.push({
            "imageText": [{
                wordId: childTaginput[i].getAttribute('data-wordid'),
                word: childTaginput[i].innerText,
                color: childTaginput[i].style.color,
                pixelLocation: childTaginput[i].getAttribute('data-coords')
            }]
        });
    }
    console.log(updatePdfWord);
})
















































































// let data = {
//     item: [
//         {display_name: 'Dhiraj'},
//         {display_name: 'Dhiraj'},
//         {display_name: 'Dhiraj'},
//         {display_name: 'Dhiraj'},
//         {display_name: 'Dhiraj'},
//         {display_name: 'Dhiraj'},
//         {display_name: 'Dhiraj'}
//     ]
// }

// let tgas = ['America', 'life', 'Dhiraj Mukul', 'Dhiraj Rocks']

// $('.text-word').mouseenter(function() {
//     $(".autocomplete").autocomplete({
//         source: tgas,
//         delay: 50,
//         minLength: 1
//     });
// });



// $('body').on({
//     'mouseenter': function(){
//             var txt = $(this).html();
//         }
//     },
//     'p'
// );
// $(function() {
//     var availableTags = [
//       "ActionScript",
//       "AppleScript",
//       "Asp",
//       "BASIC",
//       "C",
//       "C++",
//       "Clojure",
//       "COBOL",
//       "ColdFusion",
//       "Erlang",
//       "Fortran",
//       "Groovy",
//       "Haskell",
//       "Java",
//       "JavaScript",
//       "Lisp",
//       "Perl",
//       "PHP",
//       "Python",
//       "Ruby",
//       "Scala",
//       "Scheme"
//     ];
    
      
// function placeCaretAtEnd(el) {
//     el.focus();
//     if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
//         var range = document.createRange();
//         range.selectNodeContents(el);
//         range.collapse(false);
//         var sel = window.getSelection();
//         sel.removeAllRanges();
//         sel.addRange(range);
//     } else if (typeof document.body.createTextRange != "undefined") {
//         var textRange = document.body.createTextRange();
//         textRange.moveToElementText(el);
//         textRange.collapse(false);
//         textRange.select();
//     }
// }
      
      
// function split( val ) {
//     return val.split( /,\s*/ );
// }
// function extractLast( term ) {
//     return split( term ).pop();
// }
 
// $( "#tags" )
//     // don't navigate away from the field on tab when selecting an item
//     .bind( "keyup", function( event ) {
//         if ( event.keyCode === $.ui.keyCode.TAB && $( this ).data( "ui-autocomplete" ).menu.active ) {
//           event.preventDefault();
//         }
//     })
//     .autocomplete({
//         minLength: 0,
//         source: function( request, response ) {
//             // delegate back to autocomplete, but extract the last term
//             response( $.ui.autocomplete.filter(
//             availableTags, extractLast( request.term ) ) );
//         },
//         focus: function() {
//             // prevent value inserted on focus
//             return false;
//         },
//         select: function (event, ui) {
//             var value = $(this).html();
//             var terms = split(value);
//             terms.pop();
//             terms.push(ui.item.value);
//             $(this).html(terms+", ");
//             placeCaretAtEnd(this);
          
//             return false;
//         }   
//     });
// });