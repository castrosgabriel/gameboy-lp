import './App.scss'
import {
  SvgLogo,
  SvgMenuIcon,
  SvgBattery,
  SvgCartridge,
  SvgSize,
  SvgAudio,
  SvgLogoWhite,
  SvgPocket,
  PngGameboyMain,
  PngConnector,
  PngDpad,
  PngPhone,
  PngVolume,
  PngGameboyPocket,
  PngGameboyCartridge,
  PngGameboyAnima
} from './assets'
import MainButton from './components/MainButton'
import { useEffect, useRef } from 'react'

const App = () => {

  const featureElementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (featureElementRef.current) {
        const elementYPosition = (featureElementRef.current as HTMLElement).getBoundingClientRect().bottom;
        document.body.style.setProperty( 
          "--scroll",
          ((elementYPosition - (window.innerHeight * 0.65)) / window.scrollY).toString()
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    console.log('scrolling')
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div className='full-page'>
      <div className='first-container'>
        <header>
          <img src={SvgLogo} alt='Nintendo Logo' />
          <img src={SvgMenuIcon} alt='Menu Icon' />
        </header>
        <main className='main-container'>
          <div className='lettering'>
            <h1 className='game'>Game</h1>
            <img src={PngGameboyMain} alt='Gameboy image' />
            <h1 className='boy'>boy</h1>
          </div>
          <div className='price-cta'>
            <p><b>The future of Portable Entertainment</b></p>
            <p>From $149*</p>
            <MainButton>Order now</MainButton>
          </div>
        </main>
      </div>
      <div className='features' ref={featureElementRef} id='features'>
        <h2>PLAY PORTABLE WITH COMFORT</h2>
        <ul className='features-ul'>
          <li>
            <img src={PngPhone} alt='phones' />
            <p>Phone support</p>
          </li>
          <li>
            <img src={PngConnector} alt='connector' />
            <p>Multiplayer connector</p>
          </li>
          <li>
            <img src={PngDpad} alt='d-pad' />
            <p>Confortable Digital-Pad</p>
          </li>
          <li>
            <img src={PngVolume} alt='volume' />
            <p>Volume control</p>
          </li>
        </ul>
      </div>
      <div className='anywhere-container'>
        <img className='image-pocket-over' src={SvgPocket} alt='pocket' />
        <img className='image-pocket'src={PngGameboyAnima} alt='gameboy pocket' />
        <div className='anywhere-content'>
          <h2>PLAY ANYWHERE</h2>
          <ul>
            <li>
              <img src={SvgSize} alt='size' />
              <p>3 inches</p>
            </li>
            <li>
              <img src={SvgBattery} alt='battery' />
              <p>AAA Battery</p>
            </li>
            <li>
              <img src={SvgCartridge} alt='cartridge' />
              <p>Changable cartridge</p>
            </li>
            <li>
              <img src={SvgAudio} alt='audio' />
              <p>Stereo audio</p>
            </li>
          </ul>
        </div>
      </div>
      <div className='catalog-container'>
        <div className='catalog-content'>
          <div className='spacer' />
          <h2>The amazing <br /> Nintendo catalog</h2>
          <p>With more than 200 games, you will never get bored</p>
        </div>
        <MainButton> Check all games</MainButton>
        <img src={PngGameboyCartridge} alt='gameboy cartridge' />
      </div>
      <div className='unbreakable-container'>
        <div className='unbreakable-content'>
          <h1 className='unbr'>Unbr</h1>
          <img src={PngGameboyMain} alt='gameboy' />
          <h1 className='eakable'>eakable</h1>
        </div>
        <ul>
          <li>
            <div className='spacer' />
            <p>Built Tough for Lasting Play.</p>
          </li>
          <li>
            <div className='spacer' />
            <p>Resilient Gaming Adventures Await.</p>
          </li>
          <li>
            <div className='spacer' />
            <p>Ready for Anything, Anytime.</p>
          </li>
          <li>
            <div className='spacer' />
            <p>Enduring Legacy of Timeless Icon.</p>
          </li>
          <MainButton>Order now</MainButton>
        </ul>
      </div>
      <footer>
        <div className='footer-content'>
          <h2>ENJOY A FULL NINTENDO EXPERIENCE IN YOUR POCKET</h2>
          <div className='footer-cta'>
            <p>From $149*</p>
            <MainButton>Order now</MainButton>
          </div>
        </div>
        <div className='foot'>
          <img src={SvgLogoWhite} alt='Nintendo Logo' />
        </div>
      </footer>
    </div>
  )
}

export default App
