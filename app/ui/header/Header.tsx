import Brand from "./Brand";
import NavMenu  from "./NavMenu";

export default function Header() {

  return (
    <header className={`
        sticky top-0 z-50
        bg-brand-secondary
        transition-all duration-300
        header-shadow
  `}>
      <div className="flex items-center gap-11 relative px-8 sm:px-4 py-1 shadow-xl">
        <div className={`container max-w-full mx-auto px-4 sm:px-4 lg:px-4`}>
          <div className="flex items-center justify-between w-full">
            <Brand />
            <div className={`
              flex-grow flex justify-center font-greatvibes 
              text-accent-accentgreenvar 
              text-shadow-xl
              text-2xl tracking-normal 
              leading-[10px]
            `}>
              <span className="absolute top-5 left-40">
                Non Perditio Dolorem 
              </span>
            </div>
            <NavMenu className="flex-grow flex justify-end" />
          </div>
        </div>
      </div>
    </header>
  );
};
