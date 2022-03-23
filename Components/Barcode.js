import { useRef } from "react";
import styles from "../styles/Home.module.css";
import Barcode from "react-barcode";

const BarcodeComponent = ({ value, setValue }) => {
  const imgRef = useRef(null);
  const format = "CODE128";

  const downloadBarcode = () => {
    const preface = '<?xml version="1.0" standalone="no"?>\r\n';
    const element = imgRef.current.children[0].outerHTML;
    const imgBlob = new Blob([preface, element], {
      type: "image/svg+xml;charset=utf-8",
    });
    const imgUrl = URL.createObjectURL(imgBlob);
    const downloadLink = document.createElement("a");
    downloadLink.href = imgUrl;
    downloadLink.download = "barcode.svg";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    setValue(null);
  };

  return (
    <div className={styles.result} ref={imgRef}>
      <Barcode
        format={format}
        value={`${value}`}
        height={120}
        font="Avenir Next"
        fontOptions="700"
      />
      {value !== null && <button onClick={downloadBarcode}>Download</button>}
    </div>
  );
};
export default BarcodeComponent;
