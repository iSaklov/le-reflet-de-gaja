import Image from 'next/image'
import Logo from '@/assets/images/logo_home.svg'
import Gaja from '@/assets/images/logo_gaja.svg'
import Developer from '@/assets/images/icons/material-symbols-light_developer-board-sharp.svg'
import Welcome from '@/assets/images/icons/mdi_human-welcome.svg'
import Phone from '@/assets/images/icons/ph_phone-fill.svg'
import FollowUs from '@/assets/images/icons/bi_phone-fill.svg'
import Instagram from '@/assets/images/icons/circum_instagram.svg'
import Facebook from '@/assets/images/icons/circum_facebook.svg'
import Massage from '@/assets/images/icons/tabler_massage.svg'
import Eye from '@/assets/images/icons/clarity_eye-show-solid.svg'
import Zone from '@/assets/images/icons/mdi_timezone.svg'

export default function Home() {
  return (
    <div className='font-body container mx-auto flex min-h-screen flex-col items-center justify-start gap-y-6 bg-gaja-gradient px-5 py-10'>
      <header>
        <Image src={Logo} alt='Logo le Reflet de Gaja' width={320} />
      </header>
      <main>
        <section className='text-justify text-deep-purple md:flex md:flex-wrap '>
          <article className='__responsive-bg-checker flex-start hidden h-80 flex-col items-center justify-center gap-y-4 px-16 py-6 md:flex md:w-1/2 xl:w-1/3'>
            <Image src={Developer} alt='' width={48} height={48} />
            <h2 className='text-lg font-bold'>Veuillez patienter</h2>
            <p>
              Ce site est actuellement en construction. Une page complète sera
              disponible très bientôt. Merci pour votre patience.
            </p>
          </article>
          <article className='__responsive-bg-checker flex-start flex h-80 flex-col items-center justify-center gap-y-4 px-16 py-6 md:w-1/2 xl:w-1/3'>
            <Image src={Welcome} alt='' width={48} height={48} />
            <h2 className='text-lg font-bold'>Bienvenue</h2>
            <p>
              Chez Le Reflet de Gaja, où votre bien-être est notre priorité.
              Découvrez la pureté d&apos;un massage authentique dans le confort
              de votre foyer.
            </p>
          </article>
          <article className='__responsive-bg-checker flex-start flex h-80 flex-col items-center justify-center gap-y-4 px-16 py-6 md:w-1/2 xl:w-1/3'>
            <Image src={Phone} alt='' width={48} height={48} />
            <h2 className='text-lg font-bold'>Prenez rendez-vous</h2>
            <p>
              Dès aujourd&apos;hui pour planifier votre session de relaxation ou
              pour toute demande d&apos;information, contactez-nous au:{' '}
              <a href='tel:+33763562215' className='font-semibold'>
                07.63.56.22.15
              </a>
            </p>
          </article>
          <article className='__responsive-bg-checker flex-start flex h-80 flex-col items-center justify-center gap-y-4 px-16 py-6 md:w-1/2 xl:w-1/3'>
            <Image src={FollowUs} alt='' width={48} height={48} />
            <h2 className='text-lg font-bold'>Suivez-nous</h2>
            <p>
              Restez informé(e) de nos dernières actualités et offres exclusives
              en nous suivant sur nos réseaux sociaux :
            </p>
            <div className='flex items-center justify-center gap-x-10'>
              <a
                href='https://instagram.com/refletdegaja'
                target='_blank'
                rel='noopener noreferrer'
                className='transition-transform duration-300 hover:scale-110'
              >
                <Image src={Instagram} alt='Instagram' width={32} height={32} />
              </a>
              <a
                href='https://facebook.com/refletdegaja'
                target='_blank'
                rel='noopener noreferrer'
                className='transition-transform duration-300 hover:scale-110'
              >
                <Image src={Facebook} alt='Facebook' width={32} height={32} />
              </a>
            </div>
          </article>
          <article className='__responsive-bg-checker flex-start flex h-80 flex-col items-center justify-center gap-y-4 px-16 py-6 md:w-1/2 xl:w-1/3'>
            <Image src={Massage} alt='' width={48} height={48} />
            <h2 className='text-lg font-bold'>Nos massages</h2>
            <p>
              Nous offrons une variété de massages bien-être, conçus pour vous
              apporter détente et relaxation. Découvrez le bien-être à domicile
              avec Le Reflet de Gaja.
            </p>
            <div className='relative flex items-center justify-center'>
              <Image
                src={Eye}
                alt=''
                width={32}
                height={32}
                className='transition-transform duration-300 hover:scale-110 hover:cursor-pointer'
              />
              <span className='font-cursive absolute left-full ml-1 whitespace-nowrap text-base'>
                clique pour voir nos tarifs
              </span>
            </div>
          </article>
          <article className='__responsive-bg-checker flex-start flex h-80 flex-col items-center justify-center gap-y-4 px-16 py-6 md:w-1/2 xl:w-1/3'>
            <Image src={Zone} alt='' width={48} height={48} />
            <h2 className='text-lg font-bold'>Zone de service</h2>
            <p>
              Nous desservons Rambouillet (78120), Chartres (28000), Dreux,
              Maintenon, Nogent-le-Roi, Épernon, Gallardon ainsi que leurs
              environs. Contactez-nous pour confirmer la disponibilité dans
              votre secteur.
            </p>
          </article>
        </section>
      </main>
      <footer className='text-center text-xs'>
        <div className='flex items-center justify-center gap-x-5'>
          <Image src={Gaja} alt='Logo' width={80} />
          <p>
            EI (Entreprise Individuelle) Clara Launay <br />
            28230 Épernon
          </p>
        </div>
        <p>© 2024 Le Reflet de Gaja. Tous droits réservés.</p>
      </footer>
    </div>
  )
}
