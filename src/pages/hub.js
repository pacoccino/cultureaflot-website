import Headers from '../components/Headers';
import Image from 'next/image';

export default function Hub() {
  return (
    <div className="container">
      <Headers/>

      <main>
        <div className="header">
          <Image
            src="/images/cultureaflot.png"
            alt="Culture a flot logo"
            width={60}
            height={60}
            className="logo"
          />
        </div>

        <div className="room-container">
          <iframe
            src="https://hubs.mozilla.com/7osqUrG/polished-fixed-meet?embed_token=be895882f9a0f1783995b0b4d280c3e3"
            allow="microphone; camera; vr; speaker;"
            className="room"
          />
        </div>
      </main>

      <style jsx>{`

        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .header {
          height: 60px;
          width: 100%;
          background-color: black;

          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        
        .logo {
          width: 50px;
        }
         
        .room-container {
          width: 100%;
        }
        
        .room {
          height: calc(100vh);
          max-height: calc(100vh - 60px);
          width: 100%;
          border-width: 0;
        }
        
      `}</style>

      <style jsx global>{`
        html,
        body {
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
