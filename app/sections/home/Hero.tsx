import Image from 'next/image';

export default function HomeHero() {
  return (
    <div className='flex flex-col w-full py-24 px-8 lg:py-40 lg:px-24 justify-between items-center'>
      <div className='flex flex-col w-full lg:max-w-6xl items-center'>
        <h2 className='font-headers text-5xl font-black'>Test</h2>
      </div>
    </div>
  );
}
