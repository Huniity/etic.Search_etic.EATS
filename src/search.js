// Redirect to a new page based on the input value
              function redirectToPage() {
                const query = document.getElementById("searchInput").value.trim();
                if (query) {
                  // Redirect to a new page (replace 'search.html' with your desired page)
                  window.location.href = `error.html`;
                }
              }
            
              // Redirect on Enter key press
              function handleKeyDown(event) {
                if (event.key === 'Enter') {
                  redirectToPage();
                }
              }