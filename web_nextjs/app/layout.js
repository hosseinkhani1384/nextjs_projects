import "./globals.css";
import Particles from "@/components/Particles";
import SplashCursor from "@/components/SplashCursor";
import Topnavbar from "@/components/Topnavbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <SplashCursor />
        <Topnavbar />
        <div className="fixed inset-0 -z-10">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={600}
          particleSpread={10}
          speed={0.3}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
        {children}
        </body>
    </html>
  );
}
