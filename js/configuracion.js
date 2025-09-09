
        document.addEventListener('DOMContentLoaded', function() {
            // Tab functionality
            const tabButtons = document.querySelectorAll('.tab-btn');
            const tabContents = document.querySelectorAll('.settings-content');
            
            tabButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const tabId = button.getAttribute('data-tab');
                    
                    // Remove active class from all buttons and contents
                    tabButtons.forEach(btn => btn.classList.remove('active'));
                    tabContents.forEach(content => content.style.display = 'none');
                    
                    // Add active class to clicked button
                    button.classList.add('active');
                    
                    // Show corresponding content
                    document.getElementById(`${tabId}-tab`).style.display = 'block';
                });
            });
            
            // Switch toggles
            document.querySelectorAll('.switch input').forEach(switchInput => {
                switchInput.addEventListener('change', function() {
                    const settingName = this.parentElement.parentElement.querySelector('h4').textContent;
                    const status = this.checked ? 'activada' : 'desactivada';
                    console.log(`Configuración ${settingName} ${status}`);
                });
            });
            
            // Payment method selection
            document.querySelectorAll('.payment-method').forEach(method => {
                method.addEventListener('click', function() {
                    document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('active'));
                    this.classList.add('active');
                });
            });
            
            // Form submission
            document.querySelectorAll('.btn-primary').forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    const tabName = this.closest('.settings-content').id.replace('-tab', '');
                    alert(`Configuración de ${tabName} guardada correctamente`);
                });
            });
            
            // File upload buttons
            document.querySelectorAll('.file-upload-btn').forEach(button => {
                button.addEventListener('click', function() {
                    alert('Funcionalidad de subida de archivos');
                });
            });
        });
