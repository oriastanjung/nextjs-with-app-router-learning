import NavBar from '../components/NavBar';
import { exo2, orbitron } from './font';
import './globals.css';

export const metadata = {
  title : {
    default : "Indie Gamer",
    template : "%s | Indie Gamer"
  },
  description : "Only the best indie games, reviewed for you.",
  keywords : ['Next JS', 'React', 'Javascript'],
  applicationName : "Indie Gamer",
  colorScheme : "light"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${orbitron.variable} ${exo2.variable}`}>
      <body className="bg-orange-50 flex flex-col px-4 py-2 min-h-screen">
        <header>
          <NavBar />
        </header>
        <main className="grow py-3">
          {children}
        </main>
        <footer className="border-t py-3 text-center text-slate-500 text-xs">
          Game data and images courtesy of{' '}
          <a href="https://rawg.io/" target="_blank"
            className="text-orange-800 hover:underline">
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
}
