document.addEventListener('DOMContentLoaded', pierdy())

const keyToSoundMap ={
    q: 'boom',
    w: 'clap',
    e: 'hihat',
    a: 'kick',
    s: 'openhat',
    d: 'ride',
    z: 'snare',
    x: 'tink',
    c: 'tom'
}



function pierdy(){
    document.body.addEventListener('keydown', onKeyPress)
}

function onKeyPress(e){
    const key = e.key
    playSound(e.key)

}

function playSound(key){
    const audioSelector = `#${keyToSoundMap[key]}`
    const audio = document.querySelector(audioSelector)
    audio.currentTime = 0
    audio.play()
}