import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const hideToggle = () => {
    document.querySelector<HTMLElement>("#navbarNav")?.classList.remove("show");
    console.log("hiden toggle.");
  };
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-light">
      <div className="container-fluid" id="del-liststyle">
        <Link onClick={hideToggle} href="/">
          <div className="navbar-brand d-inline-flex align-items-center justify-content-center">
            <Image
              src="/samplelogo.svg"
              alt="Sample Nextjs App Project Logo."
              width="45"
              height="45"
              className="sampleLogo"
            />
            <span className="brandname">Sample</span>
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <Link onClick={hideToggle} href="/">
              <li className="nav-item">Home</li>
            </Link>
            <Link onClick={hideToggle} href="/posts">
              <li className="nav-item">Blog</li>
            </Link>
            <Link onClick={hideToggle} href="/contact">
              <li className="nav-item">Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
