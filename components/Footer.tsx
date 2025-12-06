import Button from './ui/Button';

const Footer = () => (
  <footer className="bg-slate-900 border-t border-slate-800 pt-20 pb-10">
    <div className="container mx-auto px-6">
      <div className="bg-gradient-to-r from-indigo-900/50 to-indigo-600/20 rounded-3xl p-12 text-center mb-16 border border-indigo-500/30">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to clear your dorm?
        </h2>
        <p className="text-slate-300 mb-8">
          Join thousands of students trading safely on Campus Bazaar.
        </p>
        <Button variant="accent" className="mx-auto text-lg px-8">
          Create Free Account
        </Button>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
        <p>&copy; 2025 Campus Bazaar. Built for Students.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">
            Privacy
          </a>
          <a href="#" className="hover:text-white">
            Terms
          </a>
          <a href="#" className="hover:text-white">
            Support
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
