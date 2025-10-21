import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <h1>This is Home Page</h1>
      <Image 
        src={'/image1.jpeg'}
        alt="sample image"
        width={300} height={300} 
      />
      <Image 
        src={'/image2.jpeg'}
        alt="sample image"
        width={300} height={300} 
      />
      <Image 
        src={'/image3.jpeg'}
        alt="sample image"
        width={300} height={300} 
      />
    </div>
  );
}