import Header from "../Header";

const Layout = ({ children, navigation }) => (
  <>
    <Header navigation={navigation} />
    <main>{children}</main>
  </>
);

export default Layout;
