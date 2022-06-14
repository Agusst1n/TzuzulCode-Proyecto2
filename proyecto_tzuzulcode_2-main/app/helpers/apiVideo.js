export async function apiVideo(props) {
  let { url, cbSuccess } = props;
  await fetch(url)
    .then((res) => (res.ok ? res.json() : Promise.reject()))
    .then((json) => cbSuccess(json))
    .catch((err) => {
      let message = err.statusText || "ocurrio un error al accedre a la api";
      document.getElementById("main").innerHTML = `
        <div class="error">
        <p>Error : ${err.status}:${message}</p>
        </div>
      `;
      console.log(err);
    });
}
