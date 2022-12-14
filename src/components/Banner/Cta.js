import Image from "next/image";
import consultationIcon from "../../assets/images/consultation.png";
import { useTranslation } from "next-i18next";

export const Cta = () => {
  const { t: translate } = useTranslation("banner");

  return (
    <div className="cta">
      <h1 className="cta__title">
        Phlebo<span className="accent">Life</span>
      </h1>
      <p className="cta__subtitle">{translate("subtitle")}</p>
      <p className="cta__description">{translate("description")}</p>

      <button className="cta__btn">
        <Image width={23} src={consultationIcon} quality={100} priority />
        {translate("consultation")}
      </button>
    </div>
  );
};
