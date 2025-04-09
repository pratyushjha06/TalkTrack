let header = document.createElement("div");
header.innerHTML = `<div id="meeting-assistant">
    <h3>Meeting Assistant Active</h3>
    <button onclick="alert('Taking Notes!')">Take Notes</button>
    <button onclick="alert('Recording Started!')">Start Recording</button>
</div>`;
header.style.position = "fixed";
header.style.top = "0";
header.style.left = "0";
header.style.width = "100%";
header.style.background = "rgba(0,0,0,0.8)";
header.style.color = "white";
header.style.padding = "10px";
header.style.textAlign = "center";
header.style.zIndex = "9999";

document.body.prepend(header);
