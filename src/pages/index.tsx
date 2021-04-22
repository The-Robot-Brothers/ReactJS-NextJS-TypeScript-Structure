import Head from 'next/head'

import HanokLogo from '../assets/hanok.svg'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>

      <main>
        {/* <HanokLogo /> */}
        <h1>Hello World</h1>
      </main>
    </div>
  )
}

export default Home
