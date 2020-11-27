import Headers from '../components/Headers';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container">
      <Headers/>

      <Image
        src="/images/cultureaflot.png"
        alt="Culture a flot logo"
        width={600}
        height={600}
        className="logo"
      />

      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        
        .logo {
          width: 80%;
          max-width: 600px;
       } 
      `}</style>

      <style jsx global>{`
        html,
        body {
          background-color: black;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
