import Section from "../Common/Section";
import Cards from "../Common/Cards";
import Card from "../Common/Card";
import AppContext from "../../context/AppContext";
import { useContext } from "react";
import ReadMore from "../Common/ReadMore";
import { useTranslation } from "next-i18next";

const Diseases = () => {
  const { db, locale } = useContext(AppContext);
  const { t: translate } = useTranslation("diseases");

  return (
    <Section className="diseases">
      {locale === "ru" && (
        <h2 className="diseases__title">
          <span className="accent">
            {translate("title.original", { returnObjects: true })}{" "}
          </span>
          {translate("title.accent", { returnObjects: true })}
        </h2>
      )}

      {locale === "uz" && (
        <h2 className="diseases__title">
          {translate("title.original", { returnObjects: true })}{" "}
          <span className="accent">
            {translate("title.accent", { returnObjects: true })}
          </span>
        </h2>
      )}

      <Cards className="list-of-diseases">
        {db.diseases.slice(0, 6).map(({ id, name, description }, index) => (
          <Card key={index} className="disease">
            <h3 className="disease__name">{name}</h3>
            <p className="disease__description">
              {description.substring(0, 75)}
            </p>
            <ReadMore className="disease__link" href={`/diseases/${id}`}>
              {translate("read-more")}
            </ReadMore>
          </Card>
        ))}
      </Cards>
    </Section>
  );
};

export default Diseases;
