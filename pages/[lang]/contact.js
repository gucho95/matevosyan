import Layout from "components/Layout";
import contacts from "constants/contacts";

const Contact = () => {
  return (
    <Layout>
      <div className='grid xs:grid-cols-1 xl:grid-cols-2 py-8 gap-6'>
        {contacts.map((item, key) => (
          <div
            key={key}
            className='flex justify-between items-center p-2  shadow-xs hover:opacity-75  duration-500 transition-all '
          >
            <div className='w-1/12'>
              <img src={item.icon} />
            </div>
            <div className='w-10/12 overflow-hidden truncate'>
              <a
                href={item.linkType ? `${item.linkType}: ${item.path}` : item.path}
                target='_blank'
                children={item.path}
                className=' whitespace-pre-line'
              />
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Contact;
