const links = {
    "audio": {
        "point": "https://github.com/penguincodingschool/assets/raw/main/point.ogg",
        "fly" : "https://github.com/penguincodingschool/assets/raw/main/fly.ogg",
        "smack": "https://github.com/penguincodingschool/assets/raw/main/crash.ogg",
        "sad": "https://github.com/penguincodingschool/assets/raw/main/sad.ogg",  
        "swoosh": "https://github.com/penguincodingschool/assets/raw/main/swoosh.ogg",          
    },
    "images": {
        "Detailed USA":"https://github.com/penguincodingschool/assets/raw/main/map_of_usa.jpg",
        "Treasure Map 1": 'https://github.com/penguincodingschool/assets/raw/main/treasure1.jpg',
        "Old Istanbul":'https://github.com/penguincodingschool/assets/raw/main/konstantinopel.jpg',
    }
};

function getAudioContainer(name, link){
    let audio = new Audio(link)

    let nameText = document.createTextNode(name)
    let titleDiv = document.createElement("div")
    titleDiv.classList.add("title-container")
    titleDiv.append(nameText);

    let playButton = document.createElement("img")
    playButton.src = "play.svg"
    playButton.classList.add('list-img')
    playButton.onclick = function(){
        playButton.src = "sound.gif"
        audio.currentTime = 0
        audio.play()
    }

    audio.onended = function(){
        playButton.src = "play.svg";
    }

    let copyButton = document.createElement("img")
    copyButton.src = "copy.svg"
    copyButton.classList.add("copy-logo")
    titleDiv.append(copyButton)
    copyButton.onclick = function(){
        navigator.clipboard.writeText(link)
        copyButton.src = "check.svg"
        copyButton.classList.add('glowing')
        setTimeout(function(){
            copyButton.classList.remove("glowing")
            copyButton.src = "copy.svg"

        }, 500)
    }

    let parentDiv = document.createElement("div");
    parentDiv.classList.add("media-container")
    parentDiv.append(playButton)
    parentDiv.append(titleDiv)
    
    /** div .audio-container
     *    div .audio-title-container
     *    img .link-logo
     *    audio
     */


    return parentDiv;
}

function getImageContainer(name, link){
    let nameText = document.createTextNode(name)
    let titleDiv = document.createElement("div")
    titleDiv.classList.add("title-container")
    titleDiv.classList.add("imagetitle")
    titleDiv.append(nameText);

    let preview = document.createElement("img")
    preview.src = link
    preview.classList.add('list-img')

    let copyButton = document.createElement("img")
    copyButton.src = "copy.svg"
    copyButton.classList.add("copy-logo")
    titleDiv.append(copyButton)
    copyButton.onclick = function(){
        navigator.clipboard.writeText(link)
        copyButton.src = "check.svg"
        copyButton.classList.add('glowing')
        setTimeout(function(){
            copyButton.classList.remove("glowing")
            copyButton.src = "copy.svg"

        }, 500)
    }

    let parentDiv = document.createElement("div");
    parentDiv.classList.add("media-container")
    parentDiv.append(preview)
    parentDiv.append(titleDiv)
    
    /** div .audio-container
     *    div .audio-title-container
     *    img .link-logo
     *    audio
     */


    return parentDiv;
}

document.body.onload = function(){
    const acontainer = document.getElementById("container-audios");
    for (const audio in links["audio"]){
        let el = getAudioContainer(audio, links["audio"][audio]);
        //console.log(audio)
        acontainer.appendChild(el);
    }
    const icontainer = document.getElementById("container-images");
    for (const image in links["images"]){
        let el = getImageContainer(image, links["images"][image]);
        //console.log(audio)
        icontainer.appendChild(el);
    }
}