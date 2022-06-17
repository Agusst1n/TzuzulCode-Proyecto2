import { apiVideo } from "../helpers/apiVideo.js";
import LandingPage from "./LandingPage.js";
import OthersVideos from "./OthersVideos.js";
import Video from "./Video.js";

const Router = async () => {
  const $main = document.getElementById("main");
  let { hash } = window.location;
  $main.innerHTML = ``;

  if (!hash || hash === "#/") {
    await apiVideo({
      url: "https://my-json-server.typicode.com/LuisAngel98/DB_VIDEOS/videos",
      cbSuccess: (video) => {
        $main.appendChild(LandingPage(video));
        console.log(video, 'clg video routes') //pasa el array de videos
        // $main.appendChild(Navbar());

      }
    });
  } else {
    await apiVideo({
      url: "https://my-json-server.typicode.com/LuisAngel98/DB_VIDEOS/videos",
      cbSuccess: (video) => {
        const $div = document.createElement("div");
        $div.classList.add("videoRepro");
        let idLocal = localStorage.getItem("urlId");
        console.log(idLocal, 'idee local')
        let newvideo = video.find((v) => v.id === Number(idLocal));
        let newothervideos = video.filter((v) => v.id !== idLocal);
        $div.appendChild(Video(newvideo));
        $div.appendChild(OthersVideos(newothervideos));
        console.log(newvideo);
        console.log(newothervideos);

        const $audioRepro = document.createElement("div");
        $audioRepro.classList.add("audioRepro");

        $main.appendChild($div);
        $main.appendChild($audioRepro);
      }
    });
  }
};
export default Router;
