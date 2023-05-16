import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const VIDEO_STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(saveCurrentTimeVideo, 1000));
updateCurrentTimeVideo();

function saveCurrentTimeVideo(data) {
  console.log(data.seconds);
  localStorage.setItem(VIDEO_STORAGE_KEY, data.seconds);
}

function updateCurrentTimeVideo() {
  const persistedData = localStorage.getItem(VIDEO_STORAGE_KEY);

  if (!persistedData) {
    return;
  }
  player.setCurrentTime(persistedData);
}
