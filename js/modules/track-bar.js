import Playlist from "./playlist.js";
const TrackBar = (_ => {
  // state
  const state = {
    currentTrackTime: 0,
    fullTrackTime: 0,
    fillWidth: 0
  };

  // cache DOM
  const trackBarFillEl = document.querySelector(".track-bar__fill");
  const trackBarEl = document.querySelector(".track-bar");

  const init = _ => {
    render();
    listener();
  };

  const render = _ => {
    trackBarFillEl.style.width = `${state.fillWidth}%`;
  };

  const getPercent = (current, full) => {
    return current / full * 100;
  };

  const setState = obj => {
    state.currentTrackTime = obj.currentTime;
    state.fullTrackTime = obj.duration;
    state.fillWidth = getPercent(state.currentTrackTime, state.fullTrackTime);
    render();
  };

  const listener = _ => {
    trackBarEl.addEventListener("click", function(event) {
      let progress = getPercent(event.pageX, trackBarEl.clientWidth) / 100;
      state.currentTrackTime = state.fullTrackTime * progress;
      Playlist.setState(state.currentTrackTime);
    });
  };

  return {
    init,
    setState
  };
})();

export default TrackBar;
