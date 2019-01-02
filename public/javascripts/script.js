//Editing the text from  the given suggestion and highlighting the image
$('.text-word').click(function(event){
    let dataThis      = this,
        dataAttributes= $(this).data(),                           // Fetching all data attributes
        imageid       = dataAttributes.imageid,                   // get data-imageId
        suggestions   = dataAttributes.suggestions.split(','),    // get data-suggestions
        wordId        = '#'+$(this).attr('id'),                   // id of word currently working on
        containerName = wordId.split('-'),                        // name of the ul containing suggestions                        
        list          = "";
    
    // If list of suggestions is not appended append the list by creating the ul element
    if($('[name="'+containerName[1]+'"]').length == 0){
        // Creating a list and appending the suggetions 
        for (let suggestionsIndex = 0; suggestionsIndex < suggestions.length; suggestionsIndex++) {
            list += "<a href='#' class='list' tabindex="+(suggestionsIndex)+">"+
                        "<li class='suggestion_items' tabindex='0' contenteditable='false'>"+
                            suggestions[suggestionsIndex]+
                        "</li>"+
                    "</a>";
        }
        // append a ul with a textbox and a list nested in it    
        $(this).append("<ul class='suggestion_list'  tabindex='0' name='"+containerName[1]+"'>"+
                            "<div class='ui-widget'>"+
                                "<input type='text' id='input-"+containerName[1]+"' />"+
                            "</div>"+
                                list+
                        "</ul>"
                    );  
    }

    let listContainer = $('[name="'+containerName[1]+'"]')[0],    // Accessing ul list 
        listItems     = $('.suggestion_items'),                   // Accessing complete list
        inputSelect   = $('#input-'+containerName[1]);
       
    listContainer.style.display = "inline-block";                 // make list visible  

    // Autocomplete for text box appended in ul
    $(inputSelect.selector).autocomplete({
    source: suggestions,
    select: function(){
        dataThis.innerText = $(this).val();
        dataThis.style.color = '#00f';
        $('.ui-widget').remove();
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
    function removeList(){
        $('[name="'+containerName[1]+'"]').remove();                     
        cvi_map.remove(document.getElementById(imageid));     
    }
    $('.text-word').mouseleave(removeList);
    $(listContainer).mouseleave(removeList);

    // Get the selected list item and change text to selected item
    $(listItems).on('click', function(){
        let selectedSuggestion = $(this).text();
        dataThis.innerText = selectedSuggestion;
        dataThis.style.color = '#00f';
    }).keydown(function(event){
        if(event.keyCode == 13){
            let selectedSuggestion = $(this).text();
            dataThis.innerText = selectedSuggestion;
            dataThis.style.color = '#00f';
        }
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
});