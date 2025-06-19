import React, { useState } from 'react';
import { ArrowUpRight, MapPin, Calendar, Users, Building, ExternalLink, Eye, X } from 'lucide-react';
import elevadorfora from './img/elevadorfora.png';
import elevadorcondominio from './img/elevadorcondominio.png';
import elevadoor from './img/elevadoor.png';
import elevadorcasa from './img/elevadorcasa.png';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Instalação Residencial',
      location: 'Rio de Janeiro, RJ',
      year: '2025',
      type: 'Instalação Completa',
      floors: '2 andares',
      elevators: '5 pessoas',
      image: elevadorfora,
      description: 'Projeto completo com elevador de alta velocidade e tecnologia inteligente para uma residencia.',
      technologies: ['especificações', 'especificações', 'Velocidade 8m/s'],
    },
    {
      id: 2,
      title: 'Elevador Empresarial',
      location: 'Praça Afonso Pena - Tijuca, RJ',
      year: '2024',
      type: 'Modernização',
      floors: '14 andares',
      elevators: '12 pessoas',
      image: elevadoor,
      description: 'Modernização completa de elevadores residenciais com foco em eficiência energética e conforto.',
      technologies: ['Portas Modernizadas', 'Cabines Renovadas', 'Redução de ruídos e consumo energético'],
    },
    {
      id: 3,
      title: 'Shopping Boulevard',
      location: 'Itaboraí, RJ',
      year: '2025',
      type: 'Instalação & Manutenção',
      floors: '5 andares',
      elevators: '4 pessoas',
      image: elevadorcasa,
      description: 'Sistema integrado de elevadores para centro comercial com alta circulação de pessoas.',
      technologies: ['Alta Capacidade', 'Sistema Integrado', 'Monitoramento 24/7'],
    },
    {
      id: 4,
      title: 'Elevador Residencial',
      location: 'Teresópolis, RJ',
      year: '2025',
      type: 'Instalação Residencial',
      floors: '12 andares',
      elevators: '6 pessoas',
      image: elevadorcondominio,
      description: 'Elevadores especializados para ambiente hospitalar com sistemas de emergência e acessibilidade total.',
      technologies: ['especificações', 'especificações', 'Acessibilidade Total'],
    }
  ];

  const [modalImage, setModalImage] = useState<string | null>(null);
  const [modalTitle, setModalTitle] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const openImageModal = (image: string, title: string) => {
    setModalImage(image);
    setModalTitle(title);
  };

  const closeImageModal = () => {
    setModalImage(null);
    setModalTitle(null);
  };

  const openDetailsModal = (project: any) => setSelectedProject(project);
  const closeDetailsModal = () => setSelectedProject(null);

  const handleContactProject = (projectTitle: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre o projeto "${projectTitle}" e solicitar um orçamento similar.`);
    const whatsappUrl = `https://wa.me/5511999999999?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="projetos" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* ... header mantido ... */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                  {project.type}
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-3">
                    <button
                      onClick={() => openImageModal(project.image, project.title)}
                      className="bg-white/90 backdrop-blur-sm text-primary-800 p-3 rounded-full hover:bg-white"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleContactProject(project.title)}
                      className="bg-primary-600 text-white p-3 rounded-full hover:bg-primary-700"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">{tech}</span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-gray-700">
                  <div className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-primary-500" />{project.location}</div>
                  <div className="flex items-center"><Calendar className="w-4 h-4 mr-2 text-primary-500" />{project.year}</div>
                  <div className="flex items-center"><Building className="w-4 h-4 mr-2 text-primary-500" />{project.floors}</div>
                  <div className="flex items-center"><Users className="w-4 h-4 mr-2 text-primary-500" />{project.elevators}</div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => openDetailsModal(project)}
                    className="flex-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 py-3 rounded-lg font-medium hover:from-primary-100 hover:to-primary-200 hover:text-primary-800"
                  >

                    Ver Detalhes
                  </button>
                  <button
                    onClick={() => handleContactProject(project.title)}
                    className="bg-primary-600 text-white p-3 rounded-lg hover:bg-primary-700"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal de imagem */}
        {modalImage && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={closeImageModal}>
            <div className="relative max-w-4xl max-h-[90vh] p-4" onClick={(e) => e.stopPropagation()}>
              <button onClick={closeImageModal} className="absolute top-2 right-2 text-white hover:text-gray-300">
                <X className="w-6 h-6" />
              </button>
              <h2 className="text-white text-xl mb-4 text-center font-semibold">{modalTitle}</h2>
              <img src={modalImage} alt={modalTitle || 'Imagem'} className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-lg" />
            </div>
          </div>
        )}

        {/* Modal de detalhes */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={closeDetailsModal}>
            <div className="bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-xl shadow-lg p-6 relative" onClick={(e) => e.stopPropagation()}>
              <button onClick={closeDetailsModal} className="absolute top-3 right-3 text-gray-600 hover:text-gray-800">
                <X className="w-6 h-6" />
              </button>
              <h2 className="text-2xl font-bold text-primary-800 mb-4">{selectedProject.title}</h2>
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover rounded-lg mb-4" />
              <p className="text-gray-700 mb-4">{selectedProject.description}</p>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-6">
                <div className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-primary-500" />{selectedProject.location}</div>
                <div className="flex items-center"><Calendar className="w-4 h-4 mr-2 text-primary-500" />{selectedProject.year}</div>
                <div className="flex items-center"><Building className="w-4 h-4 mr-2 text-primary-500" />{selectedProject.floors}</div>
                <div className="flex items-center"><Users className="w-4 h-4 mr-2 text-primary-500" />{selectedProject.elevators}</div>
              </div>
              <h3 className="text-lg font-semibold text-primary-700 mb-2">Tecnologias/Especificações:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                {selectedProject.technologies.map((tech: string, idx: number) => (
                  <li key={idx}>{tech}</li>
                ))}
              </ul>
              <button
                onClick={() => {
                  const message = encodeURIComponent(
                    `Olá! Gostaria de saber mais sobre o projeto "${selectedProject.title}" e solicitar um orçamento similar.`
                  );
                  const whatsappUrl = `https://wa.me/5511999999999?text=${message}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className="mt-4 w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 font-medium"
              >
                Solicitar Orçamento
              </button>
            </div>
          </div>
        )}

        {/* ... CTA mantido ... */}

      </div>
    </section>
  );
};

export default Projects;
