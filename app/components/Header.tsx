import Image from 'next/image';

export default function Header() {
  return (
    <div className='flex p-8 lg:py-12 lg:px-24 lg:max-w-6xl w-full justify-between items-center'>
      <div>
        <a className='' href='/' target='_blank' rel='noopener noreferrer'>
          <Image
            src='/AndrewBrewerLogoText.svg'
            alt='Andrew Brewer Logo'
            width={300}
            height={24}
            priority
          />
        </a>
      </div>
      <div>
        <a className='p-4' href='/'>
          About
        </a>
        <a className='p-4' href='/'>
          Contact
        </a>
      </div>
    </div>
  );
}
