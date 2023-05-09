import { useParams } from "react-router-dom";
import { products } from "../database/database";
import { StyledCardDetail } from "../styles/CardDetailsStyle";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";

export const ProductDetails = () => {
  const { id } = useParams();
  const { choosedSize, setChoosedSize, choosedColor, setChoosedColor } =
    useContext(ProductContext);
  const productPage = products.find((product) => product.id == id);

  useEffect(()=> {
    setChoosedColor(0)
  },[])
  
  const [imgIndex, setImgIndex] = useState<number>(0);
console.log(choosedColor)
  const pickedSize = (i: number) => {
    const size = productPage?.size[i];
    setChoosedSize(size!);
  };
  const pickedColor = (i: number) => {
    const color = i;
    setChoosedColor(color);
  };
  return (
    <StyledCardDetail>
      <div className="imgsContainer">
        <ul>
          {productPage?.img[`${String(choosedColor)}`].map((img, i) => (
            <li key={i} onClick={() => setImgIndex(i)}>
              <img src={`../${img}`} alt="" />
            </li>
          ))}
        </ul>
        <img src={`../${productPage?.img[`${String(choosedColor)}`][imgIndex]}`} alt="" />
      </div>
      <div className="productInfo">
        <h3>{productPage?.name}</h3>
        <div className="sizeContainer">
          <p>SIZE:</p>
          <ul>
            {productPage?.size.map((size, i) => (
              <li
                id={choosedSize === size ? "pickedSize" : ""}
                key={i}
                onClick={() => pickedSize(i)}
              >
                {size}
              </li>
            ))}
          </ul>
        </div>
        <div className="colorContainer">
          <p>COLOR:</p>
          <ul>
            {productPage?.color.map((color, i) => (
              <li
                id={choosedColor === i ? "pickedColor" : ""}
                className={productPage.color[i]}
                key={i}
                onClick={() => pickedColor(i)}
              >
              </li>
            ))}
          </ul>
        </div>
      </div>
    </StyledCardDetail>
  );
};
