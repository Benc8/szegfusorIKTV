import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-amber-50 py-16 px-6 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <img src="/SzegfusorLogo.png" alt="Logo" className="w-20 h-20" />
              <h3 className="text-2xl font-bold text-amber-50">
                Szegfűsor<span className="text-amber-400"></span>
              </h3>
            </div>
            <p className="text-amber-100 opacity-75 text-lg leading-relaxed max-w-md">
              Creating extraordinary digital experiences that push the
              boundaries of innovation and design.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6 text-amber-400">
              Csapatagok
            </h4>
            <div className="space-y-4 text-amber-100 opacity-75 text-lg">
              <p>Menyhért Bnece (Developer)</p>
              <p>Sőrés Máté</p>
              <p>Belényesi István</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-amber-50/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-amber-100 opacity-60 text-lg">
              © {currentYear} Szegfűsor. All rights reserved.
            </p>

            <a
              href="https://github.com/Benc8/szegfusorIKTV"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-amber-50/10 rounded-full flex items-center justify-center text-amber-100 hover:bg-amber-400 hover:text-blue-900 transition-all duration-300"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
