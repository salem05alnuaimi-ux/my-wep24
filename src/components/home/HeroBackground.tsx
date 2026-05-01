import Spline from '@splinetool/react-spline/next';

export default function HeroBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen pointer-events-none" style={{ zIndex: -20 }}>
      <Spline scene="https://prod.spline.design/ZGonUqJcJWsceBFe/scene.splinecode" />
    </div>
  );
}
