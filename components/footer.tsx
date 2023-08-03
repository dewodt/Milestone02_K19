import Link from "next/link";

const Footer = () => {
  // List of paths
  const paths = [
    {
      name: "Coworking Spaces",
      url: "/coworking-spaces",
    },
    {
      name: "About Us",
      url: "/about-us",
    },
  ];

  return (
    <footer className="bg-custom-dark-blue-green text-white font-inter font-semibold px-6 py-8 h-fit flex flex-col items-center gap-4 text-base xl:text-lg xl:gap-6 lg:px-16 xl:py-10 lg:flex-row-reverse lg:justify-between">
      {/* Links */}
      <ul className="flex flex-row gap-6 lg:gap-10">
        {paths.map((path, index) => {
          return (
            <Link key={index} href={path.url}>
              <li className="xl:hover:text-custom-soft-black xl:transition-colors xl:duration-200 xl:ease-in-out">
                {path.name}
              </li>
            </Link>
          );
        })}
      </ul>

      {/* Copyright */}
      <h6>2023 &copy; Milestones Kelompok 19</h6>
    </footer>
  );
};

export default Footer;
