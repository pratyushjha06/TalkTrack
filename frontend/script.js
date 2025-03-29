document.getElementById("fetchData").addEventListener("click", async () => {
    try {
        const response = await fetch("http://localhost:5000/api");
        const data = await response.json();
        document.getElementById("responseText").innerText = data.message;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
});
