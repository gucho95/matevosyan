import Layout from "components/Layout";
import SkillsList from "constants/skills";

const Skills = () => {
  return (
    <Layout>
      <div className='flex flex-wrap justify-start gap-6 py-16'>
        {SkillsList.map((skill, key) => (
          <div className=' flex justify-center items-center flex-col  w-150px shadow-xs border-2 border-transparent  transition-all duration-500 hover:animate-border'>
            <img src={skill.icon} className='h-150px w-auto object-contain p-4' />
            <p className='text-center py-2 bg-black text-white w-full mx-0 px-0'>{skill.name}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Skills;
