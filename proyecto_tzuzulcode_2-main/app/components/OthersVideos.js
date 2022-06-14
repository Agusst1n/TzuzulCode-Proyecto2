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

    //vamos a hacer lo mismo pero con un fort
    console.log(video, 'video')
    // for(let v of video){

    //   const other_v = document.createElement('div')
    //   other_v.id = v.id
    //   const a = document.createElement('a')
    //   const miniature = document.createElement('img')
    //   a.setAttribute("href", `#/${v.slug}`)
    //   a.appendChild(miniature)
    //   miniature.src = `${v.miniature}`
    //   other_v.appendChild(a)
    //   div.appendChild(other_v)
    // }
  return div;
};
export default OthersVideos;
