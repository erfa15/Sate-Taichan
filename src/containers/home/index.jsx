import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
// style
import styles from "./home.module.scss";
// component
import { Button } from "@/src/components";
import useGetAllCategories from "@/src/hooks/useGetAllCategories";

export default function Home() {
  const { categories } = useGetAllCategories();
  const router = useRouter();

  const onNavigateTo = (url) => {
    router.push(url);
  };

  return (
    <div className={styles.home}>
      <div>
        <div className={styles.home__content}>
          <h1 className={styles.home__title}>
            Sate Kreasi Anak Muda!
            <br /> Sate Taichan Madura Gaes!
          </h1>
          <p className={styles.home__desc}>
            Sate Taichan merupakan salah satu jenis sate populer di kalangan
            anak muda Indonesia.
            <br /> Tahukah kamu sate taichan ini ternyata bukan asli Jepang,
            China, maupun Korea Selatan, lho.
            <br /> Sate ini merupakan kreasi dari sate madura.
          </p>
        </div>
        <div className={styles.home__button_container}>
          <Button onClick={() => onNavigateTo("/products")}>
            Pergi Belanja
          </Button>
          <Button styled="secondary" onClick={() => onNavigateTo("/about")}>
            Tentang Kami
          </Button>
        </div>
      </div>
      <Image src="/imgs/LogoSate.svg" alt="test" width={380} height={380} />
    </div>
  );
}
