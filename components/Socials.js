// links
import Link from 'next/link';

// icons
import {
  RiLinkedinBoxFill,
  RiGithubFill,
  RiGoogleFill,
  RiPhoneLine,
  RiTwitterFill,
  RiTwitchFill,
  RiDiscordFill,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={'https://www.linkedin.com/in/adityagoyal200/'} className='hover:text-accent transition-all duration-300'>
        <RiLinkedinBoxFill />
      </Link>
      <Link href={'https://github.com/adityagoyal200'} className='hover:text-accent transition-all duration-300'>
        <RiGithubFill />
      </Link>
      <Link href={'https://mail.google.com/'} className='hover:text-accent transition-all duration-300'>
        <RiGoogleFill />
      </Link>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiPhoneLine />
      </Link>
      <Link href={'https://twitter.com/Adityagoyalz'} className='hover:text-accent transition-all duration-300'>
        <RiTwitterFill />
      </Link>
      <Link href={'https://www.twitch.tv/naarutorizzz'} className='hover:text-accent transition-all duration-300'>
        <RiTwitchFill />
      </Link>
      <Link href={'https://discord.com/channels/@me'} className='hover:text-accent transition-all duration-300'>
        <RiDiscordFill />
      </Link>
    </div>
  );
};

export default Socials;
