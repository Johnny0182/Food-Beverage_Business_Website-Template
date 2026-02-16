const footerLinks = [
  'About',
  'Menu',
  'Locations',
  'Delivery',
  'Contact',
  'Login',
  'Terms',
  'Privacy',
  'CA Supply Chain Act',
];

export default function Footer() {
  return (
    <footer className="px-6 py-12">
      <div className="mx-auto w-full max-w-7xl">
        <ul className="flex flex-wrap gap-x-5 gap-y-3 text-[0.65rem] uppercase tracking-[0.2em] text-[#9d9992]">
          {footerLinks.map((link) => (
            <li key={link}>
              {['About', 'Menu', 'Locations', 'Delivery', 'Contact'].includes(link) ? (
                // Replace with real routing
                <a href={`#${link.toLowerCase()}`} className="transition hover:text-[#f5f3f0]">
                  {link}
                </a>
              ) : (
                <button type="button" aria-disabled="true" className="cursor-not-allowed">
                  {link}
                </button>
              )}
            </li>
          ))}
        </ul>

        <p className="mt-10 border-t border-[#232323] pt-6 text-xs uppercase tracking-[0.16em] text-[#76736d]">
          © Grim Grounds Coffee — South Gate, CA
        </p>
      </div>
    </footer>
  );
}