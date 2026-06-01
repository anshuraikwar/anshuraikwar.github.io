import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-100 bg-background/5 backdrop-blur-2xl">
      <div className="navbar w-full py-4 sm:py-0 sm:h-16 flex sm:items-center justify-between">
        <span className="text-sm font-medium">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={45}
            height={45}
          />
        </span>
        <div className="text-sm text-right sm: text-left flex flex-col sm:flex-row sm:gap-10">
          <Link href="mailto:anshu.raikwar.in@gmail.com">
            anshu.raikwar.in@gmail.com
          </Link>
          <div className="flex flex-row gap-4 sm:gap-10">
            <Link href="https://www.linkedin.com/in/anshu-raikwar/">
              LinkedIn
            </Link>
            <Link href="https://github.com/anshuraikwar">
              Github
            </Link>
            <Link
              href="/Resume - Anshu Raikwar.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}