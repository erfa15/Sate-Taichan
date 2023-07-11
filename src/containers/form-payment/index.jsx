import Image from "next/image";
import * as Yup from "yup";
// utils
import { whatsappMessage } from "@/src/utils";
// hooks
import { useRouter } from "next/router";
import { useFormik } from "formik";
// component
import { Button, TextInput } from "@/src/components";
// style
import styles from "./form-payment.module.scss";

const dataInit = [
  { label: "Nama", id: "name", placeholder: "Masukkan nama..." },
  { label: "Alamat", id: "alamat", placeholder: "Masukkan alamat..." },
  { label: "E-mail", id: "email", placeholder: "Masukkan email..." },
  { label: "Nomor Telepon", id: "phone", placeholder: "ex: 0859999999" },
  { label: "Catatan", id: "notes" },
];

export default function FormPayment({ productCart }) {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      name: "",
      alamat: "",
      email: "",
      phone: "",
      notes: "",
    },
    onSubmit: (values) => {
      whatsappMessage({ productCart, user: values });
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Nama harus diisi"),
      alamat: Yup.string().required("Alamat harus diisi"),
      email: Yup.string()
        .required("Email harus diisi")
        .email("Email tidak valid"),
      phone: Yup.string()
        .required("Nomor telepon harus diisi")
        .matches(/^[0-9]{10,12}$/, "Nomor telepon tidak valid"),
    }),
  });

  const handleCanceledOrder = () => {
    const url = "/products";
    router.push(url);
  };

  const displayForm = dataInit.map((item, i) => {
    return (
      <TextInput
        key={i}
        label={item.label}
        id={item.id}
        name={item.id}
        value={formik.values[item.id]}
        onChange={formik.handleChange}
        placeholder={item.placeholder}
        required={item.id === "notes" ? false : true}
        type={item.id === "notes" ? "textarea" : "text"}
        errors={formik.errors[item.id]}
      />
    );
  });

  return (
    <div className={styles.form_payment}>
      <h1>Form Pembelian</h1>
      <div className={styles.form_payment__content}>
        <form
          className={styles.form_payment__form}
          onSubmit={formik.handleSubmit}
        >
          {displayForm}
          <div className={styles.form_payment__button}>
            <Button type="submit" disabled={formik.isValid ? false : true}>
              Bayar
            </Button>
            <Button styled="secondary" onClick={() => handleCanceledOrder()}>
              Batal
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
