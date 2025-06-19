import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simular envio do formulário
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 5000);
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Olá! Meu nome é ${formData.name}. Gostaria de solicitar um orçamento para ${formData.service || 'serviços de elevador'}.`);
    const whatsappUrl = `https://wa.me/5521998391488?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+5521998391488';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:visiontechelevadores@gmail.com';
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      info: '(21) 99839-1488',
      subInfo: 'Segunda a Sexta, 8h às 18h',
      gradient: 'from-primary-500 to-primary-600',
      action: handleCallClick
    },
    {
      icon: Mail,
      title: 'E-mail',
      info: 'visiontechelevadores@gmail.com',
      subInfo: 'Resposta em até 2 horas',
      gradient: 'from-secondary-500 to-secondary-600',
      action: handleEmailClick
    },
    {
      icon: MapPin,
      title: 'Endereço',
      info: 'Rio de Janeiro - RJ',
      subInfo: 'Showroom aberto para visitas',
      gradient: 'from-blue-500 to-blue-600',
      action: () => window.open('https://www.google.com/maps/place/Rio+de+Janeiro,+RJ/@-22.9127698,-44.1054343,9z/data=!3m1!4b1!4m6!3m5!1s0x9bde559108a05b:0x50dc426c672fd24e!8m2!3d-22.9068467!4d-43.1728965!16zL20vMDZnbXI?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D', '_blank')
    },
    {
      icon: Clock,
      title: 'Emergência 24h',
      info: '(21) 99839-1488',
      subInfo: 'Suporte técnico disponível',
      gradient: 'from-green-500 to-green-600',
      action: () => window.location.href = 'tel:+5521998391488'
    }
  ];

  const services = [
    'Instalação de Elevadores',
    'Modernização',
    'Manutenção Preventiva',
    'Consultoria Técnica',
    'Outro'
  ];

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
            <Send className="w-4 h-4 mr-2" />
            Entre em Contato
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Vamos Elevar Seu
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 block">
              Próximo Projeto
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Entre em contato conosco para receber um orçamento personalizado 
            e descobrir como podemos atender suas necessidades.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in-left">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                onClick={item.action}
                className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="flex items-start">
                  <div className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-br ${item.gradient} text-white group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-primary-700 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-800 font-medium mb-1">{item.info}</p>
                    <p className="text-sm text-gray-600">{item.subInfo}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all duration-300 ml-auto" />
                </div>
              </div>
            ))}


          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in-right">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        placeholder="(21) 99999-9999"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Serviço de Interesse *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Selecione um serviço</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Descreva seu projeto ou necessidade..."
                    ></textarea>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="group flex-1 bg-gradient-to-r from-primary-600 to-primary-700 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-primary-700 hover:to-primary-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Enviando...
                        </>
                      ) : (
                        <>
                          Enviar Mensagem
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </button>
                    
                    <button
                      type="button"
                      onClick={handleWhatsAppClick}
                      className="group bg-green-500 hover:bg-green-600 text-white py-4 px-8 rounded-lg font-semibold text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                    >
                      <MessageCircle className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                      WhatsApp
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-12 animate-scale-in">
                  <div className="inline-flex p-4 bg-success-100 rounded-full mb-6">
                    <CheckCircle className="w-12 h-12 text-success-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Mensagem Enviada com Sucesso!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Obrigado pelo seu interesse. Nossa equipe entrará em contato em breve.
                  </p>
                  <div className="inline-flex items-center text-primary-600 font-medium">
                    <Clock className="w-5 h-5 mr-2" />
                    Resposta em até 2 horas úteis
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;