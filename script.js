// Handle contact form subit
document.querySelector("form").addEventListener("submit",function(e) {
    e.preventDefault(); // stop the form from refreshing the page
    alert("Thanks for reaching out! I'll get back to you soon.");
    this.reset(); // optional: clear form feilds
});

// Hero button interation
document.querySelector(".btn").addEventListener("click", function(){
    this.style.backgroundColor = "#4caf50"; // changes button to green
    this.textContent = "Thanks!";
});
