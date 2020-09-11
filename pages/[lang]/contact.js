import Layout from "components/Layout";
import contacts from "constants/contacts";

const Contact = () => {
  return (
    <Layout>
      <div className='grid grid-cols-2 py-8 gap-6'>
        {contacts.map((item, key) => (
          <div
            key={key}
            className='flex justify-start items-center p-2  shadow-xs hover:opacity-75  duration-500 transition-all hover:animate-border '
          >
            <div className='w-8'>
              <img src={item.icon} />
            </div>
            <div className='ml-4'>
              <a
                href={item.linkType ? `${item.linkType}: ${item.path}` : item.path}
                target='_blank'
                children={item.path}
              />
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Contact;
