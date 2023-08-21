const audioFile = document.querySelector("audio")
const playButton = document.querySelector("#play")
let parent = document.querySelector("body")

let isMusicPlaying = true

function playAudio(){
    isMusicPlaying = true
    audioFile.pause()

    playButton.classList.replace("fa-circle-pause", "fa-circle-play")

}

function pauseAudio(){
    isMusicPlaying = false
    audioFile.play()
    playButton.classList.replace("fa-circle-play", "fa-circle-pause")

}

playButton.addEventListener("click" ,() =>
{
    if(isMusicPlaying) 
    {
     pauseAudio()   
    }
    else {
        playAudio()
    }
})

const songsData = [


    {
      albumName: "EFGH",
      singerName: "Weekend",
      data: "music2"
    },
    {
        albumName: "IJKL",
        singerName: "Eminem",
        data: "music3"
    },
    {
        albumName: "MNOP",
      singerName: "LadyGaga",
      data: "music4"
    }
]

const AlbumName = document.querySelector("#moviename")
const SingerName = document.querySelector("#artist")
const albumImage = document.querySelector("img")
const forwardButton = document.querySelector("#after")
const previousButton = document.querySelector("#before")

function loadSongs(info)
{
    AlbumName.textContent = info.albumName
     SingerName.textContent = info.singerName
     albumImage.setAttribute("src" , `images/${info.data}.jpg`)
     audioFile.setAttribute("src", `audio/${info.data}.mp3`)
}




let songPosition = -1
forwardButton.addEventListener("click", () =>{
    songPosition++
    if(songPosition > songsData.length - 1){
        songPosition = 0
    }

   
    loadSongs(songsData[songPosition])
    
    // songPosition++
    pauseAudio()
    
    

// console.log(songPosition)
})


previousButton.addEventListener("click", () =>
{
   songPosition--
   if(songPosition < 0)
   {
    songPosition = songsData.length - 1
   }
   loadSongs(songsData[songPosition])
   pauseAudio()
//    console.log(songPosition)
})

const progressBar = document.querySelector("#progressbar")
const totalDuration = document.querySelector("#duration")
const runningTime = document.querySelector("#currenttime")

audioFile.addEventListener("timeupdate", function(event)
{
  
    let myCurrentTime = event.srcElement.currentTime
    const myDuration = event.srcElement.duration 

    let audioPercentage = (myCurrentTime / myDuration) * 100
    progressBar.style.width = `${audioPercentage}%`

//      const totalDurationPercentage = (myDuration / 60).toFixed(2)
//      let RunningTIme = (myCurrentTime / 60).toFixed(2)
//      runningTime.textContent = RunningTIme
//     //  console.log(RunningTIme)
    
    
//    totalDuration.textContent = totalDurationPercentage

  const durationInMinutes = Math.floor(myDuration / 60)
  let durationInSeconds = Math.floor(myDuration % 60)

  if(durationInSeconds < 10)
  {
    durationInSeconds = `0${durationInSeconds}`
  }
  totalDuration.textContent = `${durationInMinutes}:${durationInSeconds}`
  

  const currentTimeInMinutes = Math.floor(myCurrentTime / 60)
  let currentTimeInSeconds = Math.floor(myCurrentTime % 60)

  if(currentTimeInSeconds < 10){
    currentTimeInSeconds = `0${currentTimeInSeconds}`
  }
  runningTime.textContent = `${currentTimeInMinutes}:${currentTimeInSeconds}`
  
  
    // console.log(totalDurationPercentage) 
    
    // console.log(myDuration)
    // console.log(audioPercentage)
})




