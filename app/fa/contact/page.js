import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import ProjectEnquiryForm from "@/components/ProjectEnquiryForm";

export const metadata = {
  title: "تماس و درخواست پروژه",
  description: "ارتباط با استودیو معماری روور برای پروژه‌های معماری، طراحی فضا و همکاری‌های حرفه‌ای.",
  alternates: { canonical: "/fa/contact", languages: { en: "/contact", fa: "/fa/contact" } },
};

export default function PersianContact() {
  return <><Navbar/><main id="main-content" className="contact-page fa-inner">
    <section className="contact-page__hero section-wrap"><p className="eyebrow">ROVOR / تماس</p><h1>هر پروژه‌ی خوب<br/>با یک <em>گفتگو</em> آغاز می‌شود.</h1><p className="contact-page__intro">روور مستقر در ایران است و از درخواست‌های معماری، همکاری‌های دورکار و گفتگوهای حرفه‌ای در سراسر جهان استقبال می‌کند.</p></section>
    <section className="enquiry section-wrap" aria-labelledby="enquiry-title"><div className="section-kicker"><span>۰۱</span><span>درخواست پروژه</span></div><div className="enquiry__intro"><h2 id="enquiry-title">از پروژه‌ی خود<br/><em>برایمان بگویید.</em></h2><p>چند جزئیات اولیه به ما کمک می‌کند تا نیازها و محدوده‌ی همکاری را بهتر بشناسیم. فرم آماده است؛ فعال‌شدن ارسال ایمیل منوط به تنظیم امن سرویس ارسال است.</p></div><ProjectEnquiryForm/></section>
    <section className="contact-page__details section-wrap">
      <div><span>ارتباط مستقیم</span><a href="mailto:Gp.rovor@gmail.com">Gp.rovor@gmail.com ↗</a><a href="https://wa.me/989114710094" target="_blank" rel="noreferrer">واتس‌اپ ↗</a></div>
      <div><span>شبکه‌های اجتماعی</span><a href="https://instagram.com/rovor__architecture_studio" target="_blank" rel="noreferrer">اینستاگرام ↗</a><a href="https://www.linkedin.com/in/asro4" target="_blank" rel="noreferrer">لینکدین ↗</a></div>
      <div><span>برای شروع چه بنویسید؟</span><p>شرح کوتاهی از پروژه، موقعیت آن، نوع خدمات موردنیاز و زمان‌بندی موردنظر را ارسال کنید.</p></div>
    </section>
    <section className="contact-page__closing section-wrap"><span>ROVOR / معماری و طراحی فضا</span><Link href="/fa/work" className="text-link">مشاهده‌ی آثار منتخب <span>↖</span></Link></section>
  </main><Footer/></>;
}
