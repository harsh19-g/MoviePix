import { Outlet, useNavigation } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Loading } from "./Loading";
export const AppLayout = () => {

  const navigation = useNavigation();
  if(navigation.state === "loading"){
    return <Loading/>
  }
  return (
    <>
      <Header />
      <Outlet/>    {/* --->//iska mtlb appLayout ke andar jitne bhi children element h unko render kr dega*/}
      <Footer />
    </>
  );
};
