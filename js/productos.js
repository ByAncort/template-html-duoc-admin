
        // Funcionalidad básica para la página
        document.addEventListener('DOMContentLoaded', function() {
            // Botón de nuevo producto
            document.querySelector('.btn-primary').addEventListener('click', function() {
                alert('Funcionalidad de nuevo producto');
            });
            
            // Botones de editar
            document.querySelectorAll('.edit-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const productName = this.closest('tr').querySelector('.product-info h4').textContent;
                    alert(`Editar producto: ${productName}`);
                });
            });
            
            // Botones de eliminar
            document.querySelectorAll('.delete-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const productName = this.closest('tr').querySelector('.product-info h4').textContent;
                    if(confirm(`¿Estás seguro de que quieres eliminar ${productName}?`)) {
                        alert(`Producto ${productName} eliminado`);
                    }
                });
            });
        });
