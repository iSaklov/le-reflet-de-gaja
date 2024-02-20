import Image from 'next/image'
import ServicesListModal from '@/components/dev-placeholder/ServicesListModal'
import CustomDevAlert from '@/components/UI/CustomDevAlert'
import DevHeader from '@/components/dev-placeholder/DevHeader'
import DevSlider from '@/components/dev-placeholder/DevSlider'
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
    <>
      <DevHeader />
      <div className='w-full bg-gaja-gradient'>
        <main className='container mx-auto px-4 pb-12 pt-24'>
          <section className='grid auto-rows-fr grid-cols-1 divide-y text-justify text-deep-purple md:grid-cols-2  xl:grid-cols-3'>
            <article className='__responsive-bg-checker hidden flex-col items-center justify-start gap-y-4 px-16 py-6 md:flex'>
              <Image src={Developer} alt='' width={48} />
              <h2 className='text-lg font-bold'>Veuillez patienter</h2>
              <p>
                Ce site est actuellement en construction. Une page complète sera
                disponible très bientôt. Merci pour votre patience.
              </p>
            </article>
            <article className='__responsive-bg-checker flex flex-col items-center justify-start gap-y-4 px-16 py-6'>
              <Image src={Welcome} alt='' width={48} />
              <h2 className='text-lg font-bold'>Bienvenue</h2>
              <p>
                Chez Le Reflet de Gaja, où votre bien-être est notre priorité.
                Découvrez la pureté d&apos;un massage authentique dans le
                confort de votre foyer.
              </p>
            </article>
            <article className='__responsive-bg-checker flex flex-col items-center justify-start gap-y-4 px-16 py-6'>
              <Image src={Phone} alt='' width={48} />
              <h2 className='text-lg font-bold'>Prenez rendez-vous</h2>
              <p>
                Dès aujourd&apos;hui pour planifier votre session de relaxation
                ou pour toute demande d&apos;information, contactez-nous au:{' '}
                <a href='tel:+33763562215' className='font-semibold'>
                  07.63.56.22.15
                </a>
              </p>
            </article>
            <article className='__responsive-bg-checker flex flex-col items-center justify-start gap-y-4 px-16 py-6'>
              <Image src={FollowUs} alt='' width={48} />
              <h2 className='text-lg font-bold'>Suivez-nous</h2>
              <p>
                Restez informé(e) de nos dernières actualités et offres
                exclusives en nous suivant sur nos réseaux sociaux:
              </p>
              <div className='flex items-center justify-center gap-x-10'>
                <a
                  href='https://instagram.com/refletdegaja'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='transition-transform duration-300 hover:scale-110'
                >
                  <Image src={Instagram} alt='Instagram' width={32} />
                </a>
                <a
                  href='https://facebook.com/refletdegaja'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='transition-transform duration-300 hover:scale-110'
                >
                  <Image src={Facebook} alt='Facebook' width={32} />
                </a>
              </div>
            </article>
            <article className='__responsive-bg-checker flex flex-col items-center justify-start gap-y-4 px-16 py-6'>
              <Image src={Massage} alt='' width={48} />
              <h2 className='text-lg font-bold'>Nos massages</h2>
              <p>
                Nous offrons une variété de massages bien-être, conçus pour vous
                apporter détente et relaxation. Découvrez le bien-être à
                domicile avec Le Reflet de Gaja.
              </p>
              <div className='relative flex items-center justify-center'>
                <ServicesListModal
                  trigger={
                    <Image
                      src={Eye}
                      alt=''
                      width={32}
                      className='transition-transform duration-300 hover:scale-110'
                    />
                  }
                />
                <span className='absolute left-full ml-1 whitespace-nowrap font-cursive'>
                  clique pour voir nos tarifs
                </span>
              </div>
            </article>
            <article className='__responsive-bg-checker flex flex-col items-center justify-start gap-y-4 px-16 py-6'>
              <Image src={Zone} alt='' width={48} />
              <h2 className='text-lg font-bold'>Zone de service</h2>
              <p>
                Nous desservons Rambouillet (78120), Chartres (28000), Dreux,
                Maintenon, Nogent-le-Roi, Épernon, Gallardon ainsi que leurs
                environs. Contactez-nous pour confirmer la disponibilité dans
                votre secteur.
              </p>
            </article>
          </section>
          <div className='container mx-auto my-24 px-4 md:max-w-lg lg:max-w-xl xl:max-w-2xl'>
            <DevSlider />
          </div>
        </main>
        <footer className='container mx-auto flex flex-col items-center justify-start border-t-4 border-double border-zinc-100 px-4 py-12 text-xs'>
          <div className='flex items-center justify-center gap-x-5'>
            <Image src={Gaja} alt='Logo Le Reflet de Gaja' width={80} />
            <p className='text-center'>
              EI (Entreprise Individuelle) Clara Launay <br />
              28230 Épernon
            </p>
          </div>
          <p>© 2024 Le Reflet de Gaja. Tous droits réservés.</p>
        </footer>
      </div>
      <CustomDevAlert
        title='Veuillez patienter'
        icon={Developer}
        className='fixed bottom-0 px-2 pb-2 text-justify md:hidden'
      >
        <p>
          Ce site est actuellement en construction. Une page complète sera
          disponible très bientôt. Merci pour votre patience.
        </p>
      </CustomDevAlert>
    </>
  )
}
