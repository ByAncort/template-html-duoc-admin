
        document.addEventListener('DOMContentLoaded', function() {
            // Modal functionality
            const modal = document.getElementById('orderDetailModal');
            const closeBtn = document.querySelector('.close-btn');
            
            // View order buttons
            document.querySelectorAll('.view-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const orderId = this.getAttribute('data-order');
                    modal.style.display = 'flex';
                    document.querySelector('.modal-header h3').textContent = `Detalle del Pedido #ORD-${orderId}`;
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
            
            // Edit buttons
            document.querySelectorAll('.edit-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const orderId = this.getAttribute('data-order');
                    alert(`Editar estado del pedido #ORD-${orderId}`);
                });
            });
            
            // Filter functionality
            document.querySelectorAll('.filter-select').forEach(select => {
                select.addEventListener('change', function() {
                    alert(`Filtrando por: ${this.value}`);
                });
            });
        });
 