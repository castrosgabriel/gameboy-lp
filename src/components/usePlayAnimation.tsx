import { useEffect } from "react";

//The way this hook works is: 
// it sets up a variable in the body, with the same name of the animation. 
//So you need to tell your class to animate the variable by using the 'animation-name: var(--animation-name)' property.
//And the animation you set need to have the same name as animationName prop when instantiating the hook.

const usePlayAnimation = (elementRef: React.RefObject<HTMLElement>, animationName: string, refOffset?: number) => {
    useEffect(() => {
      const handlePlayAnimation = () => {
        if (elementRef.current) {
          const elementYPosition = elementRef.current.getBoundingClientRect().bottom;
          if ((elementYPosition + (refOffset ?? 0)) < window.scrollY) {
            document.body.style.setProperty(`--${animationName}`, animationName);
          }
        }
      };
  
      window.addEventListener('scroll', handlePlayAnimation);
  
      return () => {
        window.removeEventListener('scroll', handlePlayAnimation);
      };
    }, [elementRef, animationName]);
  };
  
  export default usePlayAnimation;