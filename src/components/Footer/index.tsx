import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-8 flex items-center justify-center">
      <p className="text-center">
        <span>Copyright &copy; {new Date().getFullYear()} - </span>
        <Link href="/">The Blog</Link>
      </p>
    </footer>
  );
}
