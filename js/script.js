
const musicList = [
  "https://www.youtube.com/embed/xCUWT2FF0aI?autoplay=1",
  "https://www.youtube.com/embed/XvkkBhpG2hs?autoplay=1&start=4",
  "https://www.youtube.com/embed/NHip3wPtwKo?autoplay=1&start=2",
  "https://www.youtube.com/embed/lHv96e1yZGs?autoplay=1",
  "https://www.youtube.com/embed/WAHBocKLmiw?autoplay=1"
];

let currentMusicIndex = localStorage.getItem('currentMusicIndex');
if (currentMusicIndex === null) {
  currentMusicIndex = Math.floor(Math.random() * musicList.length);
  localStorage.setItem('currentMusicIndex', currentMusicIndex);
} else {
  currentMusicIndex = parseInt(currentMusicIndex);
}

const musicPlayer = document.getElementById('music-player');
musicPlayer.src = musicList[currentMusicIndex] + "&enablejsapi=1";

function onYouTubeIframeAPIReady() {
  const player = new YT.Player('music-player', {
    events: {
      'onStateChange': onPlayerStateChange
    }
  });

  function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
      currentMusicIndex = (currentMusicIndex + 1) % musicList.length;
      localStorage.setItem('currentMusicIndex', currentMusicIndex);
      player.loadVideoByUrl(musicList[currentMusicIndex]);
    }
  }
}

// Load YouTube iframe API
(function loadYTAPI() {
  const tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
})();
