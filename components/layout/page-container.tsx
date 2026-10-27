export function PageContainer({ children, className = "" }: Readonly<{ children: React.ReactNode; className?: string }>) {
  return <div className={`page-container mx-auto w-full max-w-[1400px] min-w-0 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28 ${className}`}>{children}</div>;
}
