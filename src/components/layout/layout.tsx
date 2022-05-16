const Layout = ({ children }: { children: any }) => {
  return (
    <section className="relative leading-relaxed tracking-wide p-4">
      <img
        className="w-[35%] md:w-[25%] lg:w-[15%] absolute -z-10"
        src="/img/polkadot.svg"
        alt="Polkadot"
      />
      {children}
    </section>
  );
};

export default Layout;
