import Layout from '../../components/layout';

export default function Hibee() {
  return (
    <Layout>
      <section>
        <h1>Welcome to Hibee's Page</h1>
        <h3>
          Your Local Hibaru in the <strong>HAUS</strong>
        </h3>
      </section>
      <section>
        <h3>Introduction</h3>
        <p>
          {' '}
          The best way to introduce a Hibee is by showing a picture of Hibee. I
          present you Hibee.
        </p>
        <img src="/images/hibee.jpg" alt="Photo of Hibee"></img>
        <p>
          {' '}
          Now now now, that's what I call a professional looking yet adorable
          Hibee. You guys can take a moment to enjoy and devour this moment.{' '}
          <strong>Enjoy</strong>
        </p>
      </section>
    </Layout>
  );
}
