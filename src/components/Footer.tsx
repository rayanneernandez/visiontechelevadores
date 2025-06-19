import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Contato', href: '#contato' }
  ];

  const services = [
    'Instalação de Elevadores',
    'Modernização',
    'Manutenção Preventiva',
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/visiontech_elevadores/', name: 'Instagram' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gradient-to-br from-primary-950 to-secondary-950 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Visiontech</h3>
              <p className="text-gray-300 leading-relaxed">
                Especialistas em soluções completas para transporte vertical. 
                Tecnologia de ponta, segurança garantida e atendimento excepcional.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-primary-400" />
                <span>(21) 99839-   1488</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-primary-400" />
                <span>visiontechelevadores@gmail.com</span>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="w-5 h-5 mr-3 text-primary-400 mt-1" />
                <span>Rio de Janeiro<br /></span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="group p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-primary-600 transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-white group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-primary-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Nossos Serviços</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <div className="text-gray-300 flex items-center group">
                    <span className="w-2 h-2 bg-secondary-400 rounded-full mr-3"></span>
                    {service}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Atendimento Personalizado</h4>
            <p className="text-gray-300 mb-6">
              Entre em contato conosco para saber como podemos modernizar, instalar ou manter seu elevador com máxima eficiência. 
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Visiontech. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-300">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-300">
                Termos de Uso
              </a>
              <button
                onClick={scrollToTop}
                className="group p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-primary-600 transition-all duration-300 hover:scale-110"
                aria-label="Voltar ao topo"
              >
                <ArrowUp className="w-4 h-4 text-white group-hover:text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
