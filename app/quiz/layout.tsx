export default function NestedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <nav>
      this is my navigation
      {children}
    </nav>
  );
}
