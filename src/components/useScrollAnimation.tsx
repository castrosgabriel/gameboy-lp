import { useEffect } from "react";

//The way this hook works is:
//So you need to set your class animation delay with the variable by using the 'animation-delay: calc((var(--scroll) * -1s) + 'extra time in seconds');' property.
//The extra time is to make the animation start before the element is visible.

const useScrollAnimation = (elementRef: React.RefObject<HTMLElement>, propertyName: string) => {
    useEffect(() => {
        const handleScroll = () => {
          if (elementRef.current) {
            const elementYPosition = elementRef.current.getBoundingClientRect().bottom;
            const scroll = ((elementYPosition - (window.innerHeight * 0.65)) / window.scrollY).toString();
            document.body.style.setProperty(propertyName, `${scroll}`);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [elementRef, propertyName]);
    };
    
    export default useScrollAnimation;