
// YOUTUBE Player iframe

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


function onYouTubeIframeAPIReady() {
    new YT.Player('player', {
      videoId: 'nbibnUX0sMg',
      playerVars: {
          autoplay: true, //자동 재생 유무
          loop: true, // 반복 재생 유무
          playlist: 'nbibnUX0sMg' //반복 재생할 유튜브 영상 ID
      }
      });
    }
  
