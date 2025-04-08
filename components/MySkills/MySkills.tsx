import { type FC } from 'react';
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiSass,
  SiStyledcomponents,
  SiMui,
  SiBootstrap,
  SiNeovim,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiMongodb,
  SiGithub,
  SiClaude,
  SiGit,
  SiRedux,
  SiOpenai,
} from 'react-icons/si';
import { BiLogoFigma, BiLogoVisualStudio } from 'react-icons/bi';
import { FaAws } from 'react-icons/fa';

const MySkills: FC = () => {
  const essentials = [
    { icon: SiJavascript, color: '#F7DF1E', name: 'JavaScript' },
    { icon: SiHtml5, color: '#E34F26', name: 'HTML5' },
    { icon: SiCss3, color: '#1572B6', name: 'CSS3' },
  ];

  const frontEndFrameworks = [
    { icon: SiReact, color: '#61DAFB', name: 'React' },
    { icon: SiNextdotjs, color: '#000000', name: 'Next.js' },
  ];

  const styling = [
    { icon: SiTailwindcss, color: '#06B6D4', name: 'Tailwind CSS' },
    { icon: SiSass, color: '#CC6699', name: 'Sass' },
    { icon: SiStyledcomponents, color: '#DB7093', name: 'Styled Components' },
    { icon: SiMui, color: '#007FFF', name: 'Material UI' },
    { icon: SiBootstrap, color: '#7952B3', name: 'Bootstrap' },
    { icon: BiLogoFigma, color: '#F24E1E', name: 'Figma' },
  ];

  const backend = [
    { icon: SiNodedotjs, color: '#339933', name: 'Node.js' },
    { icon: SiPostman, color: '#FF6C37', name: 'Postman' },
    { icon: SiMongodb, color: '#47A248', name: 'MongoDB' },
  ];

  const aiServices = [
    { icon: FaAws, color: '#FF9900', name: 'Amazon Web Services' },
    { icon: SiOpenai, color: '#412991', name: 'OpenAI' },
    { icon: SiClaude, color: '#D97B5B', name: 'Claude' },
  ];

  const utility = [
    { icon: SiNeovim, color: '#629B42', name: 'Neovim' },
    { icon: SiRedux, color: '#764ABC', name: 'Redux' },
    { icon: BiLogoVisualStudio, color: '#007ACC', name: 'Visual Studio Code' },
    { icon: SiGit, color: '#F05032', name: 'Git' },
    { icon: SiGithub, color: '#181717', name: 'GitHub' },
  ];

  const sections = [
    {
      title: 'Essentials',
      items: essentials,
    },
    {
      title: 'Styling',
      items: styling,
    },
    {
      title: 'Front-End Frameworks',
      items: frontEndFrameworks,
    },
    {
      title: 'Backend',
      items: backend,
    },
    {
      title: 'AI Services',
      items: aiServices,
    },
    {
      title: 'Utilities',
      items: utility,
    },
  ];

  return (
    <section
      className='max-w-6xl mx-auto mb-8 px-8 md:grid md:grid-cols-1/3and2/3 lg:grid-cols-2'
      data-aos='fade-up'>
      {sections.map((section, index) => (
        <div key={index} className='mb-8'>
          <h3 className='text-xl font-bold mb-4'>{section.title}</h3>
          <div className='flex gap-6'>
            {section.items.map((item, index) => {
              const { icon, color, name } = item;
              const Icon = icon;
              return (
                <div key={index} className='group relative'>
                  <Icon
                    className='w-12 h-12 transition-transform hover:scale-110'
                    style={{ color }}
                    role='img'
                    aria-label={name}
                    title={name}
                  />
                  <div className='absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap'>
                    {name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
};

export default MySkills;
