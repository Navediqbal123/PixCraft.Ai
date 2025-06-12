
document.getElementById('modeToggle').onclick = () => {
  document.body.classList.toggle('dark');
};

document.getElementById('generateBtn').onclick = () => {
  const prompt = document.getElementById('prompt').value;
  const output = document.getElementById('output');
  if (!prompt.trim()) {
    alert("Please enter a prompt.");
    return;
  }
  output.innerHTML = `<p>Generating video for: <strong>${prompt}</strong>...</p>`;
  setTimeout(() => {
    output.innerHTML += "<p>✅ Video generated successfully!</p>";
    document.getElementById('downloadBtn').style.display = "inline-block";
    document.getElementById('shareBtn').style.display = "inline-block";
  }, 2000);
};
