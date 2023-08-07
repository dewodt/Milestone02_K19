import Link from "next/link";

const Footer = () => {
  // List of paths
  const paths = [
    {
      name: "Cafe & Coworking Spaces",
      url: "/cafe&coworking-spaces",
    },
    {
      name: "About Us",
      url: "/about-us",
    },
  ];

  return (
    <footer className="flex h-fit flex-col items-center gap-4 bg-custom-dark-blue-green px-6 py-8 font-inter text-base font-semibold text-white lg:flex-row-reverse lg:justify-between lg:px-16 xl:gap-6 xl:py-10 xl:text-lg">
      {/* Links */}
      <ul className="flex flex-row gap-6 lg:gap-10">
        {paths.map((path, index) => {
          return (
            <Link key={index} href={path.url}>
              <li className="xl:transition-colors xl:duration-200 xl:ease-in-out xl:hover:text-custom-soft-black">
                {path.name}
              </li>
            </Link>
          );
        })}
      </ul>

      {/* Copyright */}
      <h6>{`${new Date().getFullYear()} © ganeshaspace.`}</h6>
    </footer>
  );
};

export default Footer;
