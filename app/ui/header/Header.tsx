import Brand from "./Brand";
import NavMenu  from "./NavMenu";

export default function Header({ className }: { className?: string }) {
  return (
    <header className={`${className}`}>
      <div className="flex items-center py-2">
        <div className={`container max-w-full mx-auto px-4 sm:px-4 lg:px-4`}>
          <div className="flex items-center justify-between w-full">
            {/* <Brand /> */}
            <div className={`
              flex-grow flex 
              justify-center
              font-martianmono
              text-bluegrays-deepspacesparkle
              text-[8px]
              md:text-sm
              leading-[8px]
              md:leading-2
            `}>
              <span className="absolute top-5 left-42 md:left-50 text-[8px] md:text-xs text-bluegrays-cadetblue tracking-tighter">
                I'm not just a node, I am circuits
              </span>
            </div>
            <NavMenu className="flex-grow flex justify-end" />
          </div>
        </div>
      </div>
    </header>
  );
};
