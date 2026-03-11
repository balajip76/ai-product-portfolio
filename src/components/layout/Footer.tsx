export default function Footer() {
  return (
    <footer className="bg-charcoal-darker border-t border-white/5 py-6 text-center">
      <p className="font-mono text-xs text-mint-white/30">
        © {new Date().getFullYear()} Balaji · ai-prod-portfolio.neyar.one
      </p>
    </footer>
  );
}
