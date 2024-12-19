document.getElementById("myForm").addEventListener("submit", async function (event) {
		event.preventDefault();

		const formData = {
			name: document.getElementById("name").value,
			email: document.getElementById("email").value,
		};

		try {
			const response = await fetch("http://localhost:3000/submit", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				alert("Form submitted successfully!");
			} else {
				alert("Failed to submit form.");
			}
		} catch (error) {
			console.error("Error:", error);
			alert("An error occurred while submitting the form.");``
		}
	});
