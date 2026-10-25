import VisitorCounter from "./VisitorCounter";

const Footer = () => {
  return (
    <footer className="border-t-2 border-foreground bg-secondary mt-8">
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-xs text-muted-foreground">
            <div>© 2024 Portfolio Systems Inc.</div>
            <div>All rights reserved. Built with React & Tailwind.</div>
          </div>

          <VisitorCounter />

          <div className="font-mono text-xs text-right text-muted-foreground">
            <div>System Status: ONLINE</div>
            <div>Version 1.0.0</div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-foreground text-center font-retro text-xs text-muted-foreground">
          [ Press any key to continue... ]
        </div>
      </div>
    </footer>
  );
};

export default Footer;
