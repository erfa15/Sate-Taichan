import Link from "next/link";
import styles from "./table-admin.module.scss";
import { Button } from "@/src/components";
import { useMutation } from "@tanstack/react-query";
import { truncateText } from "@/src/utils/truncateText";
import { RiDeleteBin6Line, RiRefreshLine } from "react-icons/ri";
import { deleteProduct } from "@/src/services/api";

export default function TableAdmin(props) {
  const { data, toggle, refetch, isRefetching, setMessage } = props;
  const { mutate, isLoading } = useMutation(
    (productId) => deleteProduct(productId),
    {
      onSuccess: async () => {
        refetch();
        setMessage("Product Deleted Successfully");
      },
      onError: (error) => {
        setMessage(`Error deleting product: ${error.message}`);
      },
    }
  );

  const handleDelete = (productId) => {
    mutate(productId);
  };

  if (!data) return <h1>Loading...</h1>;

  return (
    <div className={styles.table_admin__container}>
      <div className={styles.table_admin__header}>
        <div className={styles.table_header__content}>
          <h3>Dashboard</h3>
          <RiRefreshLine
            onClick={() => refetch()}
            style={{ cursor: "pointer", fontSize: "20px" }}
            className={`${isRefetching ? styles.rotate_icon : null}`}
          />
          {isLoading && <p>Deleting Products..</p>}
        </div>
        <Button
          className={styles.table_admin__button}
          onClick={() => toggle((prevState) => !prevState)}
        >
          Add Product
        </Button>
      </div>
      <table className={styles.table_admin}>
        <thead>
          <tr className={styles.table_head}>
            <th>No</th>
            <th>Title</th>
            <th>Price</th>
            <th>Desc</th>
            <th>Image Link</th>
            <th>Control</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, i) => {
            return (
              <tr key={i} className={styles.table_row}>
                <td>{i + 1}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.desc}</td>
                <td>
                  <Link href={item.image} target="_blank">
                    {truncateText(item.image, 20)}
                  </Link>
                </td>
                <td className={styles.table_row__controller}>
                  <RiDeleteBin6Line
                    className={styles.table_row__icon_delete}
                    onClick={() => handleDelete(item.id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
