document.addEventListener('DOMContentLoaded', function () {
    
    // Dropdown functionality (if you have dropdowns)
    document.querySelectorAll('.dropbtn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            let dropdownContent = this.nextElementSibling;
            dropdownContent.classList.toggle('show');
        });
    });

    // Real-time search
    const searchBox = document.getElementById('searchBox');
    searchBox.addEventListener('keyup', function () {
        let query = this.value.toLowerCase();
        document.querySelectorAll('.product').forEach(card => {
            let name = card.querySelector('.product-name')?.textContent.toLowerCase() || '';
            card.style.display = name.includes(query) ? 'block' : 'none';
        });
    });

    // Read more confirmation
    document.querySelectorAll('.product button').forEach(button => {
        button.addEventListener('click', function () {
            let url = this.getAttribute('onclick')?.split("'")[1];
            let confirmation = confirm("Are you sure you want to read more?");
            if (confirmation && url) {
                window.location.href = url;
            }
        });
    });

});

