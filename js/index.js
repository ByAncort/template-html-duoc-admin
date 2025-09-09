
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Reset errores
            document.getElementById('emailError').textContent = '';
            document.getElementById('passwordError').textContent = '';
            
            let isValid = true;
            
            // Validar email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                document.getElementById('emailError').textContent = 'Por favor, ingresa un email válido.';
                isValid = false;
            }
            
            // Validar contraseña (mínimo 6 caracteres)
            if (password.length < 6) {
                document.getElementById('passwordError').textContent = 'La contraseña debe tener al menos 6 caracteres.';
                isValid = false;
            }
            
            if (isValid) {
                // Simular inicio de sesión exitoso
                const successMessage = document.getElementById('successMessage');
                successMessage.style.display = 'block';
                
                // Redirigir después de 2 segundos
                setTimeout(() => {
                    window.location.href = './dashboard.html'; // Corregido: usar window.location.href
                }, 2000);
                
                // Resetear formulario
                this.reset();
            }
        });
