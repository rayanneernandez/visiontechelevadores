import React from 'react';
import { Award, Users, Zap, Shield, CheckCircle, Star } from 'lucide-react';
import ElevadorImg from './img/elevadoor.png'; 


const About: React.FC = () => {
  const achievements = [
    'Certificação',
    'Diversos projetos concluídos',
    'Equipe altamente qualificada',
    'Tecnologia de ponta',
    'Suporte 24/7',
    'Garantia estendida'
  ];

  const values = [
    {
      icon: Shield,
      title: 'Segurança',
      description: 'Priorizamos a segurança em todos os nossos projetos, seguindo rigorosamente as normas técnicas.'
    },
    {
      icon: Award,
      title: 'Qualidade',
      description: 'Utilizamos apenas equipamentos de primeira linha e mantemos os mais altos padrões de qualidade.'
    },
    {
      icon: Users,
      title: 'Confiança',
      description: 'Construímos relacionamentos duradouros baseados na transparência e profissionalismo.'
    },
    {
      icon: Zap,
      title: 'Inovação',
      description: 'Sempre na vanguarda da tecnologia, oferecendo soluções modernas e eficientes.'
    }
  ];


  

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="animate-fade-in-left">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Sobre a Visiontech Elevadores
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Excelência em
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 block">
                Instalação, Manutenção e Modernização
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Com 10 anos de experiência no mercado, a Visiontech é referência 
              em soluções completas para transporte vertical. Nossa missão é elevar a 
              experiência de nossos clientes através da tecnologia, segurança e excelência 
              no atendimento.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Combinamos expertise técnica com inovação constante, oferecendo desde 
              instalações complexas até manutenção preventiva, sempre com foco na 
              satisfação total do cliente e na superação de expectativas.
            </p>

            {/* Achievements List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center group">
                  <CheckCircle className="w-5 h-5 text-success-500 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-700 font-medium">{achievement}</span>
                </div>
              ))}
            </div>

            <button className="group bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-primary-700 hover:to-primary-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Conheça Nossa História
              <Award className="inline ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </button>
          </div>

          {/* Right Column - Image and Values */}
          <div className="animate-fade-in-right">
            {/* Main Image */}
            <div className="relative mb-8 group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl transform rotate-6 group-hover:rotate-3 transition-transform duration-500"></div>
            <img
              src={ElevadorImg}
              alt="Equipe Visiontech"
              className="relative z-10 w-full h-80 object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-500"
            />

              
              {/* Floating Stats */}
              <div className="absolute -bottom-4 -left-4 z-20 bg-white p-4 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <div className="text-2xl font-bold text-primary-600">10+</div>
                <div className="text-sm text-gray-600">Anos</div>
              </div>
              <div className="absolute -top-4 -right-4 z-20 bg-white p-4 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <div className="text-2xl font-bold text-secondary-600"></div>
                <div className="text-sm text-gray-600">Projetos</div>
              </div>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="inline-flex p-2 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-lg mb-3 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;