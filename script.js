 // Preview feature using JavaScript
 function previewData() {
    // Get the form data
    const name = document.getElementById("user").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    const contactMethod = document.querySelector('input[name="contact_method"]:checked')?.value;
    const inquiryType = document.getElementById("inquiryType").value;

    // Populate the preview section
    document.getElementById("previewName").textContent = name;
    document.getElementById("previewEmail").textContent = email;
    document.getElementById("previewPhone").textContent = phone;
    document.getElementById("previewMessage").textContent = message;
    document.getElementById("previewContactMethod").textContent = contactMethod;
    document.getElementById("previewInquiryType").textContent = inquiryType;

    // Show the preview section
    document.getElementById("previewSection").style.display = "block";
}