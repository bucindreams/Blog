// Ganti dengan API key yang sesuai
    const apiKeys = ['w5LWkAqPO6Vr', 'WKNf8BW8q6wE', 'auZoQrmWB5FQ', 'kA1QhCBQSu3T', '63i2tuDHWmNp', 'COn1LjmNRNUP', 'arda100506', 'ekWyLli1o41i', 'iO9A6ICypm4E' ];

    function cekAkses() {
      // Mengambil input dari pengguna
      const userInput = prompt('Masukkan API Key:');

      // Memeriksa apakah API key yang dimasukkan sesuai
      if (apiKeys.includes(userInput)) {
      // Menampilkan semua tombol dengan kelas 'button2' setelah API key valid
        const tombol2 = document.querySelectorAll('.boldArda');
        tombol2.forEach(tombol => {
          tombol.style.display = 'inline-block';
        });
        alert('Akses diizinkan!'); // Gantilah dengan logika akses web Anda
      } else {
        alert('API Key tidak valid. Akses ditolak.');
      }
    }