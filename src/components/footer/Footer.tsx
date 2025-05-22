import { GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-indigo-900 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            Blog Pessoal Camille Tarine | Copyright: {data}
                        </p>
                    <p className='text-lg'>Acesse minhas redes sociais</p>
                    <div className='flex gap-2'>
                        <a href="https://www.linkedin.com/in/camille-tarine/" target='_blank'>
                            <LinkedinLogoIcon size={48} weight='bold' />
                        </a>
                        <a href="https://www.instagram.com/camille.tarine?igsh=MWhyYnJuNzFrd29lbQ==" target='_blank'>
                            <InstagramLogoIcon size={48} weight='bold' />
                        </a>
                        
                        <a href="https://github.com/CahTarine" target='_blank'>
                            <GithubLogoIcon size={48} weight='bold' />
                        </a>
                        
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer