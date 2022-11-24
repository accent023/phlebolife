import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../src/components/Common/Layout";
import db from "../src/database/db.json";
import AppContext from "../src/context/AppContext";
import Banner from "../src/components/Banner";

const HomePage = ({ db, locale }) => {
  return (
    <AppContext.Provider value={{ db: db[locale], locale }}>
      <Layout>
        <Banner />
      </Layout>
    </AppContext.Provider>
  );
};

export default HomePage;

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      db,
      locale,
      ...(await serverSideTranslations(locale, ["common", "banner"])),
    },
  };
};
