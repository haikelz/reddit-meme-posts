const Layout = ({ children }: { children: any }) => {
  return (
    <section className="relative leading-relaxed tracking-wide p-4">
      {children}
    </section>
  );
};

export default Layout;
