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
        title="Tile Cleaning Las Cruces, NM | Professional Tile and Grout Cleaning | Aggie Carpet Cleaning"
        description="Professional tile cleaning in Las Cruces, NM and El Paso, TX. Aggie Carpet Cleaning removes embedded dirt, dark grout lines, and buildup from kitchens, bathrooms, and high-traffic areas."
        canonicalPath="/services/tile-grout"
        keywords="tile cleaning Las Cruces, grout cleaning Las Cruces, tile and grout cleaning Las Cruces NM, tile floor cleaning Las Cruces, tile and grout cleaning El Paso, hard floor cleaning"
        schema={tileGroutSchema}
      />
      <Navbar />

      {/* Hero */}
      <section className="tg-hero">
        <div className="tg-hero-inner">
          <h1>Professional Tile and Grout Cleaning in Las Cruces, NM and El Paso, TX</h1>
          <h2>Deep tile floor cleaning that removes embedded dirt, dark grout lines, dull buildup, and everyday grime from high-traffic areas throughout Las Cruces and El Paso.</h2>
          <p>
            Tile and grout are durable, but they are also naturally porous. Over time, dirt, oils, soap
            residue, desert dust, and foot traffic settle deep into grout lines and textured tile surfaces.
            Even homes that are cleaned regularly can start to develop dark grout, cloudy tile, or floors
            that never seem fully clean no matter how much they are mopped.
          </p>
          <p>
            Aggie Carpet Cleaning provides professional tile and grout cleaning services for homeowners in
            Las Cruces, El Paso, and surrounding communities including Sonoma Ranch, Metro Verde, Picacho
            Hills, Las Alturas, Talavera, and nearby neighborhoods.
          </p>
          <p>
            We use professional-grade tile cleaning equipment and proven deep-cleaning methods to loosen
            embedded grime, lift residue from grout lines, and restore a noticeably cleaner and brighter
            appearance to your floors. Whether you need kitchen tile cleaning, bathroom grout cleaning,
            shower tile restoration, or whole-home tile cleaning, our goal is to leave your hard floors
            looking fresher, cleaner, and easier to maintain.
          </p>
          <p className="tg-cta-line">
            If your tile floors still look dirty immediately after mopping, professional tile and grout
            cleaning is usually the missing step.
          </p>
          <Link to="/contact" className="tg-connect-btn">Let's Connect</Link>
        </div>
      </section>

      {/* Why choose professional tile cleaning */}
      <section className="tg-further">
        <div className="tg-further-inner">
          <div className="tg-further-text">
            <h2>Why Homeowners in Las Cruces and El Paso Choose Professional Tile Cleaning</h2>
            <p>
              Many homeowners are surprised by how much dirt can become trapped inside grout lines over
              time. Traditional mopping often pushes dirty water into porous grout instead of fully
              removing it. As residue builds up, grout lines can turn dark, uneven, or permanently stained
              in appearance.
            </p>
            <p>
              Professional tile and grout cleaning goes beyond surface-level cleaning by targeting the
              embedded buildup that household products cannot fully remove.
            </p>
            <p>Our tile cleaning service can help:</p>
            <div className="tg-checklist">
              <div className="tg-check-item">
                <span className="tg-checkmark">✓</span>
                <span>Remove embedded dirt, grease, soap residue, and tracked-in soil</span>
              </div>
              <div className="tg-check-item">
                <span className="tg-checkmark">✓</span>
                <span>Brighten grout lines and improve the appearance of tile floors</span>
              </div>
              <div className="tg-check-item">
                <span className="tg-checkmark">✓</span>
                <span>Eliminate dull haze and residue left behind by regular mopping</span>
              </div>
              <div className="tg-check-item">
                <span className="tg-checkmark">✓</span>
                <span>Improve the appearance of kitchens, bathrooms, laundry rooms, and entryways</span>
              </div>
              <div className="tg-check-item">
                <span className="tg-checkmark">✓</span>
                <span>Help floors look cleaner and feel fresher throughout the home</span>
              </div>
              <div className="tg-check-item">
                <span className="tg-checkmark">✓</span>
                <span>Restore tile surfaces affected by heavy foot traffic and everyday wear</span>
              </div>
            </div>
            <p className="tg-outro">
              Regular deep tile cleaning can also help extend the life of your hard floors by removing
              abrasive soil and buildup that slowly wears down the surface over time.
            </p>
          </div>
          <div className="tg-further-image">
            <img
              src={require('../tile-floor-bathroom.jpg')}
              alt="Professional tile and grout cleaning in Las Cruces"
            />
          </div>
        </div>
      </section>

      {/* Las Cruces + El Paso two-up */}
      <section className="tg-location-section">
        <div className="tg-location-inner">
          <div className="tg-location-copy">
            <h2>Tile and Grout Cleaning for Las Cruces Homes</h2>
            <p>
              Homes throughout Las Cruces deal with a unique combination of desert dust, outdoor debris,
              fine soil, and dry climate conditions. Even in newer homes, those particles settle deep into
              grout joints and textured tile surfaces where ordinary mopping cannot fully reach.
            </p>
            <p>
              This is especially common in neighborhoods like Sonoma Ranch, Metro Verde, Picacho Hills,
              Las Alturas, and Talavera where tile flooring is extremely common due to the Southwestern
              climate and style of local homes.
            </p>
            <p>Over time, homeowners often notice:</p>
            <ul className="tg-ul">
              <li>Dark grout lines</li>
              <li>Dingy-looking tile</li>
              <li>Cloudy or uneven floors</li>
              <li>Sticky residue after mopping</li>
              <li>Soil buildup near entryways</li>
              <li>Dirty-looking kitchen grout</li>
              <li>Bathroom tile discoloration</li>
              <li>High-traffic wear patterns</li>
            </ul>
            <p>
              Professional tile and grout cleaning helps remove the buildup hidden below the surface so
              your floors can look brighter and cleaner again.
            </p>
          </div>
          <div className="tg-location-copy">
            <h2>Tile Cleaning Services for El Paso Homes</h2>
            <p>
              Tile flooring is one of the most popular flooring choices throughout El Paso because it
              handles heat, pets, foot traffic, and daily life well. However, even durable tile floors
              eventually develop buildup that routine cleaning cannot fully remove.
            </p>
            <p>Our tile and grout cleaning services in El Paso help homeowners tackle:</p>
            <ul className="tg-ul">
              <li>Heavy foot traffic buildup</li>
              <li>Kitchen grease residue</li>
              <li>Bathroom grout discoloration</li>
              <li>Pet-related dirt and staining</li>
              <li>Dust accumulation</li>
              <li>Hard water residue</li>
              <li>Soap scum buildup in showers and bathrooms</li>
            </ul>
            <p>
              Whether you need a single room cleaned or tile cleaning throughout the entire house, we
              focus on deep extraction and thorough cleaning methods designed to improve the appearance
              of both the tile surface and grout lines.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="tg-process-section">
        <div className="tg-process-inner">
          <h2>Our Professional Tile and Grout Cleaning Process</h2>
          <p>
            Every tile floor is different, which is why we tailor our cleaning process to the condition
            of the floor, the type of tile, and the level of buildup present.
          </p>
          <div className="tg-process-steps">
            <div className="tg-process-step">
              <div className="tg-step-num">1</div>
              <div className="tg-step-content">
                <h3>Inspection and Floor Evaluation</h3>
                <p>We inspect the tile and grout to identify heavily soiled areas, buildup patterns, problem spots, and any areas needing extra attention.</p>
              </div>
            </div>
            <div className="tg-process-step">
              <div className="tg-step-num">2</div>
              <div className="tg-step-content">
                <h3>Pre-Treatment Application</h3>
                <p>We apply professional cleaning solutions designed to loosen embedded grime, oils, soap residue, and soil trapped inside grout lines and textured tile.</p>
              </div>
            </div>
            <div className="tg-process-step">
              <div className="tg-step-num">3</div>
              <div className="tg-step-content">
                <h3>Deep Tile and Grout Cleaning</h3>
                <p>Using professional-grade equipment, we clean deep into the grout and tile surface to lift away dirt and buildup that standard mopping leaves behind.</p>
              </div>
            </div>
            <div className="tg-process-step">
              <div className="tg-step-num">4</div>
              <div className="tg-step-content">
                <h3>Extraction and Rinse</h3>
                <p>We remove loosened residue and extract dirty water from the floor to help prevent sticky residue from being left behind.</p>
              </div>
            </div>
            <div className="tg-process-step">
              <div className="tg-step-num">5</div>
              <div className="tg-step-content">
                <h3>Final Walkthrough</h3>
                <p>After cleaning is complete, we review the results and make sure the floor looks noticeably cleaner and brighter.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Surfaces + Kitchen + Bathroom */}
      <section className="tg-details">
        <div className="tg-details-inner tg-details-3col">
          <div className="tg-details-copy">
            <h2>Common Tile Surfaces We Clean</h2>
            <p>We clean many common residential tile surfaces throughout Las Cruces and El Paso, including:</p>
            <ul className="tg-ul">
              <li>Ceramic tile</li>
              <li>Porcelain tile</li>
              <li>Textured tile</li>
              <li>Bathroom tile</li>
              <li>Kitchen tile</li>
              <li>Laundry room tile</li>
              <li>Entryway tile</li>
              <li>Hallway tile</li>
              <li>Shower tile</li>
              <li>Large-format tile floors</li>
            </ul>
            <p>
              If you are unsure whether your flooring is a fit for professional tile cleaning,{' '}
              <Link to="/contact">contact us</Link> and we can help evaluate your floor type.
            </p>
          </div>
          <div className="tg-details-copy">
            <h2>Kitchen Tile and Grout Cleaning</h2>
            <p>
              Kitchen floors experience constant traffic, spills, grease, and food residue. Over time,
              grout lines near cooking areas and walkways often become dark and uneven-looking.
            </p>
            <p>Professional kitchen tile cleaning helps remove:</p>
            <ul className="tg-ul">
              <li>Grease buildup</li>
              <li>Cooking residue</li>
              <li>Tracked-in dirt</li>
              <li>Sticky floor residue</li>
              <li>Grout discoloration</li>
            </ul>
            <p>
              Deep cleaning can dramatically improve the appearance of kitchen floors and help the entire
              room feel cleaner.
            </p>
          </div>
          <div className="tg-details-copy">
            <h2>Bathroom and Shower Tile Cleaning</h2>
            <p>
              Bathrooms are one of the most common areas where tile begins looking dingy or difficult to
              maintain. Soap residue, moisture, hard water deposits, and everyday use can leave tile
              looking dull and grout looking permanently dark.
            </p>
            <p>Our bathroom tile cleaning service helps address:</p>
            <ul className="tg-ul">
              <li>Soap scum buildup</li>
              <li>Shower tile discoloration</li>
              <li>Dirty grout lines</li>
              <li>Hard water residue</li>
              <li>Bathroom floor buildup</li>
            </ul>
            <p>
              Professional cleaning can help restore a cleaner and brighter appearance to bathroom tile
              surfaces throughout the home.
            </p>
          </div>
        </div>
      </section>

      {/* Why mopping + high traffic */}
      <section className="tg-two-col-section">
        <div className="tg-two-col-inner">
          <div className="tg-two-col-card">
            <h2>Why Mopping Alone Usually Is Not Enough</h2>
            <p>
              One of the most common frustrations homeowners mention is that their tile floors still look
              dirty even after they mop regularly.
            </p>
            <p>This usually happens because:</p>
            <ul className="tg-ul">
              <li>Grout absorbs dirty water</li>
              <li>Mops spread residue around</li>
              <li>Soil settles into textured surfaces</li>
              <li>Household cleaners leave buildup behind</li>
              <li>Embedded grime sits below the surface</li>
            </ul>
            <p>
              Professional tile and grout cleaning uses equipment designed to remove deeply embedded soil
              instead of simply moving it around. That is often why homeowners notice such a major
              difference after a deep tile cleaning service.
            </p>
          </div>
          <div className="tg-two-col-card">
            <h2>Tile Cleaning for High-Traffic Areas</h2>
            <p>
              Some parts of the home naturally collect more buildup than others. Entryways, kitchens,
              hallways, and living areas often show traffic patterns where dirt gradually settles into
              grout lines.
            </p>
            <p>We commonly clean:</p>
            <ul className="tg-ul">
              <li>Entryway tile</li>
              <li>Mudroom floors</li>
              <li>Hallway tile</li>
              <li>Living room tile</li>
              <li>Open-concept flooring</li>
              <li>Commercial-style residential tile</li>
            </ul>
            <p>
              High-traffic areas usually benefit the most from periodic deep cleaning because routine
              maintenance alone often cannot fully remove embedded soil.
            </p>
          </div>
        </div>
      </section>

      {/* Local trust */}
      <section className="tg-trust-section">
        <div className="tg-trust-inner">
          <h2>Local Tile and Grout Cleaning You Can Trust</h2>
          <p>
            As a local company serving Las Cruces and El Paso, we understand the flooring challenges
            homeowners in the Southwest deal with every day.
          </p>
          <p>
            Dust, dry conditions, outdoor debris, and heavy foot traffic all contribute to grout
            discoloration and dull-looking tile over time. Our goal is to help homeowners restore
            cleaner-looking floors using professional equipment and detailed cleaning methods designed
            specifically for hard-surface flooring.
          </p>
          <p>
            Whether you live in Sonoma Ranch, Metro Verde, Picacho Hills, Las Alturas, Talavera, or
            surrounding areas, we are proud to provide professional tile and grout cleaning services
            that help homes look cleaner and better maintained.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="tg-faq-section">
        <div className="tg-faq-inner">
          <h2>Frequently Asked Questions About Tile and Grout Cleaning</h2>
          <div className="tg-faq-list">
            <div className="tg-faq-item">
              <h3>How often should tile and grout be professionally cleaned?</h3>
              <p>Most homes benefit from professional tile and grout cleaning every 12–18 months depending on foot traffic, pets, children, and overall floor usage.</p>
            </div>
            <div className="tg-faq-item">
              <h3>Why does grout get so dark?</h3>
              <p>Grout is porous and absorbs dirt, oils, soap residue, and moisture over time. Regular mopping often cannot fully remove buildup trapped below the surface.</p>
            </div>
            <div className="tg-faq-item">
              <h3>Can professional tile cleaning make grout look brighter?</h3>
              <p>Yes. Deep extraction cleaning helps remove embedded grime and buildup that causes grout to appear dark or uneven.</p>
            </div>
            <div className="tg-faq-item">
              <h3>Is professional tile cleaning safe for my floors?</h3>
              <p>Professional tile and grout cleaning is designed for common hard-surface flooring types like ceramic and porcelain tile.</p>
            </div>
            <div className="tg-faq-item">
              <h3>Why do my floors still look dirty after mopping?</h3>
              <p>Mopping alone often leaves behind residue or pushes dirty water deeper into grout lines instead of fully extracting it.</p>
            </div>
            <div className="tg-faq-item">
              <h3>Do you clean bathroom and shower tile?</h3>
              <p>Yes. We clean bathroom floors, shower tile, and other tiled areas affected by soap residue, buildup, and discoloration.</p>
            </div>
            <div className="tg-faq-item">
              <h3>Do you offer tile cleaning in both Las Cruces and El Paso?</h3>
              <p>Yes. We provide tile and grout cleaning services throughout Las Cruces, El Paso, and nearby surrounding communities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule CTA */}
      <section className="tg-schedule-section">
        <div className="tg-schedule-inner">
          <h2>Schedule Tile and Grout Cleaning in Las Cruces or El Paso</h2>
          <p>
            If your grout lines are dark, your tile looks dull, or your floors never seem fully clean,
            professional tile and grout cleaning can help restore a fresher appearance to your home.
          </p>
          <p>
            Aggie Carpet Cleaning proudly provides professional tile and grout cleaning services
            throughout Las Cruces, El Paso, Sonoma Ranch, Metro Verde, Picacho Hills, Las Alturas,
            and Talavera.
          </p>
          <p>Contact us today to schedule professional tile floor cleaning and bring new life back to your hard floors.</p>
          <Link to="/contact" className="tg-connect-btn">Contact Us Today</Link>
        </div>
      </section>

      {/* Grout sealing */}
      <section className="tg-sealing-section">
        <div className="tg-sealing-inner">
          <div className="tg-sealing-copy">
            <h2>Grout Sealing for Longer-Lasting Results</h2>
            <p>
              After deep tile and grout cleaning, many homeowners choose grout sealing to help protect
              grout lines from future staining and buildup. Because grout is naturally porous, it can
              quickly absorb dirt, spills, oils, soap residue, and moisture if left unsealed.
            </p>
            <p>Professional grout sealing creates a protective barrier that helps:</p>
            <ul className="tg-ul">
              <li>Reduce future staining</li>
              <li>Slow down dirt buildup</li>
              <li>Make routine cleaning easier</li>
              <li>Improve the long-term appearance of grout lines</li>
              <li>Protect high-traffic areas from premature discoloration</li>
            </ul>
            <p>
              Grout sealing is especially helpful in kitchens, bathrooms, entryways, and busy households
              throughout Las Cruces and El Paso where dust, foot traffic, and daily use can wear down
              grout quickly.
            </p>
            <p>
              Many homeowners in Sonoma Ranch, Metro Verde, and Picacho Hills choose grout sealing after
              tile cleaning to help keep floors looking cleaner between professional visits.
            </p>
          </div>
          <aside className="tg-sealing-aside">
            <h3>Related Services</h3>
            <p>Looking for more than tile cleaning? Explore our full range of flooring services for Las Cruces and El Paso.</p>
            <ul className="tg-aside-links">
              <li><Link to="/services/carpet-cleaning">Carpet Cleaning</Link></li>
              <li><Link to="/services/tile-installation-repair">Tile Installation and Repair</Link></li>
              <li><Link to="/services/furniture-rugs">Furniture and Rug Cleaning</Link></li>
              <li><Link to="/blog/el-paso-guide-tile-grout-cleaning">El Paso Tile and Grout Guide</Link></li>
            </ul>
            <p>Visit our <Link to="/info/areas-we-serve">areas we serve page</Link> to confirm coverage in your neighborhood.</p>
          </aside>
        </div>
      </section>

      {/* Southern NM */}
      <section className="tg-region-section">
        <div className="tg-region-inner">
          <h2>Why Tile Floors in Southern New Mexico Get Dirty So Quickly</h2>
          <p>
            Homes throughout Southern New Mexico and West Texas deal with unique environmental conditions
            that affect tile floors year-round. Wind, desert dust, dry soil, and outdoor debris are
            constantly tracked inside and gradually settle into grout lines and textured tile surfaces.
          </p>
          <p>
            Even newer homes in areas like Las Alturas and Talavera can experience rapid grout
            discoloration because fine dust particles work deep into porous surfaces where standard
            mopping cannot fully remove them.
          </p>
          <p>
            Tile floors near patios, backyards, pools, garages, and entryways usually experience the
            heaviest buildup. Over time, this creates dark grout lines, dull tile surfaces, uneven
            coloring, buildup around edges and corners, and floors that never seem completely clean.
          </p>
          <p>
            Professional tile and grout cleaning helps remove this deeply embedded debris and restore
            a cleaner appearance throughout the home.
          </p>
        </div>
      </section>

      {/* Commercial + The Difference */}
      <section className="tg-commercial-section">
        <div className="tg-commercial-inner">
          <div className="tg-commercial-copy">
            <h2>Commercial Tile and Grout Cleaning</h2>
            <p>
              In addition to residential tile cleaning, we also help businesses maintain cleaner hard
              floors in high-traffic commercial environments.
            </p>
            <p>
              Commercial tile floors experience constant foot traffic that pushes dirt deep into grout
              lines and textured surfaces. Restaurants, offices, retail spaces, waiting rooms, and other
              busy properties often develop dark grout and dull-looking tile much faster than residential
              spaces.
            </p>
            <p>Our commercial tile and grout cleaning services help:</p>
            <ul className="tg-ul">
              <li>Improve the appearance of business floors</li>
              <li>Remove heavy traffic buildup</li>
              <li>Restore cleaner grout lines</li>
              <li>Maintain a more professional appearance</li>
              <li>Extend the life of tile flooring</li>
            </ul>
            <p>
              We provide commercial tile cleaning services throughout Las Cruces and El Paso for
              businesses looking to maintain cleaner and more presentable hard-surface flooring.
            </p>
          </div>
          <div className="tg-commercial-copy">
            <h2>The Difference Professional Tile Cleaning Can Make</h2>
            <p>
              Many homeowners assume their grout has permanently changed color when in reality it is
              heavily impacted by embedded soil and residue buildup.
            </p>
            <p>
              One of the biggest differences customers notice after professional tile and grout cleaning
              is how much brighter the grout lines appear once years of dirt are removed from below the
              surface.
            </p>
            <p>
              Floors that once looked dark, cloudy, dull, sticky, or uneven often look dramatically
              cleaner after a professional deep-cleaning service.
            </p>
            <p>
              This is especially noticeable in kitchens, bathrooms, hallways, entryways, and
              open-concept living spaces where traffic and buildup are typically the heaviest.
            </p>
            <p>
              Professional tile cleaning can help restore a fresher appearance to the entire room
              without the cost of replacing the flooring itself.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TileGrout;