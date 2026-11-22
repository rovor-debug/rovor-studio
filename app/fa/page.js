import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StudioExperience from "@/components/StudioExperience";
import SpatialObject from "@/components/SpatialObject";
import FilmSection from "@/components/FilmSection";
import { projects } from "@/lib/projects";
import Link from "next/link";

export default function PersianHome() {
  return (
    <StudioExperience>
      <Navbar />
      <main id="main-content" className="fa-home">
        <section className="hero" id="home">
          <div className="hero__image" aria-hidden="true" /><div className="hero__veil" />
          <div className="hero__topline"><span>مستقر در ایران</span><span>استودیوی مستقل · همکاری در سراسر جهان</span></div>
          <div className="hero__content">
            <p className="eyebrow hero__eyebrow">ROVOR / معماری و طراحی فضا</p>
            <h1>فضا،<br /><em>با نگاهی</em><br />متفاوت<span className="hero__period">.</span></h1>
            <div className="hero__bottom">
              <p>فضاهایی سنجیده و معنادار خلق می‌کنیم؛ ریشه‌گرفته از بستر، شکل‌گرفته با ماده و زنده در نور.</p>
              <a className="hero__link" href="#work"><span>مشاهده آثار منتخب</span><b>↙</b></a>
            </div>
          </div>
          <div className="hero__vertical">فضا / ماده / نور</div><span className="hero__index">۰۱ / ۰۴</span>
          <a className="hero__scroll" href="#studio"><span>برای کشف بیشتر حرکت کنید</span><i /></a>
        </section>
        <div className="ticker" aria-label="معماری و طراحی فضای روور"><div className="ticker__track"><span>معماری</span><i>✳</i><span>طراحی داخلی</span><i>✳</i><span>هویت فضایی</span><i>✳</i><span>ماده و اتمسفر</span><i>✳</i><span>معماری</span><i>✳</i><span>طراحی داخلی</span><i>✳</i></div></div>
        <section className="intro section-wrap" id="studio">
          <div className="section-kicker"><span>۰۱</span><span>استودیو</span><i /></div>
          <div className="intro__body">
            <h2>بهترین فضاها برای جلب توجه تلاش نمی‌کنند؛ <em>شایسته‌ی آن می‌شوند.</em></h2>
            <div className="intro__note"><span className="intro__note-index">نگاهی سنجیده به آفرینش فضا</span><p>روور یک استودیوی مستقل معماری و طراحی فضاست. در مقیاس‌های گوناگون کار می‌کنیم تا مکان‌هایی روشن، معنادار و ماندگار خلق کنیم؛ جایی که هر خط، سطح و گشودگی دلیلی برای حضور دارد.</p><Link className="text-link" href="/fa/studio">نگاه و رویکرد ما <span>↖</span></Link></div>
          </div>
          <div className="intro__graphic" aria-hidden="true"><span>R</span><i /><b>فرم در خدمت احساس</b></div>
        </section>
        <SpatialObject />
        <section className="work section-wrap" id="work">
          <div className="section-heading"><div><div className="section-kicker"><span>۰۲</span><span>آثار منتخب</span><i /></div><h2 className="section-title">فضاهایی برای<br /><em>به‌خاطر سپردن.</em></h2></div><p className="section-heading__aside">مجموعه‌ای از مطالعات مفهومی معماری<br /><span>فضا / نور / ماده</span></p></div>
          <div className="project-grid">{projects.map((p,i)=><article className="project-card" key={p.slug}><Link className="project-card__image-wrap" href={`/fa/projects/${p.slug}`}><img src={p.image} alt={p.title} className="project-card__image" loading="lazy" /></Link><div className="project-card__info"><div><p className="project-card__number">۰{i+1} / مطالعه مفهومی</p><h3><Link href={`/fa/projects/${p.slug}`}>{["خانه بر فراز شیب","حیاط آرام","مطالعه‌ی ماده"][i]}</Link></h3></div><span className="project-card__year">مطالعه</span></div></article>)}</div>
          <div className="work__foot"><span>۰۱ — ۰۳ / مطالعات مفهومی</span><Link className="text-link" href="/fa/work">مشاهده همه آثار <span>↖</span></Link></div>
        </section>
        <section className="manifesto" id="approach"><div className="manifesto__grain" aria-hidden="true" /><div className="manifesto__top"><span>۰۳ / دیدگاه ما</span><span>هیاهوی کمتر. معناى بیشتر.</span></div><div className="manifesto__content"><p className="eyebrow">فلسفه‌ی طراحی</p><h2>نه فقط<br />آنچه <em>می‌بینیم.</em><br />آنچه <em>زندگی می‌کنیم.</em></h2></div><div className="manifesto__bottom"><p>معماری در گذر زمان تجربه می‌شود؛ در حرکت نور، پیرشدن ماده و در شیوه‌ای که انسان‌ها مکانی را از آنِ خود می‌کنند.</p><span>ROVOR STUDIO — ۲۰۲۶</span></div><div className="manifesto__orb" aria-hidden="true" /></section>
        <FilmSection />
        <section className="services section-wrap"><div className="section-heading"><div><div className="section-kicker"><span>۰۴</span><span>حوزه‌های فعالیت</span><i /></div><h2 className="section-title">ایده تا<br /><em>تجربه.</em></h2></div><p className="section-heading__aside">از نخستین پرسش تا آخرین جزئیات،<br />پیوند میان مفهوم و ساخت.</p></div><div className="service-list">{[["۰۱","معماری","طراحی فضاهای مسکونی، فرهنگی و تجاری با توجه به بستر."],["۰۲","معماری داخلی","فضاهایی با اتمسفر و زبان مادی روشن."],["۰۳","راهبرد فضایی","پژوهش، طراحی مفهومی و هویت فضایی."],["۰۴","تصویرسازی معماری","روایت‌های بصری برای ملموس‌کردن ایده‌ها."]].map(([n,t,d])=><article className="service-row" key={n}><span className="service-row__number">{n}</span><h3>{t}</h3><p>{d}</p><span className="service-row__arrow">↖</span></article>)}</div></section>
        <section className="approach"><div className="approach__image" role="img" aria-label="مطالعه‌ی نور و ماده در معماری" /><div className="approach__content"><p className="eyebrow">۰۵ / فرایند طراحی</p><h2>وضوح در<br />هر <em>مقیاس.</em></h2><p className="approach__copy">کار دقیق با پرسش‌های بهتر آغاز می‌شود. می‌شنویم، بررسی می‌کنیم، می‌آزماییم و پالایش می‌کنیم تا ایده‌ی اصلی در تمام تصمیم‌ها زنده بماند.</p><Link className="text-link text-link--light" href="/fa/contact">گفتگو را آغاز کنیم <span>↖</span></Link><span className="approach__stamp">مشاهده<br/>تصور<br/>آفرینش</span></div></section>
        <section className="contact section-wrap" id="contact"><div className="section-kicker"><span>۰۵</span><span>شروع گفتگو</span><i /></div><div className="contact__body"><p className="eyebrow">پروژه‌ای در ذهن دارید؟</p><h2>بیایید برای آن<br /><em>فضا بسازیم.</em></h2><div className="contact__action"><Link className="contact__email" href="/fa/contact">درخواست همکاری <span>↖</span></Link><p>برای پروژه‌ها، همکاری‌ها و گفتگوهای حرفه‌ای.</p></div></div><div className="contact__bottom"><span>معماری / طراحی داخلی / طراحی فضا</span><span>مستقر در ایران · فعال در سراسر جهان</span></div></section>
      </main>
      <Footer />
    </StudioExperience>
  );
}
