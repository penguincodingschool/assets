const prefix = "https://github.com/penguincodingschool/assets/raw/main/assets/"

const links = {
    "audio": {
        "point": "point.ogg",
        "fly" : "fly.ogg",
        "smack": "crash.ogg",
        "sad": "sad.ogg",  
        "swoosh": "swoosh.ogg",          
    },
    "images": {
        "Detailed USA": "map_of_usa.jpg",
        "Treasure Map 1": "treasure1.jpg",
        "Old Istanbul": "konstantinopel.jpg",
        "Bamboo": "bamboo.png",
        "Bamboo 1": "bamboo1.png",
        "Beetle": "beetle.png",
        "Forest": "forest.jpeg",
        "Forest1": "forest1.jpeg",
        "Forest2": "forest2.png",
        "Grass": "grass.jpeg",
        "Happy": "happy.png",
        "Mall": "mall.jpeg",
        "Mountain": "mountain.jpeg",
        "Mountain 1": "mountain1.jpeg",
        "Mountain 1.1": "mountain1.png",
        "My store": "mystore.png",
        "Ocean": "ocean.jpeg",
        "Panda": "panda.png",
        "Red Panda": "redpanda.png",
        "Sad": "sad.png",
        "Shield":"shield.png",
        "Snow Leopard":"snowleopard.png",
        "Store": "store.jpeg",
        "Sword 1": "sword1.png",
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
        let el = getAudioContainer(audio, prefix + links["audio"][audio]);
        //console.log(audio)
        acontainer.appendChild(el);
    }
    const icontainer = document.getElementById("container-images");
    for (const image in links["images"]){
        let el = getImageContainer(image, prefix + links["images"][image]);
        //console.log(audio)
        icontainer.appendChild(el);
    }
}