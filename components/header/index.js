import { ApplicationLogo } from "../shared/applicationLogo";

const Header = () => {
  return (
    <section className="h-screen relative">
      <div className="absolute inset-0 flex items-center justify-center bg-black">
        <div className="text-white -ml-56 leading-none font-BebasNeue">
          <p className="tracking-[6px]">Design Is Intelligence</p>
          <p className="text-[160px] uppercase tracking-[5px] mt-4">Made Visible</p>
        </div>
      </div>
      <ApplicationLogo/>
    </section>
  )
}

export default Header;