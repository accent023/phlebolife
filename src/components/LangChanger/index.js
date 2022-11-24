import { useRouter } from "next/router";
import Link from "next/link";

const LangChanger = () => {
  const { locales } = useRouter();

  return (
    <ul className="locales">
      {locales.map((locale, i) => (
        <li key={i} className="locales__item">
          <Link href={"/"} locale={locale}>
            {locale}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LangChanger;
