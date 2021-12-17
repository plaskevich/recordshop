import './Landing.scoped.scss';
import { Link } from 'react-router-dom';
import { IoCaretDownCircleOutline } from 'react-icons/io5';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

export default function Landing() {
  const { scrollYProgress } = useViewportScroll();

  const scaleVinyl = useTransform(scrollYProgress, [0, 0.5, 1], [1, 3.5, 1.4]);
  const yVinyl = useTransform(scrollYProgress, [0, 0.5, 1], [0, 850, 1470]);
  const xVinyl = useTransform(scrollYProgress, [0, 0.5, 1], [0, 500, 1180]);
  const xText = useTransform(scrollYProgress, [0, 0.5, 1], [0, 200, 1180]);
  const filter = useTransform(scrollYProgress, (v) => `blur(${v * 50}px)`);
  const opacity = useTransform(scrollYProgress, (v) => `${1 - v}`);

  const xFirstLine = useTransform(scrollYProgress, [0, 1], [0, -2000]);
  const xSecondLine = useTransform(scrollYProgress, [0, 0.1, 1], [0, 0, 1500]);
  const xThirdLine = useTransform(scrollYProgress, [0, 0.2, 1], [0, 0, -2200]);

  return (
    <div className='main'>
      <div className='nav'>
        <Link to='/' className='logo'>
          record shop
        </Link>
        <div className='nav-btns'>
          <Link to='/login'>Login</Link>
          <Link to='/signup' className='signup'>
            <span>Get Started</span>
          </Link>
        </div>
      </div>
      <div className='landing-content'>
        <motion.div
          style={{
            paddingRight: '120px',
            fontSize: '90px',
            fontWeight: 900,
            textAlign: 'right',
            color: '#fff',
          }}
        >
          <motion.p
            style={{
              position: 'fixed',
              top: 180,
              right: 150,
              x: xFirstLine
            }}
          >
            Simple tool to manage
          </motion.p>
          <motion.p
            style={{
              position: 'fixed',
              top: 290,
              right: 150,
              x: xSecondLine
            }}
          >
            local inventory
          </motion.p>
          <motion.div
            style={{
              position: 'fixed',
              top: 400,
              right: 150,
              x: xThirdLine
            }}
            className='last-line'
          >
            of your record shop
          </motion.div>
          <motion.div
          style={{
            position: 'fixed',
            top: 500,
            left: 0,
            right: 0
          }}>
            <Link to='/signup' className='try-now'>
              <span>TRY NOW</span>
            </Link>
          </motion.div>
          
          <div className='more-info'>
            scroll for more info
            <IoCaretDownCircleOutline size='29px' />
          </div>
        </motion.div>

        <motion.div
          style={{
            position: 'absolute',
            top: '620px',
            left: '100px',
            // scale: scaleVinyl,
            y: yVinyl,
            x: xVinyl,
          }}
        >
          <svg
            width='290'
            height='290'
            viewBox='0 0 290 290'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='145' cy='145' r='145' fill='#0F35F7' />
            <circle cx='144.442' cy='144.442' r='42.9423' fill='#FFE607' />
            <circle cx='145' cy='145' r='7.80769' fill='#141415' />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}
