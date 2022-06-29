import Image from "next/image";
import css from "./hero.module.css";

export default function Hero() {
    return (
        <section className={css.Hero}>
            <div className={css.Hero_Header}>
                <Image className={css.Hero_Header__Image} src="/profile.jpg" alt="A picture of a developer and a dog." width={200} height={200}/>
            </div>
            <div className={css.Hero_Content}>
                <h1 className={css.Hero_Content__Title}>Hi, I&apos;m Dewald</h1>
                <p className={css.Hero_Content__Tag}>I blog about my web development learning journey</p>
            </div>
        </section>
    );
}