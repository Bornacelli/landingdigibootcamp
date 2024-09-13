
import TecnologiaData from './TecnologiaData';
import './Tecnologia.css'
import angular from '/assets/logosTecnologia/angular.jpg'

const Tecnologia = () => {
  const niveles = [
    {
      title: 'Principiante',
      description: 'Curso de Programación desde 0 Gratis',
      courses: [
        { name: 'Introducción a la programación', icon: '' },
        { name: 'HTML y CSS', icon: '' },
        { name: 'JavaScript', icon: '' },
      ],
    },
    {
      title: 'Front-End',
      description: 'Curso de Front-End Gratis',
      courses: [
        { name: 'React', icon: '' },
        { name: 'Angular', icon: '' },
      ],
    },
    {
      title: 'Back-End',
      description: 'Curso de Back-End Gratis',
      courses: [
        { name: 'Php', icon: '' },
        { name: 'Python', icon: '' },
        { name: 'Java', icon: '' },
        { name: 'C#', icon: '' },
      ],
    },
    {
      title: 'FullStack',
      description: 'Curso de FullStack Gratis',
      courses: [
        { name: 'Front + Back', icon: '' },
        { name: 'MERN', icon: '' },
      ],
    },
  ];

  return (
    <div className="container">
      <h1>Encuentra el nivel que se adapte a ti</h1>
      <p>
        Tenemos hojas de ruta confeccionadas para cada tipo de alumno, tanto los que empiezan en el mundo del desarrollo como los que ya tienen conocimientos avanzados y solo necesitan un último empujón que les lance al entorno laboral.
      </p>
      <div className="niveles-grid">
        {niveles.map((nivel, index) => (
          <TecnologiaData key={index} title={nivel.title} description={nivel.description} courses={nivel.courses} />
        ))}
      </div>
    </div>
  );
};

export default Tecnologia;
