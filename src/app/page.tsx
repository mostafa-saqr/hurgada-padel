import Image from "next/image";
import logo from "./logo.jpg";
import style from "./page.module.css";
export default function Home() {
  return (
    <div className={style.bg}>
      <div className={style.logoPanel}>
        <Image src={logo} width={200} alt="logo" className={style.logo} />
        <h3 className={style.slogan}>Play with passion</h3>
      </div>
      <div className={style.mask}></div>
    </div>
  );
}
