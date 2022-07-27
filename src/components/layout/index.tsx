import { Children } from "src/interface";

const Layout = ({ children }: Children) => {
  return (
    <section className="flex flex-col justify-center items-center leading-relaxed tracking-wide py-3 px-2">
      {children}
    </section>
  );
};

export default Layout;
