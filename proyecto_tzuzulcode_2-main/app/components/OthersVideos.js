const OthersVideos = (video) => {
  const div = document.createElement("div");
  div.className = 'other_vids'
  div.innerHTML = video
    .map((obj) => {
      return `
      <div data-id="${obj.id}" class="vid">
        <a href="#/${obj.slug}" data-id="${obj.id}">
          <img class="enlace" src="${obj.miniature}" height="100px" alt="xd" data-id="${obj.id}">
        </a>
        <div class="title_contain">
          <h4 class="title_video">${obj.title}</h4>
          <p class="channel_name">${obj.channel}</p>
          <p class="views">${obj.views}</p>
        </div>
      </div>
    `;
    })
    .join("");


    console.log(video, 'video')

  return div;
};
export default OthersVideos;
