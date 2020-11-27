import Headers from '../components/Headers';

export default function Hifi({ baseUrl }) {
  const mapurl = `${baseUrl}/api/hifi/map?baseUrl=${baseUrl}`;
  return (
    <div className="container">
      <Headers/>

      <main>
        <div className="header">
          <img src="/cultureaflot.png" className="logo"/>
        </div>

        <div className="room-container">
          <iframe
            className="room"
            allow='microphone'
            src={`https://map.highfidelity.com/a5UFm6s1TW83Kd0y/?mapJSON=${mapurl}`}
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

Hifi.getInitialProps = async ({ req }) => {
  let protocol = 'https:'
  let host = req ? req.headers.host : window.location.hostname
  if (host.indexOf('localhost') > -1) {
    protocol = 'http:'
  }

  const baseUrl = `${protocol}//${host}`;

  return {
    baseUrl
  }
};
