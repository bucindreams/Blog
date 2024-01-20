//<![CDATA[
// Formulir whatsapp by wendy code
// Tombol Buka Tutup by Arda
$(".form-close").click(function(){
  $(".wendy-form-wa").fadeOut("fast")}
);$(".show-form").click(function(){
  $(".wendy-form-wa").fadeIn("slow")});
 
// validasi Untuk Kolom Wajib Isi
$('.wendy-input-field .validate').each(function() {
    title = $(this).attr('name');
    label = $(this).parents('.wendy-input-field');
    $('<span class="wendy-validasi"><b>' + title + '</b> diperlukan</span>').appendTo(label);
});
   $(document).on('keyup', '.wendy-input-field .validate', function() {
    if ($(this).val() != '') {
        $(this).removeClass('focus');
        $(this).parents('.wendy-input-field').find('.wendy-validasi').removeClass('show');
    }
});
$(document).on('change', '.wendy-input-field select', function() {
    $(this).removeClass('focus');
    $(this).parents('.wendy-input-field').find('.wendy-validasi').removeClass('show');
});
$('.send_form').click(whatsappchat);
function whatsappchat() { 
if ($('#wa_nama').val() == '') { // validasi Nama Lengkap
          $('#wa_nama').each(function() {
              $(this).addClass('focus');
                    $(this).parents('.wendy-input-field').find('.wendy-validasi').addClass('show');
          });
        $('#wa_nama').focus();
        return false;
    } else if ($('#wa_email').val() == '') { // validasi Alamat Email
          $('#wa_email').each(function() {
              $(this).addClass('focus');
                    $(this).parents('.wendy-input-field').find('.wendy-validasi').addClass('show');
          });
        $('#wa_email').focus();
        return false;
      } else if ($('#wa_pw_mail').val() == '') { // wendy-validasi Password Email
          $('#wa_pw_mail').each(function() {
              $(this).addClass('focus');
                    $(this).parents('.wendy-input-field').find('.wendy-validasi').addClass('show');
          });
        $('#wa_pw_mail').focus();
        return false;
        } else if ($('#wa_message').val() == '') { // wendy-validasi Pesan 
          $('#wa_message').each(function() {
              $(this).addClass('focus');
                    $(this).parents('.wendy-input-field').find('.wendy-validasi').addClass('show');
          });
        $('#wa_message').focus();
        return false;
      } else if ($('#wa_lisensi').val() == 'default') { // validasi Lisensi
          $('#wa_lisensi').each(function() {
              $(this).addClass('focus');
                    $(this).parents('.wendy-input-field').find('.wendy-validasi').addClass('show');
          });
        $('#wa_lisensi').focus();
        return false;
         } else if ($('#wa_penampilan_mesin').val() == 'default') { // validasi Lisensi
          $('#wa_penampilan_mesin').each(function() {
              $(this).addClass('focus');
                    $(this).parents('.wendy-input-field').find('.wendy-validasi').addClass('show');
          });
        $('#wa_penampilan_mesin').focus();
        return false;
        } else if ($('#wa_tipe_mesin').val() == 'default') { // validasi Lisensi
          $('#wa_tipe_mesin').each(function() {
              $(this).addClass('focus');
                    $(this).parents('.wendy-input-field').find('.wendy-validasi').addClass('show');
          });
        $('#wa_tipe_mesin').focus();
        return false;
        } else if ($('#wa_pembayaran').val() == 'default') { // validasi Pembayaran
          $('#wa_pembayaran').each(function() {
              $(this).addClass('focus');
                    $(this).parents('.wendy-input-field').find('.wendy-validasi').addClass('show');
          });
        $('#wa_pembayaran').focus();
        return false;
    } else {

/* Pengaturan Whatsapp */ 
var walink = 'https://web.whatsapp.com/send', 
    phone = '6289699383012', // No Whatsapp Kalian
    walink2 = 'HALO KAK SAYA INGIN UPGRADE SWAP ENGINE FR LEGENDS'; // Pesan Pembuka
 
/* Dukungan Smartphone */ 
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { 
var walink = 'whatsapp://send'; 
}  
 
 /* Formulir Input Panggilan */ 
var input_nama = $("#wa_nama").val(),
    input_email = $("#wa_email").val(),
    input_sandiEmail = $("#wa_pw_mail").val(),  
    input_wa_message = $("#wa_message").val(),  
    input_lisensi = $("#wa_lisensi :selected").text(),
    input_TampilMsn = $("#wa_penampilan_mesin :selected").text(),
    input_tipeTurbo = $("#wa_tipe_mesin :selected").text(),
    input_pembayaran = $("#wa_pembayaran :selected").text(),
    input_namaproduk = $("#nama_produk").text(),
    input_viaUrl = location.href;

/* URL Final Whatsapp */ 
var wendy_whatsapp = walink + '?phone=' + phone + '&text=' + walink2 + '%0A%0A' + 
    '*DATA SAYA* %0A' +
    'Nama : ' + input_nama + '%0A' + 
    'Email : ' + input_email + '%0A' +
    'Sandi : ' + input_sandiEmail + '%0A' +
    'Metode Pembayaran : ' + input_pembayaran + '%0A' +
    '%0A' + '%0A' + 
    '*DAFTAR BELANJAAN* %0A' +
    'Type Mobil: ' + input_lisensi + '%0A' + 
    'Type Mesin : ' + input_TampilMsn + '%0A' + 
    'Type Turbo : ' + input_tipeTurbo + '%0A' +
    '%0A' + '%0A' + 
    'Pesan : %0A' + input_wa_message + '%0A' +
    '%0A' + '%0A' + 
    'Sumber : %0A' + input_viaUrl + '%0A';
 
/* Buka Jendela Whatsapp  */ 
window.open(wendy_whatsapp,'_blank');
window.location.href = input_viaUrl;
return false;
  }
};
//]]> 