import Section from './Section';
import { smallSphere, stars } from '../assets';
import Heading from './Heading';
import PricingList from './PricingList';
import { LeftLine, RightLine } from './design/Pricing';

const Pricing = () => {
  return (
    <Section id='pricing' className='scroll-mt-12 lg:scroll-mt-16'>
      <div className='container relative'>
        <div className='hidden relative justify-center mb-[6.5rem] lg:flex'>
          <img
            src={smallSphere}
            className='relative z-1'
            width={255}
            height={255}
            alt='Sphere'
          />
          <div className='absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none'>
            <img
              src={stars}
              className='w-full animate-pulse'
              width={950}
              height={400}
              alt='Stars'
            />
          </div>
        </div>

        <Heading
          tag='Get started with Brainwave'
          title='Pay once, use forever'
        />

        <div className='relative'>
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className='flex justify-center mt-12'>
          <a
            className='text-xs font-code font-bold tracking-wider uppercase border-b'
            href='/pricing'
          >
            See the full details
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
