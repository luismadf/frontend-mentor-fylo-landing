import { Button, EmailInput, Layout } from './components'
import './App.css'

function App() {
  return (
    <Layout>
      <section className="hero screen__wrapper">
        <div className="hero__info">
          <h2 className="hero__title">
            All your files in one secure location, accessible anywhere.
          </h2>

          <p>
            Fylo stores your most important files in one secure location. Access
            them wherever you need, share and collaborate with friends, family,
            and co-workers.
          </p>

          <form className="hero__form" onSubmit={() => {}}>
            <EmailInput />
            <Button>Get Started</Button>
          </form>
        </div>

        <img
          src="/images/illustration-1.svg"
          alt="hero image"
          className="hero__image"
        />
      </section>

      <section className="stay-productive">
        <div className="screen__wrapper">
          <div className="stay-productive__info">
            <h3>Stay productive, wherever you are</h3>
            <p>
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required!
            </p>

            <a href="#">
              See how Fylo works
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L136 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239c9.4 9.4 9.4 24.6 0 33.9L281 385z" />
              </svg>
            </a>

            <div className="stay-productive__quote">
              <svg width="13" height="12" xmlns="http://www.w3.org/2000/svg">
                <text
                  transform="translate(-34 -25)"
                  fill="#07043B"
                  fillRule="evenodd"
                  fontFamily="Helvetica"
                  fontSize="45"
                >
                  <tspan x="33" y="56">
                    “
                  </tspan>
                </text>
              </svg>

              <p>
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
              </p>

              <div className="stay-productive__quote--author">
                <img src="/images/avatar-testimonial.jpg" alt="ceo picture" />
                <div className="stay-productive__quote--author-info">
                  <p>Kyle Burton</p>
                  <span>Founder & CEO, Huddle</span>
                </div>
              </div>
            </div>
          </div>

          <img src="/images/illustration-2.svg" alt="stay productive image" />
        </div>
      </section>

      <section className="early-access">
        <div className="screen__wrapper">
          <div className="early-access__info">
            <h3>Get early access today</h3>
            <p>
              It only takes a minute to sign up and our free starter tier is
              extremely generous. If you have any questions, our support team
              would be happy to help you.
            </p>
          </div>

          <form onSubmit={() => {}}>
            <EmailInput fullWidth />
            <Button>Get Started For Free</Button>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default App
