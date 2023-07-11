export default function whatsappMessage({ productCart, user }) {
  const phoneNumber = "+6285920687294"; // Nomor telepon tujuan
  let message = `Halo, Saya ${user.name},\n\n Data diri : Alamat: ${user.alamat},\n\n Email: ${user.email},\n\n Nomor Hp : ${user.phone},\n\n Notes: ${user.notes},\n\n ingin memesan produk berikut: \n\n`;
  productCart.forEach((product) => {
    message += `Produk: ${product.title}\n Jumlah: ${product.quantity}\n\n`;
  });
  const encodedMessage = encodeURIComponent(message);
  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

  window.open(url);
}
