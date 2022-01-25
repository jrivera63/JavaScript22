function changeParagraph1(){
    document.getElementById('paragraph').innerHTML = 'This paragraph loads from an external script when clicked'
}

function hideImage(){
    document.getElementById('picture').style.display = 'none'
}


function showImage(){
    document.getElementById('picture').style.display = 'block'
}

function paraColor(){
    document.getElementById('paragraph').style.color = 'blue'
}

function widenImage(){
    if (document.getElementById('picture').style.width == '550px'){
        document.getElementById('picture').style.width = '400px';
    } else{
    document.getElementById('picture').style.width = '550px';
    }
}

if (getElementById('picture').style.width == '550px'){
    
}


