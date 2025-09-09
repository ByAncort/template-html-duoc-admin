
        document.addEventListener('DOMContentLoaded', function() {
            // Modal functionality
            const modal = document.getElementById('addCategoryModal');
            const addBtn = document.getElementById('addCategoryBtn');
            const closeBtn = document.querySelector('.close-btn');
            const cancelBtn = document.getElementById('cancelBtn');
            const categoryForm = document.getElementById('categoryForm');
            
            // View toggle functionality
            const gridViewBtn = document.getElementById('gridViewBtn');
            const tableViewBtn = document.getElementById('tableViewBtn');
            const gridView = document.getElementById('gridView');
            const tableView = document.getElementById('tableView');
            
            // Open modal
            addBtn.addEventListener('click', function() {
                modal.style.display = 'flex';
            });
            
            // Close modal
            function closeModal() {
                modal.style.display = 'none';
            }
            
            closeBtn.addEventListener('click', closeModal);
            cancelBtn.addEventListener('click', closeModal);
            
            // Close modal when clicking outside
            window.addEventListener('click', function(event) {
                if (event.target === modal) {
                    closeModal();
                }
            });
            
            // Form submission
            categoryForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const categoryName = document.getElementById('categoryName').value;
                alert(`Categoría "${categoryName}" creada correctamente`);
                closeModal();
                categoryForm.reset();
            });
            
            // Toggle between grid and table view
            gridViewBtn.addEventListener('click', function() {
                gridView.style.display = 'block';
                tableView.style.display = 'none';
                gridViewBtn.classList.add('active');
                tableViewBtn.classList.remove('active');
            });
            
            tableViewBtn.addEventListener('click', function() {
                gridView.style.display = 'none';
                tableView.style.display = 'block';
                gridViewBtn.classList.remove('active');
                tableViewBtn.classList.add('active');
            });
            
            // Edit and delete buttons
            document.querySelectorAll('.edit-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const categoryName = this.getAttribute('data-category') || 'la categoría';
                    alert(`Editar ${categoryName}`);
                });
            });
            
            document.querySelectorAll('.delete-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const categoryName = this.getAttribute('data-category') || 'esta categoría';
                    if(confirm(`¿Estás seguro de que quieres eliminar ${categoryName}?`)) {
                        alert(`Categoría ${categoryName} eliminada`);
                    }
                });
            });
        });
    