import { Linkedin, Instagram, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="text-3xl font-serif font-bold gradient-text mb-4">Annie (Ari) Gonyora</div>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Weaving impact across continents through education, innovation, and authentic leadership. 
            Together, we're building a more inclusive and empowered future for Africa and the world.
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="#" 
              className="text-gray-400 hover:text-zim-gold transition-colors"
              data-testid="link-footer-linkedin"
            >
              <Linkedin size={32} />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-zim-gold transition-colors"
              data-testid="link-footer-instagram"
            >
              <Instagram size={32} />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-zim-gold transition-colors"
              data-testid="link-footer-twitter"
            >
              <Twitter size={32} />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-zim-gold transition-colors"
              data-testid="link-footer-email"
            >
              <Mail size={32} />
            </a>
          </div>
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-500 text-sm">&copy; 2024 Annie Gonyora. All rights reserved. | Proudly Zimbabwean 🇿🇼</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
