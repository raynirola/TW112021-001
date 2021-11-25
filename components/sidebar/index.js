const Sidebar = () => {
  return (
    <section
      className="hidden fixed inset-y-0 right-0 h-screen text-white w-[100px] sm:flex flex-col justify-between border-l border-white/20">
      <button className="w-full h-[100px] ml-auto hover:bg-white/10 flex-shrink-0">
        <div className="mx-auto w-max">
          <div className="h-px w-[32px] bg-white"/>
          <div className="mt-3 h-px w-[22px] bg-white"/>
        </div>
      </button>
      <div className="flex-1 flex flex-col items-center h-full justify-center">
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */ }
        <a href="/" className="inline-flex items-center justify-center w-full h-[100px]  ml-auto hover:bg-white/10">
          <div className="mx-auto w-max">
            <img className="h-[18px] w-[18px]"
                 src="https://assets.website-files.com/5f5f94343affd51e900cd45c/5f5f94343affd579b80cd4ac_instagram-sketched%20yellow-01.svg"
                 alt=""/>
          </div>
        </a>
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */ }
        <a href="/" className="inline-flex items-center justify-center w-full h-[100px]  ml-auto hover:bg-white/10">
          <div className="mx-auto w-max">
            <img className="h-[18px] w-[18px]"
                 src="https://assets.website-files.com/5f5f94343affd51e900cd45c/5f5f94343affd53eb80cd4ab_facebook%20yellow-01.svg"
                 alt=""/>
          </div>
        </a>
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */ }
        <a href="/" className="inline-flex items-center justify-center w-full h-[100px]  ml-auto hover:bg-white/10">
          <div className="mx-auto w-max">
            <img className="h-[18px] w-[18px]"
                 src="https://assets.website-files.com/5f5f94343affd51e900cd45c/5f5f94343affd592f90cd4ad_twitter%20white-%20yellow.svg"
                 alt=""/>
          </div>
        </a>
      </div>
      <button className="w-full min-h-[200px] ml-auto hover:bg-white/10 border-t border-white/20 flex-shrink">
        <div className="mx-auto w-max -rotate-90 uppercase">
          Scroll
        </div>
      </button>
    </section>
  )
}

export default Sidebar