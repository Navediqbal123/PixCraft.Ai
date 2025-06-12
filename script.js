
function toggleMode() {
  document.body.classList.toggle('dark');
}

function upscaleImage() {
  const file = document.getElementById('imageInput').files[0];
  const res = document.getElementById('imageRes').value;
  if (!file) return alert("Please upload an image!");
  document.getElementById('imageResult').innerHTML = `<p>Image upscaled to ${res} successfully ✅</p><button>Download Image</button>`;
}

function upscaleVideo() {
  const file = document.getElementById('videoInput').files[0];
  const res = document.getElementById('videoRes').value;
  if (!file) return alert("Please upload a video!");
  document.getElementById('videoResult').innerHTML = `<p>Video upscaled to ${res} successfully ✅</p><button>Download Video</button>`;
}
