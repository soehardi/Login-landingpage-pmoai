// Fungsi untuk menangani login (simulasi)
function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const remember = document.getElementById('remember').checked;
    const infoDiv = document.getElementById('demoInfo');

    // Simulasi validasi sederhana
    if (email === "" || password === "") {
        infoDiv.innerHTML = "⚠️ Harap isi email dan password!";
        infoDiv.style.background = "rgba(220,53,69,0.7)";
        setTimeout(() => {
            infoDiv.style.background = "rgba(0,0,0,0.2)";
            infoDiv.innerHTML = "✨ Demo: gunakan email@example.com / password: 12345678";
        }, 2000);
        return;
    }

    // Contoh demo login — hanya untuk tampilan interaktif
    if (email === "email@example.com" && password === "12345678") {
        infoDiv.innerHTML = "✅ Login berhasil! (Mode demo)";
        infoDiv.style.background = "rgba(40,167,69,0.7)";
        
        // Simpan session sederhana jika "Ingat saya" dicentang
        if (remember) {
            localStorage.setItem('demoEmail', email);
        } else {
            localStorage.removeItem('demoEmail');
        }
        
        // Reset notifikasi setelah 2.5 detik
        setTimeout(() => {
            infoDiv.style.background = "rgba(0,0,0,0.2)";
            infoDiv.innerHTML = "✨ Demo: email@example.com / 12345678";
        }, 2500);
    } else {
        infoDiv.innerHTML = "❌ Email atau password salah. Coba: email@example.com / 12345678";
        infoDiv.style.background = "rgba(220,53,69,0.7)";
        setTimeout(() => {
            infoDiv.style.background = "rgba(0,0,0,0.2)";
            infoDiv.innerHTML = "✨ Demo: gunakan email@example.com / password: 12345678";
        }, 3000);
    }
}

// Pasang event listener setelah halaman dimuat sepenuhnya
document.addEventListener('DOMContentLoaded', () => {
    // Dapatkan form dan pasang handler
    const form = document.getElementById('loginForm');
    if (form) {
        form.addEventListener('submit', handleLogin);
    }
    
    // Isi otomatis jika pernah centang "Ingat saya" (demo)
    const savedEmail = localStorage.getItem('demoEmail');
    if (savedEmail) {
        const emailInput = document.getElementById('email');
        const rememberCheck = document.getElementById('remember');
        if (emailInput && rememberCheck) {
            emailInput.value = savedEmail;
            rememberCheck.checked = true;
        }
    }
});