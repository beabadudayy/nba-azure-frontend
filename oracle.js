async function loadPredictions() {
    try {
        const response = await fetch('predictions.json');
        const data = await response.json();

        Object.keys(data).forEach(team => {
            const element = document.querySelector(`[data-team="${team}"]`);
            
            if (element) {
                const percentage = (data[team] * 100).toFixed(1);
                element.textContent = percentage + "%";
            }
        });

        console.log("Oracle updated successfully.");
    } catch (error) {
        console.error("Error loading predictions:", error);
    }
}

loadPredictions();
