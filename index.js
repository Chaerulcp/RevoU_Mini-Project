function sendEmail() {
  // Ambil nilai dari input form
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var pilihan = document.getElementById("pilihan").value;

  // Periksa apakah input form kosong
  if (name === "" || email === "" || pilihan === "") {
    alert("Harap isi semua kolom");
    return; // Jangan jalankan fungsi sendEmail() jika input form kosong
  }

  // Kirim email jika input form telah diisi
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "chaerulcp.me@gmail.com",
    Password: "32F9E4CBE4FFF617CBD501A48D2525F6E5F5",
    To: "chaerulcp.me@gmail.com",
    From: "chaerulcp.me@gmail.com",
    Subject: "Pesan Dari Form Web IND Fresh",
    Body:
      "Nama : " + name + "<br>Email : " + email + "<br>Pilihan : " + pilihan,
  }).then(alert("Pesan Terkirim"));
}
