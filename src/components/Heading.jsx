import PropTypes from 'prop-types';
import { curve } from '../assets';
import Tagline from './Tagline';

const Heading = ({ className, title, text, showSpan = false, tag }) => {
  return (
    <div
      className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}
    >
      {tag && (
        <Tagline className='mb-4 md:justify-center'>
          {tag}
        </Tagline>
      )}
      {title && (
        <h2 className='h2'>
          {title}{' '}
          {showSpan && (
            <span className='inline-block relative'>
              Brainwave{' '}
              <img
                src={curve}
                className='absolute top-full left-0 w-full xl:-mt-2'
                width={624}
                height={28}
                alt='Curve'
              />
            </span>
          )}
        </h2>
      )}
      {text && <p className='body-2 mt-4 text-n-4'>{text}</p>}
    </div>
  );
};

Heading.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  showSpan: PropTypes.bool,
  tag: PropTypes.string,
};

// Heading.defaultProps = {
//   showSpan: true, // By default, show the span
// };

export default Heading;
