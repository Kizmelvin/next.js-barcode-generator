import { useState } from "react";
import styles from "../styles/Home.module.css";
import BarcodeComponent from "../Components/Barcode";

const IndexPage = () => {
  const [value, setValue] = useState(null);

  const randomNumbers = (length) => {
    return Math.floor(
      Math.pow(10, length - 1) +
        Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1) - 1)
    );
  };

  return (
    <div className={styles.container}>
      <h2>Generate Shipping Label Barcode with Random Numbers</h2>
      <div className={styles.main}>
        <div className={styles.btn}>
          <button onClick={() => setValue(randomNumbers(15))}>Generate</button>
        </div>
        <BarcodeComponent value={value} setValue={setValue} />
      </div>
    </div>
  );
};
export default IndexPage;
