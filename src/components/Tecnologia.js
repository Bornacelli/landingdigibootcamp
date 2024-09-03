
import TecnologiaData from './TecnologiaData';
import './Tecnologia.css'

const Tecnologia = () => {
  const niveles = [
    {
      title: 'Principiante',
      description: 'Curso de Programación desde 0 Gratis',
      courses: [
        { name: 'Introducción a la programación', icon: 'ruta-del-icono' },
        { name: 'HTML y CSS', icon: 'ruta-del-icono' },
        { name: 'JavaScript', icon: 'ruta-del-icono' },
      ],
    },
    {
      title: 'Front-End',
      description: 'Curso de Front-End Gratis',
      courses: [
        { name: 'React', icon: 'ruta-del-icono' },
        { name: 'Angular', icon: 'ruta-del-icono' },
      ],
    },
    {
      title: 'Back-End',
      description: 'Curso de Back-End Gratis',
      courses: [
        { name: 'Php', icon: 'ruta-del-icono' },
        { name: 'Python', icon: 'ruta-del-icono' },
        { name: 'Java', icon: 'ruta-del-icono' },
        { name: 'C#', icon: 'ruta-del-icono' },
      ],
    },
    {
      title: 'FullStack',
      description: 'Curso de FullStack Gratis',
      courses: [
        { name: 'Front + Back', icon: 'ruta-del-icono' },
        { name: 'MERN', icon: 'ruta-del-icono' },
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
