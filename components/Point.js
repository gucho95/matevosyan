import Icons from "components/Icons";

const Point = ({ icon, text }) => {
  return (
    <div className='flex items-center'>
      <div className='rounded-full border-1 border-black p-2 ' children={Icons[icon]} />
      <div className='ml-4 font-bold' children={text} />
    </div>
  );
};

export default Point;
