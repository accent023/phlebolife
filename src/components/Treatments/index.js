import Section from "../Common/Section";
import Cards from "../Common/Cards";
import Card from "../Common/Card";
import AppContext from "../../context/AppContext";
import { useContext } from "react";
import ReadMore from "../Common/ReadMore";
import { useTranslation } from "next-i18next";
import { useState } from "react";

const Treatments = () => {
  const { db, locale } = useContext(AppContext);
  const { t: translate } = useTranslation("treatments");
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState();

  const handlePageChange = () => {
    setStartIndex(0);
    setStartIndex(itemsPerPage);

    // Going to sleep, must add a load more content functionality
  };

  return (
    <Section className="treatments">
      {locale === "ru" && (
        <h2 className="treatments__title">
          <span className="accent">
            {translate("title.original", { returnObjects: true })}{" "}
          </span>
          {translate("title.accent", { returnObjects: true })}
        </h2>
      )}

      {locale === "uz" && (
        <h2 className="treatments__title">
          {translate("title.original", { returnObjects: true })}{" "}
          <span className="accent">
            {translate("title.accent", { returnObjects: true })}
          </span>
        </h2>
      )}

      <Cards className="list-of-treatments">
        {db.treatments.slice(0, 6).map(({ id, name, description }, index) => (
          <Card key={index} className="treatment">
            <h3 className="treatment__name">{name}</h3>
            {description && (
              <p className="treatment__description">
                {description.substring(0, 75)}
              </p>
            )}
            <ReadMore className="treatment__link" href={`/treatments/${id}`}>
              {translate("read-more")}
            </ReadMore>
          </Card>
        ))}
      </Cards>

      <button className="treatments__load-more">
        {translate("load-more")}
      </button>
    </Section>
  );
};

export default Treatments;
