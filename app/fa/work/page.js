import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { projects } from "@/lib/projects";

export const metadata = { title: "آثار منتخب", description: "مطالعات مفهومی معماری، ایده‌های فضایی و پژوهش ماده در استودیو روور.", alternates: { canonical: "/fa/work", languages: { en: "/work", fa: "/fa/work" } } };

export default function PersianWork() {
  const titles = ["خانه بر فراز شیب","حیاط آرام","مطالعه‌ی ماده"];
  return <><Navbar /><main id="main-content" className="work-page fa-inner">
    <section className="work-page__intro section-wrap"><p className="eyebrow">ROVOR / آثار منتخب</p><h1>ایده‌هایی در مسیر<br /><em>شکل‌گیری.</em></h1><p>مجموعه‌ای از ایده‌های معماری و کاوش‌های بصری در زمینه‌ی فضا، نور و ماده.</p><span className="work-page__count">۰۳ / پروژه‌ها و مطالعات</span></section>
    <section className="work-page__grid section-wrap">{projects.map((p,i)=><article className="project-card" key={p.slug}><Link className="project-card__image-wrap" href="/fa/contact"><img src={p.image} alt={titles[i]} className="project-card__image" loading="lazy" /></Link><div className="project-card__info"><div><p className="project-card__number">۰{i+1} / مطالعه‌ی مفهومی</p><h3><Link href="/fa/contact">{titles[i]}</Link></h3></div><span className="project-card__year">مطالعه</span></div></article>)}</section>
    <section className="work-page__note section-wrap"><p>هر پروژه با یک پرسش آغاز می‌شود؛ هر مطالعه دعوتی است برای دقیق‌تر دیدن.</p><Link href="/fa/contact" className="text-link">گفتگو درباره‌ی پروژه <span>↖</span></Link></section>
    <p className="fa-disclaimer">این موارد مطالعات و ایده‌های مفهومی هستند و به‌عنوان پروژه‌های ساخته‌شده معرفی نمی‌شوند.</p>
  </main><Footer /></>;
}
