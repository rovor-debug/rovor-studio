export const metadata = {
  title: { default: "روور — معماری فراتر از زمان", template: "%s — استودیو معماری روور" },
  description: "روور، استودیوی مستقل معماری و طراحی فضا مستقر در ایران؛ فعال در همکاری‌های داخلی و بین‌المللی.",
  alternates: { languages: { en: "/", fa: "/fa" } },
};

export default function PersianLayout({ children }) {
  return <div className="fa-site" lang="fa" dir="rtl">{children}</div>;
}
