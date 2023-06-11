import OauthGitButtom from '@/components/OauthGitButtom'

export default function Home() {
  return (
    <main className="relative flex h-[65.625rem] flex-col items-center overflow-x-hidden">
      <div className="absolute top-[-2.6%] h-[29.313rem] w-[33.313rem] animate-spin-slow bg-[url(../assets/lp-bg-main.svg)] bg-contain bg-center bg-no-repeat lg:top-[0.88%] lg:w-[40.875rem]" />
      {/* {bg-react} */}

      <div className="absolute h-[400px] w-[300px] bg-[#00875F] opacity-10 blur-3xl lg:left-0 lg:top-[0.88%]" />
      {/* {blur} */}

      <div className="flex h-[42rem] w-full max-w-[76rem] flex-col items-center justify-center gap-9 lg:mt-5 lg:h-[20rem] lg:flex-row lg:justify-between">
        <div className="flex h-[17.5rem] w-[19.5rem] max-w-[39rem] flex-col items-center gap-6 lg:w-[39rem] lg:items-start">
          <div className="h-[1.849rem] w-[13rem] bg-[url(../assets/lp-logo.png)] bg-cover"></div>
          {/* {logo} */}

          <div className="flex h-[7.125rem] w-full items-center justify-center text-center lg:mt-[8px] lg:text-start">
            <span className="text-3xl lg:text-[2.4rem]">
              Construa uma{' '}
              <strong className="text-[#81D8F7]">aplicação completa</strong>, do
              zero, com <strong className="text-[#81D8F7]">React JS</strong>
            </span>
          </div>
          {/* {headline} */}

          <div className="flex h-[5.5rem] w-full items-center justify-center text-center">
            <span className="text-sm leading-relaxed lg:text-start">
              Em apenas uma semana você vai dominar na prática uma das
              tecnologias mais utilizadas e com alta demanda para acessar as
              melhores oportunidades do mercado.
            </span>
          </div>
          {/* {subline} */}
        </div>
        {/* {hero} */}

        <div className="z-10 flex h-[20rem]  w-full items-center justify-center rounded border-[1px] border-[#323238] bg-[#121214] md:w-[24.438rem]">
          <div className="flex h-[16rem] w-[19.5rem] flex-col ">
            <span className="mb-[80px] text-lg font-bold text-[#ffff]">
              Inscreva-se gratuitamente
            </span>
            <OauthGitButtom />
          </div>
        </div>
        {/* {login} */}
      </div>
      {/* {containerUp} */}

      <div className="relative z-10 h-[14.688rem] max-h-[40.625rem] w-full max-w-[76rem] border-[1px] border-gray-400 bg-[url(../assets/lp-bg-dow.png)] lg:mt-2 lg:h-[40.625rem]"></div>
      {/* {containerDow} */}

      <footer className="flex h-[8.688rem] w-full items-center justify-center border-t-[1px] border-gray-200 md:h-[3.399rem]">
        <div className="flex h-[90%] w-full flex-col items-center justify-center gap-4 md:w-[90%] md:flex-row md:justify-between">
          <h1 className="text-xl font-bold text-[#fff]">Fagner Henrique</h1>
          <span className="text-bold text-gray-300">
            NextEDU - Todos os direitos reservados
          </span>
          <span className="text-bold text-gray-300">
            Políticas de privacidade
          </span>
        </div>
      </footer>
    </main>
  )
}
