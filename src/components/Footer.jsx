import styles from '../style'
import {logo} from '../assets'
import {footerLinks} from '../constants'

const Footer = () => (
   <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className='flex-1 flex flex-col justify-start mr-10'>
        <img src={logo} alt="logo" className='w-[300px] h-[102px] object-contain'/>
        <p className={`${styles.paragraph} max-w-[310px]`}>Serving Jackson and the greater West TN</p>
      </div>
      <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
        {footerLinks.map((footerLink) => (
          <div key={footerLink.key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
            <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
              {footerLink.title}
            </h4>
            <ul className='list-none mt-4'>
              {footerLink.links.map((Link, index) => (
                <li key={Link.name} className={`font-poppins font-normal text-[16px] leading-[24px text-slate-500 hover:text-secondary cursor-pointer ${index !== footerLink.links.map - 1 ? 'mb-4' : 'mb-0'}`}>
                  {Link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className='w-full flex justify-between items-center md:flex-col pt-6 border-t-[2px] border-t-[#3F3r45]'>
      <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-slate-500'>
      Estsblished in 2000 Mobile Magic Pressure Washing Company
      </p>
    </div>
   </section>
)


export default Footer
