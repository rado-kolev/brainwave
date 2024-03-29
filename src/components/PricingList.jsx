import { check } from '../assets';
import { pricing } from '../constants';
import Button from './Button';

const PricingList = () => {
  return (
    <div className='flex gap-[1rem] max-lg:flex-wrap'>
      {pricing.map((item) => (
        <div
          key={item.id}
          className='w-[19rem] max-lg:w-full h-full even:bg-conic-gradient-2 odd:border odd:border-n-6 rounded-3xl p-0.25 lg:w-auto odd:mt-8'
        >
          <div className='bg-n-8 px-6 rounded-3xl py-8'>
            <h4 className={`h4 mb-4 text-${item.textColor}`}>{item.title}</h4>

            <p className='body-2 min-h-[4rem] mb-3 text-n-1/50'>
              {item.description}
            </p>

            <div className='flex items-center h-[5.5rem] mb-6'>
              {item.price && (
                <>
                  <div className='h3'>£</div>
                  <div className='text-[5.5rem] leading-none font-bold'>
                    {item.price}
                  </div>
                </>
              )}
            </div>

            <Button
              className='w-full mb-6'
              href={item.price ? '/pricing' : 'mailto:contact@brainwave.io'}
              white={!!item.price}
            >
              {item.price ? 'Get started' : 'Contact us'}
            </Button>

            <ul>
              {item.features.map((feature, index) => (
                <li
                  key={index}
                  className='flex items-start py-5 border-t border-n-6'
                >
                  <img src={check} width={24} height={24} alt='Check' />
                  <p className='body-2 ml-4'>{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
