document.getElementById("formElem").onsubmit = async (event) => {
    event.preventDefault();

    try {
        let response = await fetch("http://localhost:3000/submitFormData", {
            method: "POST",
            body: new FormData(formElem),
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        if (response.ok) {
            alert("Successfully sent form data to server");
        } else {
            let errorText = await response.text();
            alert(`Error: ${response.status} - ${errorText}`);
        }

        // If expecting JSON response:
        let result = await response.json();
        console.log(result); // Use console.log for debugging or display to user
    } catch (error) {
        alert(`Error that's catched: ${error.message}`);
    }
};
