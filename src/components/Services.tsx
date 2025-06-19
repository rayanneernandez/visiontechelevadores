import React from 'react';
import { Wrench, Zap, Shield, ArrowUpRight, Clock, Award, Users, TrendingUp, MessageCircle, Phone } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Zap,
      title: 'Instalação de Elevadores',
      description: 'Instalação completa com equipamentos de última geração, seguindo rigorosamente todas as normas de segurança e qualidade.',
      features: ['Planejamento técnico', 'Equipamentos premium', 'Certificação completa', 'Garantia estendida'],
      gradient: 'from-primary-500 to-primary-700',

    },
    {
      icon: TrendingUp,
      title: 'Modernização',
      description: 'Atualizamos seu elevador com as mais recentes tecnologias, melhorando eficiência energética e experiência do usuário.',
      features: ['Tecnologia IoT', 'Eficiência energética', 'Design moderno', 'Controles inteligentes'],
      gradient: 'from-secondary-500 to-secondary-700',

    },
    {
      icon: Wrench,
      title: 'Manutenção Preventiva',
      description: 'Programa completo de manutenção para garantir funcionamento perfeito e prolongar a vida útil do equipamento.',
      features: ['Visitas programadas', 'Relatórios detalhados', 'Peças originais', 'Suporte 24/7'],
      gradient: 'from-green-500 to-green-700',

    },
  ];

  const stats = [
    { icon: Users, number: 'Atendimento ', label: 'Personalizado e Ágil' },
    { icon: Award, number: '10+', label: 'Anos de Experiência' },
    { icon: Shield, number: '99.9%', label: 'Taxa de Confiabilidade' },
    { icon: Clock, number: '24/7', label: 'Suporte Técnico' },
  ];

  const handleServiceContact = (serviceName: string, price: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de solicitar um orçamento para ${serviceName}. Vi que ${price}. Podem me enviar mais detalhes?`);
    const whatsappUrl = `https://wa.me/552199839-1488?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallNow = () => {
    window.location.href = 'tel:+5521998391488';
  };

  return (
    <section id="servicos" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Nossos Serviços
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Soluções Completas em
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 block">
              Elevadores
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos serviços especializados com tecnologia de ponta, 
            garantindo segurança, eficiência e confiabilidade em cada projeto.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up border border-gray-100 hover:border-primary-200"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-700 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>



              {/* Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => handleServiceContact(service.title, service.price)}
                  className="flex-1 bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 px-4 rounded-lg font-medium hover:from-primary-700 hover:to-primary-800 transition-all duration-300 flex items-center justify-center group-hover:shadow-lg"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Solicitar Orçamento
                </button>
                <button
                  onClick={handleCallNow}
                  className="p-3 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-primary-900 to-secondary-900 rounded-3xl p-12 animate-fade-in-up">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Por que Escolher a Visiontech?
            </h3>
            <p className="text-gray-300 text-lg">
              Números que comprovam nossa excelência e liderança no mercado
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex p-3 rounded-xl bg-white/10 backdrop-blur-sm mb-4 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <button
              onClick={() => {
                const message = encodeURIComponent('Olá! Gostaria de conhecer todos os serviços da ElevaPremium e solicitar um orçamento personalizado.');
                const whatsappUrl = `https://wa.me/5511999999999?text=${message}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="bg-white text-primary-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Fale Conosco Agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;