console.log("popup test");
console.log("popup test");
document.getElementById("save").addEventListener("click", async () => {
    const speed = parseFloat(document.getElementById("speed").value);
    console.log("testing");
    await chrome.storage.sync.set({ videoSpeed: speed }, () =>
        console.log("please")
    );
});

document.addEventListener("DOMContentLoaded", async () => console.log("kekw"));
