// const bars = document.getElementById('myCanvas');
const control = document.getElementById('control');
const image = document.getElementById('image');
const song = document.getElementById('mySong');
const bars= document.querySelector('.bar');
const duration = song.duration;
// var ctx = bars.getContext("2d");
// ctx.beginPath();
// ctx.rect(0,146,1300,8);
// ctx.stroke();
for(let i=0; i<100; i++){
   
    let barDiv = document.createElement('div');
   
    barDiv.classList.add('barDiv')
    barDiv.setAttribute('id', i);
    barDiv.addEventListener('click', (e)=>{
       const jumptime = parseFloat(e.target.id * duration/100);
       song.currentTime = jumptime;
    })

    bars.appendChild(barDiv);
}

control.addEventListener('click', ()=>{
      if(song.paused){
          image.src= 'pause.png';
          song.play();
      }else{
          image.src = 'play.png';
          song.pause();
      }
})