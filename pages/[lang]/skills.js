import Layout from "components/Layout";
import SkillsList from "constants/skills";

const Skills = () => {
  return (
    <Layout>
      <div className='flex flex-wrap justify-center gap-6 py-16'>
        {SkillsList.map((skill, key) => (
          <div className='border-2 p-4'>
            <img src={skill.icon} className='h-150px' />
            <p className='text-center py-2'>{skill.name}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Skills;
