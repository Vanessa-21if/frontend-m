// Configura la URL del backend basada en el entorno
const API_URL = window.location.hostname === 'localhost' 
    ? 'http://localhost:8000' 
    : 'https://hce-backend.onrender.com'; // Reemplaza con tu URL real del backend

// Ejemplo de función para registrar medicamento
async function registrarMedicamento() {
    const medicamento = {
        paciente_id: document.getElementById('paciente_id').value,
        // ... otros campos del formulario
    };

    try {
        const response = await fetch(`${API_URL}/medicamentos/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(medicamento)
        });
        
        if (!response.ok) throw new Error('Error al registrar');
        
        const data = await response.json();
        console.log('Medicamento registrado:', data);
        alert('Registro exitoso!');
    } catch (error) {
        console.error('Error:', error);
        alert('Error al registrar medicamento');
    }
}

// Función para cargar medicamentos
async function cargarMedicamentos(pacienteId) {
    try {
        const response = await fetch(`${API_URL}/medicamentos/${pacienteId}`);
        if (!response.ok) throw new Error('Error al cargar');
        
        const medicamentos = await response.json();
        mostrarMedicamentos(medicamentos);
    } catch (error) {
        console.error('Error:', error);
    }
}
