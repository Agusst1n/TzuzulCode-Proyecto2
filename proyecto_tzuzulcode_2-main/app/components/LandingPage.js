const LandingPage = (video) => {
  //delegar el click solo a la clase enlace
  document.addEventListener("click", (e) => {
    if (!e.target.matches(".enlace")) return false;
    localStorage.setItem("urlId", e.target.dataset.id);
  });

  const div = document.createElement("div");
  div.classList.add("Landing");
  console.log(video, 'el video') //Este es el array de objetos con los videos y su info

  setTimeout(function(){
    let v = document.querySelectorAll('.vid_contain')
    let p = document.querySelectorAll('.play_icon')
    const array_vid = [].slice.call(v)
    // const array_icon = [].slice.call(p)
    // console.log(v)
    // console.log(p)

    console.log(array_vid)
    for(let i = 0; i < array_vid.length; i++){
      array_vid[i].addEventListener('mouseenter',()=>{

        console.log(array_vid[i].firstElementChild,'enter')
        let icon = array_vid[i].firstElementChild
        icon.classList.toggle('active')

      })
    }
    for(let i = 0; i < array_vid.length; i++){
      array_vid[i].addEventListener('mouseleave',()=>{
        console.log(array_vid[i].firstElementChild,'leave')
        let icon = array_vid[i].firstElementChild

        icon.classList.toggle('active')
      })
    }

  }, 100); 

  div.innerHTML = video
    .map((obj) => {

      return `
      <div data-id="${obj.id}" class="vid_contain">
        <div class="play_icon"></div>
        <a href="#/${obj.slug}" data-id="${obj.id} class="video_home">
          <img class="enlace" src="${obj.miniature}" alt="xd" data-id="${obj.id}">
        </a>
      </div>
    `;
    })
    .join("");

  return div;
};
export default LandingPage;
