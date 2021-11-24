const ApplicationLogo = () => {
  return (
    <header className="absolute top-0 bg-white bg-opacity-[0.05] md:bg-transparent w-full h-[100px]">
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */ }
      <a href="/" className="absolute top-[35px] left-[42px]">
        <img src="https://assets.website-files.com/5f5f94343affd51e900cd45c/5f5f94343affd54edd0cd4af_byra-logo.svg"
             loading="lazy" width="75" height="" id="top" alt=""/>
      </a>
    </header>
  )
}

export { ApplicationLogo }