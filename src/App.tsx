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
  PngGameboyCartridge,
  PngGameboyAnima
} from './assets'
import MainButton from './components/MainButton'
import { useRef } from 'react'
import useScrollAnimation from './components/useScrollAnimation'
import usePlayAnimation from './components/usePlayAnimation'

const App = () => {

  const footerElementRef = useRef(null);

  const elementRef = {
    anywhere: useRef(null),
    anywhereTitle: useRef(null),
    anywhereUl: useRef(null),
    anywherePocket: useRef(null),
    feature: useRef(null),
    catalog: useRef(null),
    unbreakableImg: useRef(null),
    unbreakableText: useRef(null),
    unbreakableUl: useRef(null)
  };

  const animations = new Map([
    [elementRef.anywherePocket, { animationName: 'pocket', refOffset: 250 }],
    [elementRef.anywhere, { animationName: 'game-pocket', refOffset: 250}],
    [elementRef.anywhereTitle, { animationName: 'h2-anywhere', refOffset: 650 }],
    [elementRef.anywhereUl, { animationName: 'ul-anywhere', refOffset: 450 }],
    [elementRef.unbreakableText, { animationName: 'unbreakabletext', refOffset: 2300 }],
    [elementRef.unbreakableImg, { animationName: 'unbreakableimg', refOffset: 1800 }],
    [elementRef.unbreakableUl, { animationName: 'ul-unbreakable', refOffset: 2000 }],
  ]);

  animations.forEach((props, elementRef) => {
    usePlayAnimation(elementRef, props.animationName, props.refOffset);
  });


  const scrollAnimation = new Map([
    [elementRef.feature, '--scroll'],
    [elementRef.catalog, '--catalog'],
  ]);

  scrollAnimation.forEach((propertyName, elementRef) => {
    useScrollAnimation(elementRef, propertyName);
  });


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
      <div className='features' ref={elementRef.feature} id='features'>
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
      <div className='anywhere-container' id='anywhere'>
        <img className='image-pocket-over' ref={elementRef.anywherePocket} src={SvgPocket} alt='pocket' />
        <img className='image-pocket' ref={elementRef.anywhere} src={PngGameboyAnima} alt='gameboy pocket' />
        <div className='anywhere-content' >
          <h2 ref={elementRef.anywhereTitle}>PLAY ANYWHERE</h2>
          <ul ref={elementRef.anywhereUl}>
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
      <div className='catalog-container' ref={elementRef.catalog}>
        <div className='catalog-content'>
          <div className='spacer' />
          <h2>The amazing <br /> Nintendo catalog</h2>
          <p>With more than 200 games, you will never get bored</p>
        </div>
        <div className='main-button'>
          <MainButton> Check all games</MainButton>
        </div>
        <img src={PngGameboyCartridge} alt='gameboy cartridge' />
      </div>
      <div className='unbreakable-container' ref={elementRef.unbreakableImg}>
        <div className='unbreakable-content'>
          <h1 ref={elementRef.unbreakableText} className='unbr'>Unbr</h1>
          <img src={PngGameboyMain} alt='gameboy' />
          <h1 className='eakable'>eakable</h1>
        </div>
        <ul ref={elementRef.unbreakableUl}>
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
      <footer ref={footerElementRef}>
        <div className='footer-content'>
          <h2>ENJOY A FULL NINTENDO <br /> EXPERIENCE IN YOUR POCKET</h2>
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
