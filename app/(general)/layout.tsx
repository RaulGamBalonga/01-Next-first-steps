export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col items-center p-24">
      <span className="text-lg">About Page</span>
      {children}
    </main>
  );
}
