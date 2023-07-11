import React from "react";
import Image from "next/image";
import styles from "./about.module.scss";

export default function About() {
  return (
    <>
      <div className={styles.about__images}>
        <Image
          src={"/imgs/bakar_sate.jpeg"}
          alt="test"
          fill
          className={styles.about__image}
        />
      </div>
      <div className={styles.about__wrapper}>
        {/* left */}
        <div className={styles.about__container}>
          <h1 className={styles.about__title}>Sate Taichan Bu Cin.</h1>
          <p className={styles.about__desc}>
            Kami adalah bisnis sate Taichan Bucin yang baru saja berdiri pada
            tahun 2023. Dengan semangat yang kuat dan cinta kami terhadap sate
            Taichan, kami memutuskan untuk menciptakan merek yang unik dan
            berbeda di dunia kuliner. Sebagai penggemar sate Taichan yang
            sejati, kami ingin memberikan pengalaman kuliner yang istimewa
            kepada pecinta sate Taichan. Kami berkomitmen untuk menjaga kualitas
            dan keaslian cita rasa sate Taichan, sambil menambahkan sentuhan
            kreativitas dan inovasi yang membedakan kami dari yang lain.
            Meskipun kami merupakan bisnis yang baru berdiri, kami memiliki tim
            yang berpengalaman dan berdedikasi untuk menciptakan sate Taichan
            Bucin yang istimewa. Dengan menggunakan bahan-bahan berkualitas
            tinggi, kami memastikan bahwa setiap potongan ayam yang kami sajikan
            adalah segar dan lezat. Kami juga meracik bumbu khusus kami sendiri
            untuk memberikan rasa yang khas dan menggugah selera. Di `sate
            Taichan Bucin``, kami menghargai keunikan dan kelezatan dalam
            hidangan kami. Kami menghadirkan berbagai varian sate Taichan yang
            inovatif, mulai dari sate Taichan pedas hingga sate Taichan dengan
            saus spesial yang khas. Kami berusaha untuk memberikan pilihan yang
            beragam kepada pelanggan kami agar mereka dapat menikmati sate
            Taichan sesuai dengan selera mereka. Selain dari hidangan yang
            lezat, kami juga mengutamakan pelayanan yang ramah dan profesional
            kepada setiap pelanggan. Kami ingin menciptakan lingkungan yang
            menyenangkan dan nyaman di restoran kami, sehingga pelanggan dapat
            merasa dihargai dan merasa seperti bagian dari keluarga kami.
            Sebagai bisnis yang baru berdiri, kami sangat menghargai umpan balik
            pelanggan. Kami selalu terbuka untuk saran dan kritik yang
            konstruktif demi meningkatkan kualitas hidangan dan pelayanan kami.
            Kami berjanji untuk terus berinovasi dan memberikan pengalaman
            kuliner yang semakin baik kepada pelanggan kami. Di `sate Taichan
            Bucin`, kami merasa bangga atas pencapaian kami dalam waktu yang
            singkat. Kami berharap dapat terus tumbuh dan berkembang menjadi
            destinasi favorit bagi pecinta sate Taichan. Kami berkomitmen untuk
            memberikan pengalaman kuliner yang tak terlupakan dan menjadikan
            sate Taichan Bucin kami sebagai pilihan utama di hati para bucin
            sate Taichan.
          </p>
        </div>
        <hr />
        <div className={styles.about__container}>
          <h1 className={styles.about__title}>Apa itu Sate Taichan ?</h1>
          <p className={styles.about__desc}>
            Sate Taichan adalah hidangan sate yang berasal dari Indonesia, yang
            terkenal karena rasa pedas dan asinnya. `Taichan`` merupakan
            singkatan dari `Thai Iced Tea` yang berasal dari Thailand, namun
            dalam konteks Sate Taichan, istilah ini digunakan untuk
            menggambarkan rasa pedas yang mirip dengan hidangan Thailand. Sate
            Taichan terdiri dari potongan-potongan daging ayam yang ditusuk
            menggunakan tusuk sate dan kemudian dipanggang di atas bara api atau
            grill. Dalam proses pemanggangan, daging ayam ini biasanya hanya
            dibumbui dengan garam dan lada sehingga menghasilkan rasa yang
            sederhana, tetapi lezat. Yang membedakan Sate Taichan dari sate ayam
            biasa adalah saus yang menyertainya. Setelah daging ayam matang,
            sate ini disajikan dengan saus pedas yang terbuat dari campuran
            cabai rawit, bawang putih, garam, air jeruk nipis, dan kadang-kadang
            ditambahkan sedikit minyak wijen atau kecap manis. Saus pedas ini
            memberikan cita rasa yang kuat dan pedas pada hidangan ini. Sate
            Taichan biasanya disajikan dengan nasi dan bahan pelengkap lainnya
            seperti mentimun, tomat, kol, atau daun kemangi. Hidangan ini
            terkenal di Indonesia, terutama di daerah Jakarta dan sekitarnya,
            dan telah menjadi populer karena kelezatannya yang unik dan
            kepedasannya yang dapat disesuaikan dengan selera masing-masing.
          </p>
        </div>
      </div>
    </>
  );
}
