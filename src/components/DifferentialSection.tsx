import React from 'react';
import { Users, Zap, Shield, Clock, Settings } from 'lucide-react';

const DifferentialSection: React.FC = () => {
  const stats = [
    { icon: Users, number: '+10 Anos', label: 'Experiência', color: 'text-emerald-500' },
    { icon: Zap, number: 'Crescimento Constante', label: 'Novos contratos todo mês', color: 'text-indigo-500' },
    { icon: Shield, number: '0 Acidentes', label: 'Compromisso com a Segurança', color: 'text-red-500' },
    { icon: Clock, number: 'Atuação Nacional', label: 'Projetos em várias regiões', color: 'text-sky-500' }
  ];

  return (
    <>
      {/* Feature Icons - Fora da seção azul */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up delay-700">
          <div className="flex flex-col items-center text-gray-900 group">
            <div className="bg-gray-100 p-4 rounded-full mb-4 group-hover:bg-gray-200 transition-all duration-300 group-hover:scale-110">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Segurança Total</h3>
            <p className="text-gray-600 text-center">Certificações internacionais e sistemas de segurança avançados</p>
          </div>

          <div className="flex flex-col items-center text-gray-900 group">
            <div className="bg-gray-100 p-4 rounded-full mb-4 group-hover:bg-gray-200 transition-all duration-300 group-hover:scale-110">
              <Zap className="w-8 h-8" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Tecnologia Avançada</h3>
            <p className="text-gray-600 text-center">Equipamentos de última geração e soluções inteligentes</p>
          </div>

          <div className="flex flex-col items-center text-gray-900 group">
            <div className="bg-gray-100 p-4 rounded-full mb-4 group-hover:bg-gray-200 transition-all duration-300 group-hover:scale-110">
              <Settings className="w-8 h-8" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Manutenção 24/7</h3>
            <p className="text-gray-600 text-center">Suporte técnico disponível 24 horas por dia, 7 dias por semana</p>
          </div>
        </div>
      </div>

      <br /><br />

      {/* Seção azul com Números que Impressionam */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-primary-950 to-secondary-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                Resultados que Impressionam
              </h3>
              <p className="text-gray-300 text-lg">
                Comprovam nossa excelência e liderança no mercado
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex p-4 rounded-xl bg-white/10 backdrop-blur-sm mb-4 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DifferentialSection;
