
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

let recordInProgress = false
let playInProgress = false
let recordStartTimestamp = []
const audioRecord = []
document.addEventListener('DOMContentLoaded', pierdy())

function pierdy(){
    document.body.addEventListener('keydown', onKeyPress)
    const recordButton = document.querySelector('#recordButton')
    recordButton.addEventListener('click', onRecord)
    const playButton = document.querySelector('#playButton')
    playButton.addEventListener('click', playRecord)

}

function onKeyPress(e){
    const key = e.key
    const soundId = keyToSoundMap[key]
    playSound(e.key)

    if(!soundId){
        return
    }
    
    if(recordInProgress){
        const timeStamp = Date.now()
        const sound = {
            soundId,
            timeStamp,
            recordStartTimestamp

        }
        audioRecord.push(sound)
        console.log(audioRecord)
    }
}

function playSound(key){
    const audioSelector = `#${keyToSoundMap[key]}`
    const audio = document.querySelector(audioSelector)
    audio.currentTime = 0
    audio.play()
}

function onRecord(ev){
    if(recordInProgress){
        //akcja stop
        ev.target.textContent = 'Nagraj'
    }else {
    ev.target.textContent = 'Zatrzymaj'        //akcja start
    }

    recordInProgress =!recordInProgress
}

function playRecord(ev){
    if(playInProgress){
          ev.target.textContent = 'Play'
    }else {
    ev.target.textContent = 'STOP'  
          //akcja start
    }
      playInProgress =!playInProgress  //akcja start
}