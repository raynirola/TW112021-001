const ApplicationLogo = () => {
  return (
    // eslint-disable-next-line @next/next/no-html-link-for-pages
    <a href="/" className="absolute top-[35px] left-[42px]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="https://assets.website-files.com/5f5f94343affd51e900cd45c/5f5f94343affd54edd0cd4af_byra-logo.svg"
           loading="lazy" width="75" height="" id="top" alt=""/>
    </a>
  )
}

export { ApplicationLogo }