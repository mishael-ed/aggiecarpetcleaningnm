import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import PageSeo from '../../Components/PageSeo';
import './TileGrout.css';

const tileGroutSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Aggie Carpet Cleaning',
  url: 'https://aggiecarpetcleaning.com',
  telephone: '(505) 538-5469',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Las Cruces',
    addressRegion: 'NM',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'City', name: 'Las Cruces', sameAs: 'https://en.wikipedia.org/wiki/Las_Cruces,_New_Mexico' },
    { '@type': 'City', name: 'El Paso', sameAs: 'https://en.wikipedia.org/wiki/El_Paso,_Texas' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Tile and Grout Cleaning Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Tile Cleaning Las Cruces',
          description:
            'Professional tile cleaning in Las Cruces, NM. We remove embedded dirt, restore grout color, and improve the appearance of ceramic, porcelain, and other tile floors.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Grout Cleaning Las Cruces',
          description:
            'Deep grout cleaning in Las Cruces, NM. Our process lifts embedded soil from grout lines and restores a cleaner, brighter appearance.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Tile and Grout Cleaning El Paso',
          description:
            'Professional tile and grout cleaning in El Paso, TX. We target desert dust, hard water residue, and embedded grime to restore hard floors.',
        },
      },
    ],
  },
};

const TileGrout = () => {
  return (
    <div className="tg-page">
      <PageSeo
        title="Tile and Grout Cleaning in Las Cruces, NM and El Paso, TX | Aggie Carpet Cleaning"
        description="Professional tile and grout cleaning in Las Cruces, NM and El Paso, TX. Aggie Carpet Cleaning removes embedded soil, restores grout color, and helps hard floors stay cleaner longer."
        canonicalPath="/services/tile-grout"
        keywords="tile cleaning Las Cruces, grout cleaning Las Cruces, tile and grout cleaning El Paso, tile floor cleaning El Paso, hard floor cleaning"
        schema={tileGroutSchema}
      />
      <Navbar />

      <section className="tg-hero">
        <div className="tg-hero-inner">
          <h1>Tile and Grout Cleaning in Las Cruces and El Paso</h1>
          <h2>Deep tile floor cleaning that removes embedded dirt, dull grout haze, and everyday buildup</h2>
          <p>
            Tile and grout are naturally porous, so even well-maintained floors can start to look dark,
            dingy, or uneven over time. Aggie Carpet Cleaning provides professional tile and grout cleaning
            in Las Cruces, NM and El Paso, TX for kitchens, bathrooms, entryways, laundry rooms, and other
            high-traffic areas where soil settles deep into the grout lines.
          </p>
          <p>
            We use professional-grade equipment and proven cleaning methods to loosen stuck-on grime,
            lift residue from textured tile, and restore a cleaner, brighter finish. If your floors still
            look dirty right after mopping, a deep tile cleaning service is usually the missing step.
          </p>
          <p className="tg-cta-line">
            Schedule tile cleaning service today if you want fresher-looking floors in Las Cruces or El Paso.
          </p>
          <Link to="/contact" className="tg-connect-btn">Let's Connect</Link>
        </div>
      </section>

      <section className="tg-further">
        <div className="tg-further-inner">
          <div className="tg-further-text">
            <h2>Why homeowners book tile cleaning with Aggie Carpet Cleaning</h2>
            <p>
              When grout lines start to look dull, patchy, or permanently stained, routine surface cleaning
              usually is not enough. Our tile floor cleaning service is built to target the grime that settles
              below the surface and leaves floors looking older than they really are.
            </p>
            <p>Our thorough tile and grout cleaning service can help:</p>

            <div className="tg-checklist">
              <div className="tg-check-item">
                <span className="tg-checkmark">✓</span>
                <span>Lift embedded dirt, grease, soap residue, and tracked-in soil</span>
              </div>
              <div className="tg-check-item">
                <span className="tg-checkmark">✓</span>
                <span>Restore cleaner grout lines and a brighter tile surface</span>
              </div>
              <div className="tg-check-item">
                <span className="tg-checkmark">✓</span>
                <span>Improve the appearance of kitchens, bathrooms, and entry floors</span>
              </div>
            </div>

            <p className="tg-outro">
              Regular deep cleaning can extend the life of your hard floors and keep the whole room looking
              better between maintenance visits.
            </p>
          </div>

          <div className="tg-further-image">
            <img
              src={require('../tile-floor-bathroom.jpg')}
              alt="Tile and grout cleaning service"
            />
          </div>
        </div>
      </section>

      <section className="tg-details">
        <div className="tg-details-inner">
          <div className="tg-details-copy">
            <h2>Tile floor cleaning for Las Cruces, NM and El Paso, TX</h2>
            <p>
              Homes in Las Cruces and El Paso collect a lot of fine dust, desert soil, and outdoor debris.
              On tile floors, that material settles into grout joints and textured surfaces where a mop cannot
              fully remove it. That is why tile can lose its color and grout can darken even when you clean it regularly.
            </p>
            <p>
              Our service is a fit for ceramic tile, porcelain tile, and many common hard-surface floor layouts.
              Whether you need help cleaning one problem area or multiple rooms, we focus on removing buildup
              and improving the overall look of the floor without leaving behind sticky residue.
            </p>

            <h2>Popular reasons customers call us</h2>
            <p>
              Customers usually reach out when grout lines look black, bathrooms feel impossible to keep clean,
              or kitchen tile keeps looking cloudy. We also help when a home is being prepared for guests,
              photos, a move, or routine upkeep after heavy foot traffic.
            </p>
            <p>
              If you need more than tile cleaning, you can also explore our{' '}
              <Link to="/services/carpet-cleaning">carpet cleaning services</Link>,{' '}
              <Link to="/services/tile-installation-repair">tile installation and repair</Link>, and our{' '}
              <Link to="/blog/el-paso-guide-tile-grout-cleaning">El Paso tile and grout cleaning guide</Link>{' '}
              for more local hard-floor advice.
            </p>
          </div>

          <aside className="tg-service-area-card">
            <h3>Service areas for tile and grout cleaning</h3>
            <p>
              We serve homeowners and property managers across Las Cruces, El Paso, and nearby communities.
              Visit our <Link to="/info/areas-we-serve">areas we serve page</Link> if you want to confirm coverage.
            </p>
            <p>
              Ready for an estimate? Use our <Link to="/contact">contact page</Link> to request service and tell us
              which rooms need attention.
            </p>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TileGrout;