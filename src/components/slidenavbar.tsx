import Link from "next/link";
import Image from "next/image";

export default function SlideNavbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <Link href={"/"}>
            <Image
              src={"/samplelogo.svg"}
              width={45}
              height={45}
              alt={"Sample Nextjs App Project Logo."}
            />
            <h2>MSK</h2>
          </Link>
        </div>
      </nav>
    </>
  );
}
