const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <main style={{ minHeight: 'calc(100dvh - 64px - 68px)', padding: 16 }}>
      {children}
    </main>
  );
};

export default Content;
