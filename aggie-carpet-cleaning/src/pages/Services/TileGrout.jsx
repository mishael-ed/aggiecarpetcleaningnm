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
        title="Tile & Grout Cleaning Las Cruces, NM | Professional Tile Cleaning | Aggie Carpet Cleaning"
        description="Professional tile and grout cleaning in Las Cruces, NM and El Paso, TX. Aggie Carpet Cleaning removes embedded dirt, dark grout lines, and buildup using truck-mounted hot water extraction."
        canonicalPath="/services/tile-grout"
        keywords="tile cleaning Las Cruces, grout cleaning Las Cruces, tile and grout cleaning Las Cruces NM, tile floor cleaning Las Cruces, tile and grout cleaning El Paso, grout sealing Las Cruces"
        schema={tileGroutSchema}
      />
      <Navbar />

      {/* Hero */}
      <section className="tg-hero">
        <div className="tg-hero-inner">
          <div className="tg-hero-content">
            <h1>Tile &amp; Grout Cleaning in Las Cruces, NM &amp; El Paso, TX</h1>
            <h2>Professional Tile, Grout Cleaning &amp; Sealing Services That Restore Your Floors</h2>
            <p>
              If your tile floors look dull, stained, or permanently dirty no matter how much you mop,
              you're not alone. Over time, grout absorbs dirt, oils, spills, and bacteria that regular
              cleaning simply cannot remove. At Aggie Carpet Cleaning, we provide professional tile and
              grout cleaning in Las Cruces, NM, El Paso, TX, and surrounding areas using high-powered
              truck-mounted hot water extraction and specialized rotary cleaning tools designed to restore
              your floors back to like-new condition.
            </p>
            <p>
              We don't just clean the surface — we deep clean the pores of your grout lines and restore
              the original color and brightness of your tile floors.
            </p>
            <p className="tg-cta-line">Contact us today to schedule your tile and grout cleaning appointment!</p>
            <Link to="/contact" className="tg-connect-btn">Let's Connect</Link>
          </div>
          <div className="tg-hero-img">
            <img
              src="/images/tileandgroutcleaning/tile-grout-cleaning-las-cruces-nm.jpeg"
              alt="Professional tile and grout cleaning in Las Cruces NM – Aggie Carpet Cleaning restoring tile floors"
            />
          </div>
        </div>
      </section>

      {/* Why Gets Dirty */}
      <section className="tg-further">
        <div className="tg-further-inner">
          <div className="tg-further-text">
            <h2>Why Tile &amp; Grout Gets So Dirty (Even If You Mop Regularly)</h2>
            <p>
              Most homeowners assume mopping is enough to keep tile floors clean. Unfortunately,
              traditional mopping often makes grout worse over time by pushing dirty water deeper into
              the porous grout lines.
            </p>
            <p>Here's what actually causes dirty grout:</p>
            <div className="tg-checklist">
              <div className="tg-check-item">
                <span className="tg-checkmark">–</span>
                <span>Porous cement-based grout absorbs liquids like a sponge</span>
              </div>
              <div className="tg-check-item">
                <span className="tg-checkmark">–</span>
                <span>Grease and cooking oils build up in kitchen tile areas</span>
              </div>
              <div className="tg-check-item">
                <span className="tg-checkmark">–</span>
                <span>Soap residue from cleaning products leaves behind sticky film</span>
              </div>
              <div className="tg-check-item">
                <span className="tg-checkmark">–</span>
                <span>Dirt and sand get ground into grout lines from foot traffic</span>
              </div>
              <div className="tg-check-item">
                <span className="tg-checkmark">–</span>
                <span>Moisture buildup encourages mildew and discoloration</span>
              </div>
            </div>
            <p className="tg-outro">
              Once grout is stained, no household mop or cleaner can fully remove the buildup. That's
              where professional tile and grout cleaning becomes necessary.
            </p>
          </div>
          <div className="tg-further-image">
            <img
              src="/images/tileandgroutcleaning/grout-cleaning-el-paso-tx.jpeg"
              alt="Grout cleaning service in El Paso TX – deep grout line restoration and tile cleaning by Aggie Carpet Cleaning"
            />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="tg-process-section">
        <div className="tg-process-inner">
          <div className="tg-process-content">
            <h2>Our Professional Tile &amp; Grout Cleaning Process</h2>
            <p>
              We use a multi-step deep cleaning system designed to safely restore tile without damage.
            </p>
          <div className="tg-process-steps">
            <div className="tg-process-step">
              <div className="tg-step-num">1</div>
              <div className="tg-step-content">
                <h3>Pre-Inspection</h3>
                <p>We evaluate your tile type, grout condition, and staining severity to choose the correct cleaning method.</p>
              </div>
            </div>
            <div className="tg-process-step">
              <div className="tg-step-num">2</div>
              <div className="tg-step-content">
                <h3>Pre-Treatment Application</h3>
                <p>A specialized cleaning solution is applied to break down grease, soil, and organic buildup embedded in the grout lines.</p>
              </div>
            </div>
            <div className="tg-process-step">
              <div className="tg-step-num">3</div>
              <div className="tg-step-content">
                <h3>High-Pressure Hot Water Extraction</h3>
                <p>Using truck-mounted equipment, we inject high-temperature filtered water deep into the grout lines and immediately extract the dirty water.</p>
              </div>
            </div>
            <div className="tg-process-step">
              <div className="tg-step-num">4</div>
              <div className="tg-step-content">
                <h3>Rotovac 360i Deep Rotary Cleaning</h3>
                <p>For heavily soiled floors, we use a rotary tile cleaning system that scrubs grout lines evenly and restores uniform color.</p>
              </div>
            </div>
            <div className="tg-process-step">
              <div className="tg-step-num">5</div>
              <div className="tg-step-content">
                <h3>Detail Edging &amp; Corner Cleaning</h3>
                <p>We manually clean edges, corners, and baseboard areas where machines cannot reach.</p>
              </div>
            </div>
            <div className="tg-process-step">
              <div className="tg-step-num">6</div>
              <div className="tg-step-content">
                <h3>Optional Grout Sealing Application</h3>
                <p>After cleaning, we recommend sealing your grout to prevent future staining and make maintenance much easier.</p>
              </div>
            </div>
          </div>
          </div>
          <div className="tg-process-img">
            <img
              src="/images/tileandgroutcleaning/tile-and-grout-cleaning-las-cruces.jpeg"
              alt="Tile and grout cleaning process in Las Cruces NM – hot water extraction and rotary scrubbing restoring tile floors"
            />
          </div>
        </div>
      </section>

      {/* Sealing */}
      <section className="tg-sealing-section">
        <div className="tg-sealing-inner">
          <div className="tg-sealing-copy">
            <h2>Tile &amp; Grout Sealing (Highly Recommended)</h2>
            <p>
              After a deep cleaning, grout is restored to its original porous state. Without sealing,
              it can quickly absorb new dirt and stains.
            </p>
            <p>What grout sealing does:</p>
            <ul className="tg-ul">
              <li>Creates a protective barrier over grout lines</li>
              <li>Helps repel water, oil, and stains</li>
              <li>Makes future cleaning easier and faster</li>
              <li>Extends the life and appearance of your floors</li>
            </ul>
            <p>
              We offer professional grout sealing in Las Cruces and El Paso using high-quality
              penetrating sealers that bond deep into the grout instead of sitting on top of it.
            </p>
            <p>Sealing is especially recommended for:</p>
            <ul className="tg-ul">
              <li>Kitchen tile floors</li>
              <li>Bathroom showers and walls</li>
              <li>High-traffic entryways</li>
              <li>Commercial tile flooring</li>
            </ul>
          </div>
          <aside className="tg-sealing-aside">
            <h3>Related Services</h3>
            <p>Looking for more than tile cleaning? Explore our full range of flooring services for Las Cruces and El Paso.</p>
            <ul className="tg-aside-links">
              <li><Link to="/services/carpet-cleaning">Carpet Cleaning</Link></li>
              <li><Link to="/services/furniture-cleaning">Furniture Cleaning</Link></li>
              <li><Link to="/services/rug-cleaning">Rug Cleaning</Link></li>
              <li><Link to="/blog/el-paso-guide-tile-grout-cleaning">El Paso Tile and Grout Guide</Link></li>
            </ul>
            <p>Visit our <Link to="/info/areas-we-serve">areas we serve page</Link> to confirm coverage in your neighborhood.</p>
          </aside>
        </div>
        <div className="tg-sealing-banner-img">
          <img
            src="/images/tileandgroutcleaning/grout-sealing-las-cruces-nm.jpeg"
            alt="Professional grout sealing service in Las Cruces NM – protecting tile floors after deep cleaning"
          />
        </div>
      </section>

      {/* Comparison Table */}
      <section className="tg-comparison">
        <div className="tg-comparison-inner">
          <h2>Tile &amp; Grout Cleaning vs DIY Cleaning</h2>
          <div className="tg-table-wrap">
            <table className="tg-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>DIY Mopping</th>
                  <th>Professional Tile Cleaning</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Removes deep grout stains</td>
                  <td className="tg-no">❌ No</td>
                  <td className="tg-yes">✅ Yes</td>
                </tr>
                <tr>
                  <td>Sanitizes grout lines</td>
                  <td className="tg-no">❌ Limited</td>
                  <td className="tg-yes">✅ Yes (hot water extraction)</td>
                </tr>
                <tr>
                  <td>Restores original color</td>
                  <td className="tg-no">❌ No</td>
                  <td className="tg-yes">✅ Yes</td>
                </tr>
                <tr>
                  <td>Prevents re-soiling</td>
                  <td className="tg-no">❌ No</td>
                  <td className="tg-warn">⚠️ Only with sealing</td>
                </tr>
                <tr>
                  <td>Equipment power</td>
                  <td>Low</td>
                  <td className="tg-yes">Industrial truck-mounted</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="tg-comparison-note">
            Most DIY cleaning only addresses surface dirt. Professional cleaning targets embedded
            contamination that causes discoloration.
          </p>
          <div className="tg-comparison-banner-img">
            <img
              src="/images/tileandgroutcleaning/professional-tile-cleaning-el-paso-texas.jpeg"
              alt="Professional tile cleaning results in El Paso Texas – grout restoration and tile floor deep cleaning by Aggie Carpet Cleaning"
            />
          </div>
        </div>
      </section>

      {/* Surfaces + Residential & Commercial */}
      <section className="tg-two-col-section">
        <div className="tg-two-col-banner-wrap">
          <img
            src="/images/tileandgroutcleaning/grout-line-cleaning-las-cruces-nm.jpeg"
            alt="Grout line cleaning in Las Cruces NM – deep restoration of dirty and discolored grout between tile"
          />
        </div>
        <div className="tg-two-col-inner">
          <div className="tg-two-col-card">
            <h2>Tile Surfaces We Clean</h2>
            <p>We clean a wide variety of tile types including:</p>
            <ul className="tg-ul">
              <li>Ceramic tile</li>
              <li>Porcelain tile</li>
              <li>Natural stone (with appropriate care)</li>
              <li>Travertine</li>
              <li>Slate</li>
              <li>Marble (special handling available)</li>
            </ul>
            <p>
              Each surface requires different pressure levels and cleaning chemistry, which is why
              professional treatment matters.
            </p>
          </div>
          <div className="tg-two-col-card">
            <h2>Residential &amp; Commercial Tile Cleaning</h2>
            <p>We provide tile and grout cleaning for both homes and businesses throughout the region.</p>
            <p><strong>Residential services:</strong></p>
            <ul className="tg-ul">
              <li>Kitchens</li>
              <li>Bathrooms</li>
              <li>Laundry rooms</li>
              <li>Entryways</li>
              <li>Entire home tile flooring</li>
            </ul>
            <p><strong>Commercial services:</strong></p>
            <ul className="tg-ul">
              <li>Restaurants</li>
              <li>Office buildings</li>
              <li>Retail stores</li>
              <li>Medical facilities</li>
              <li>Hotels and lobbies</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Service Areas + Why Choose */}
      <section className="tg-areas-why">
        <div className="tg-areas-why-banner-wrap">
          <img
            src="/images/tileandgroutcleaning/tile-floor-cleaning-el-paso-tx.jpeg"
            alt="Tile floor cleaning in El Paso TX – professional residential and commercial tile cleaning service"
          />
        </div>
        <div className="tg-areas-why-inner">
          <div className="tg-areas-block">
            <h2>Service Areas</h2>
            <p>We proudly serve:</p>
            <ul className="tg-ul">
              <li>Las Cruces, NM</li>
              <li>El Paso, TX</li>
              <li>Mesilla</li>
              <li>Sonoma Ranch</li>
              <li>Picacho Hills</li>
              <li>Anthony, NM</li>
              <li>Surrounding Southern New Mexico and West Texas areas</li>
            </ul>
          </div>
          <div className="tg-why-block">
            <h2>Why Choose Aggie Carpet Cleaning?</h2>
            <p>
              Homeowners and businesses choose us because we focus on deep restoration — not
              surface-level cleaning.
            </p>
            <div className="tg-checklist">
              <div className="tg-check-item"><span className="tg-checkmark">✓</span><span>Truck-mounted hot water extraction systems</span></div>
              <div className="tg-check-item"><span className="tg-checkmark">✓</span><span>Rotovac 360i rotary cleaning technology</span></div>
              <div className="tg-check-item"><span className="tg-checkmark">✓</span><span>Fast drying times</span></div>
              <div className="tg-check-item"><span className="tg-checkmark">✓</span><span>Honest pricing with no hidden fees</span></div>
              <div className="tg-check-item"><span className="tg-checkmark">✓</span><span>Local, family-owned service</span></div>
              <div className="tg-check-item"><span className="tg-checkmark">✓</span><span>Experience with high-end flooring and delicate surfaces</span></div>
            </div>
            <p className="tg-outro">
              We treat every floor like it's our own and focus on delivering visible, measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Maintenance Tips */}
      <section className="tg-maintenance">
        <div className="tg-maintenance-inner">
          <div className="tg-maintenance-text">
            <h2>Maintenance Tips After Cleaning</h2>
            <p>To keep your tile and grout looking clean longer:</p>
            <ul className="tg-ul">
              <li>Sweep or vacuum regularly to remove abrasive dirt</li>
              <li>Clean spills quickly to avoid staining</li>
              <li>Avoid harsh bleach-based cleaners that degrade grout</li>
              <li>Re-seal grout every 12–24 months depending on traffic</li>
              <li>Use pH-neutral tile cleaners for routine maintenance</li>
            </ul>
          </div>
          <div className="tg-maintenance-img">
            <img
              src="/images/tileandgroutcleaning/tile-cleaning-service-las-cruces.jpeg"
              alt="Tile cleaning service Las Cruces NM – clean and restored tile floors by Aggie Carpet Cleaning"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="tg-faq-section">
        <div className="tg-faq-inner">
          <div className="tg-faq-content">
            <h2>Frequently Asked Questions</h2>
            <div className="tg-faq-list">
            <div className="tg-faq-item">
              <h3>How often should tile and grout be professionally cleaned?</h3>
              <p>Most homes benefit from professional cleaning every 12–24 months depending on foot traffic, pets, and kitchen usage.</p>
            </div>
            <div className="tg-faq-item">
              <h3>Can you remove black or dark grout stains?</h3>
              <p>Yes, in most cases we can significantly lighten or fully restore grout color using high-pressure hot water extraction and rotary scrubbing systems.</p>
            </div>
            <div className="tg-faq-item">
              <h3>How long does tile and grout cleaning take?</h3>
              <p>Most residential jobs take 1–3 hours depending on square footage and soil level.</p>
            </div>
            <div className="tg-faq-item">
              <h3>Is grout sealing necessary after cleaning?</h3>
              <p>It is highly recommended. Sealing helps prevent future staining and makes routine maintenance much easier.</p>
            </div>
            <div className="tg-faq-item">
              <h3>Will cleaning damage my tile?</h3>
              <p>No. We adjust pressure and cleaning chemistry based on your tile type to ensure safe and effective cleaning.</p>
            </div>
            <div className="tg-faq-item">
              <h3>How long does it take for floors to dry?</h3>
              <p>Typically 2–6 hours depending on ventilation and humidity.</p>
            </div>
          </div>
          </div>
          <div className="tg-faq-img">
            <img
              src="/images/tileandgroutcleaning/ceramic-tile-cleaning-el-paso-texas.jpeg"
              alt="Ceramic tile cleaning in El Paso Texas – professional tile and grout restoration service by Aggie Carpet Cleaning"
            />
          </div>
        </div>
      </section>

      {/* Photo Strip */}
      <section className="tg-photo-strip">
        <div className="tg-photo-strip-inner">
          <img
            src="/images/tileandgroutcleaning/tile-grout-restoration-las-cruces.jpeg"
            alt="Tile and grout restoration in Las Cruces NM – before and after professional deep cleaning results"
          />
          <img
            src="/images/tileandgroutcleaning/bathroom-tile-cleaning-el-paso-tx.jpeg"
            alt="Bathroom tile cleaning in El Paso TX – professional shower and bathroom floor tile and grout cleaning"
          />
          <img
            src="/images/tileandgroutcleaning/kitchen-tile-grout-cleaning-las-cruces.jpeg"
            alt="Kitchen tile and grout cleaning in Las Cruces NM – removing grease and buildup from kitchen floor tile"
          />
        </div>
      </section>

      {/* Schedule CTA */}
      <section className="tg-schedule-section">
        <div className="tg-schedule-inner">
          <h2>Schedule Your Tile &amp; Grout Cleaning Today</h2>
          <p>
            If your tile floors are looking dull, stained, or worn out, professional cleaning can
            completely restore their appearance. We proudly serve Las Cruces, El Paso, and surrounding
            areas with high-quality tile and grout cleaning and sealing services.
          </p>
          <p>
            Contact Aggie Carpet Cleaning today to schedule your appointment and bring your floors back to life.
          </p>
          <Link to="/contact" className="tg-connect-btn">Contact Us Today</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TileGrout;
