
        document.addEventListener('DOMContentLoaded', function() {
            // Modal functionality
            const modal = document.getElementById('customerDetailModal');
            const closeBtn = document.querySelector('.close-btn');
            
            // View customer buttons
            document.querySelectorAll('.view-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const customerId = this.getAttribute('data-customer');
                    modal.style.display = 'flex';
                });
            });
            
            // Close modal
            function closeModal() {
                modal.style.display = 'none';
            }
            
            closeBtn.addEventListener('click', closeModal);
            
            // Close modal when clicking outside
            window.addEventListener('click', function(event) {
                if (event.target === modal) {
                    closeModal();
                }
            });
            
            // Modal tabs
            const modalTabs = document.querySelectorAll('.modal-tab');
            const modalTabContents = document.querySelectorAll('#info-tab, #orders-tab, #activity-tab');
            
            modalTabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    const tabId = this.getAttribute('data-tab');
                    
                    // Remove active class from all tabs
                    modalTabs.forEach(t => t.classList.remove('active'));
                    modalTabContents.forEach(content => content.style.display = 'none');
                    
                    // Add active class to clicked tab
                    this.classList.add('active');
                    
                    // Show corresponding content
                    document.getElementById(`${tabId}-tab`).style.display = 'block';
                });
            });
            
            // Edit buttons
            document.querySelectorAll('.edit-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const customerId = this.getAttribute('data-customer');
                    alert(`Editar cliente #CLI-${customerId}`);
                });
            });
            
            // Delete buttons
            document.querySelectorAll('.delete-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const customerId = this.getAttribute('data-customer');
                    if(confirm(`¿Estás seguro de que quieres eliminar al cliente #CLI-${customerId}?`)) {
                        alert(`Cliente #CLI-${customerId} eliminado`);
                    }
                });
            });
            
            // Filter functionality
            document.querySelectorAll('.filter-select').forEach(select => {
                select.addEventListener('change', function() {
                    alert(`Filtrando por: ${this.value}`);
                });
            });
        });
