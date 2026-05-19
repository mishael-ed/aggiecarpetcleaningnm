import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import './WaterDamageMold.css';

const WaterDamageMold = () => {
  return (
    <div className="wdm-page">
      <Navbar />

      {/* Hero */}
      <section className="wdm-hero">
        <div className="wdm-hero-inner">
          <h1>Emergency Water Extraction &amp; Mold Removal in Las Cruces, NM &amp; El Paso, TX</h1>
          <h2>24/7 Water Damage Cleanup, Drying &amp; Mold Remediation</h2>
          <p className="wdm-hero-tagline">Emergency Response &bull; Water Extraction &bull; Structural Drying &bull; Mold Removal</p>
          <p>
            Water damage can spread fast. A broken pipe, overflowing toilet, roof leak, appliance failure,
            or flood can quickly soak carpets, walls, baseboards, and flooring — creating serious damage
            and increasing the risk of mold growth within a short period of time.
          </p>
          <p>
            At Aggie Carpet Cleaning, we provide emergency water extraction and mold removal services
            throughout Las Cruces, NM, El Paso, TX, Mesilla, Picacho Hills, Sonoma Ranch, and surrounding
            areas. Our goal is to remove water quickly, begin the drying process immediately, and help
            prevent long-term structural damage to your home or business.
          </p>
          <p className="wdm-cta-line">Contact us immediately for emergency water damage response!</p>
          <Link to="/contact" className="wdm-connect-btn">Call Us Now</Link>
        </div>
      </section>

      {/* Why Fast Matters + Causes */}
      <section className="wdm-urgency">
        <div className="wdm-urgency-inner">
          <div className="wdm-urgency-text">
            <h2>Fast Emergency Water Extraction Matters</h2>
            <p>The longer water sits, the more damage it can cause. Moisture can spread underneath:</p>
            <div className="wdm-checklist">
              <div className="wdm-check-item"><span className="wdm-checkmark">–</span><span>Carpet and padding</span></div>
              <div className="wdm-check-item"><span className="wdm-checkmark">–</span><span>Hardwood flooring</span></div>
              <div className="wdm-check-item"><span className="wdm-checkmark">–</span><span>Baseboards</span></div>
              <div className="wdm-check-item"><span className="wdm-checkmark">–</span><span>Drywall</span></div>
              <div className="wdm-check-item"><span className="wdm-checkmark">–</span><span>Cabinets</span></div>
              <div className="wdm-check-item"><span className="wdm-checkmark">–</span><span>Furniture</span></div>
              <div className="wdm-check-item"><span className="wdm-checkmark">–</span><span>Subflooring</span></div>
            </div>
            <p>If not properly extracted and dried, water damage can lead to:</p>
            <div className="wdm-checklist">
              <div className="wdm-check-item"><span className="wdm-checkmark">–</span><span>Swollen materials</span></div>
              <div className="wdm-check-item"><span className="wdm-checkmark">–</span><span>Warped flooring</span></div>
              <div className="wdm-check-item"><span className="wdm-checkmark">–</span><span>Carpet damage</span></div>
              <div className="wdm-check-item"><span className="wdm-checkmark">–</span><span>Persistent odors</span></div>
              <div className="wdm-check-item"><span className="wdm-checkmark">–</span><span>Structural deterioration</span></div>
              <div className="wdm-check-item"><span className="wdm-checkmark">–</span><span>Mold growth inside walls and flooring</span></div>
            </div>
            <p className="wdm-outro">Fast response is critical to reducing damage and preventing additional problems.</p>
          </div>
          <div className="wdm-urgency-image">
            <img
              src={require('../floor-equipment.jpg')}
              alt="Emergency water extraction equipment"
            />
          </div>
        </div>
      </section>

      {/* Common Causes */}
      <section className="wdm-causes">
        <div className="wdm-causes-inner">
          <h2>Common Causes of Water Damage</h2>
          <p>We regularly help homeowners and businesses dealing with:</p>
          <div className="wdm-causes-grid">
            {[
              'Burst pipes', 'Washing machine leaks', 'Water heater failures',
              'Overflowing toilets', 'Dishwasher leaks', 'Refrigerator line leaks',
              'Roof leaks', 'Flooding from storms', 'Sink overflows',
              'Sewage backups', 'Broken supply lines',
            ].map((cause) => (
              <div className="wdm-cause-item" key={cause}>
                <span className="wdm-cause-dot">!</span>
                <span>{cause}</span>
              </div>
            ))}
          </div>
          <p className="wdm-causes-note">Even a small leak can spread moisture farther than most people realize.</p>
        </div>
      </section>

      {/* Process */}
      <section className="wdm-process">
        <div className="wdm-process-inner">
          <h2>Emergency Water Extraction Process</h2>
          <p>We use professional extraction and drying equipment designed to remove water as quickly as possible.</p>
          <div className="wdm-process-steps">
            <div className="wdm-process-step">
              <div className="wdm-step-num">1</div>
              <div className="wdm-step-content">
                <h3>Inspection &amp; Moisture Assessment</h3>
                <p>We inspect affected areas to determine the water source, extent of spread, moisture levels, damaged materials, and areas requiring drying or removal.</p>
              </div>
            </div>
            <div className="wdm-process-step">
              <div className="wdm-step-num">2</div>
              <div className="wdm-step-content">
                <h3>Emergency Water Extraction</h3>
                <p>Using high-powered extraction equipment, we remove standing water from carpet, padding, hard flooring, tile, concrete surfaces, and affected furniture areas. Fast extraction helps reduce further damage.</p>
              </div>
            </div>
            <div className="wdm-process-step">
              <div className="wdm-step-num">3</div>
              <div className="wdm-step-content">
                <h3>Removal of Damaged Materials (If Needed)</h3>
                <p>In some situations, saturated materials may need to be removed, including carpet padding, baseboards, drywall, and flooring materials. This depends on the severity and category of water damage.</p>
              </div>
            </div>
            <div className="wdm-process-step">
              <div className="wdm-step-num">4</div>
              <div className="wdm-step-content">
                <h3>Structural Drying &amp; Dehumidification</h3>
                <p>After extraction, we place commercial drying equipment including air movers, dehumidifiers, drying fans, and moisture control equipment to dry hidden moisture inside walls, floors, and structural materials.</p>
              </div>
            </div>
            <div className="wdm-process-step">
              <div className="wdm-step-num">5</div>
              <div className="wdm-step-content">
                <h3>Monitoring &amp; Moisture Checks</h3>
                <p>We monitor drying progress and moisture levels throughout the drying process to help ensure affected materials are drying properly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="wdm-comparison">
        <div className="wdm-comparison-inner">
          <h2>Water Damage vs Waiting Too Long</h2>
          <div className="wdm-table-wrap">
            <table className="wdm-table">
              <thead>
                <tr>
                  <th>Situation</th>
                  <th>Immediate Water Extraction</th>
                  <th>Delayed Cleanup</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Water spread</td>
                  <td className="wdm-good">Reduced quickly</td>
                  <td className="wdm-bad">Continues spreading into materials</td>
                </tr>
                <tr>
                  <td>Carpet condition</td>
                  <td className="wdm-good">Greater chance of saving carpet</td>
                  <td className="wdm-bad">Increased risk of replacement</td>
                </tr>
                <tr>
                  <td>Odor development</td>
                  <td className="wdm-good">Lower risk</td>
                  <td className="wdm-bad">Odors become more severe</td>
                </tr>
                <tr>
                  <td>Mold growth risk</td>
                  <td className="wdm-good">Reduced through drying</td>
                  <td className="wdm-bad">Higher likelihood of mold development</td>
                </tr>
                <tr>
                  <td>Structural damage</td>
                  <td className="wdm-good">Minimized when addressed early</td>
                  <td className="wdm-bad">Damage often becomes worse over time</td>
                </tr>
                <tr>
                  <td>Drying process</td>
                  <td className="wdm-good">Starts immediately</td>
                  <td className="wdm-bad">Moisture remains trapped longer</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Hidden Signs + Mold */}
      <section className="wdm-signs-mold">
        <div className="wdm-signs-mold-inner">
          <div className="wdm-signs-card">
            <h2>Signs You May Have Hidden Water Damage</h2>
            <p>Not all water damage is immediately visible. Common warning signs include:</p>
            <div className="wdm-checklist">
              <div className="wdm-check-item"><span className="wdm-checkmark">–</span><span>Musty odors</span></div>
              <div className="wdm-check-item"><span className="wdm-checkmark">–</span><span>Damp carpet or flooring</span></div>
              <div className="wdm-check-item"><span className="wdm-checkmark">–</span><span>Bubbling paint or drywall</span></div>
              <div className="wdm-check-item"><span className="wdm-checkmark">–</span><span>Soft spots in flooring</span></div>
              <div className="wdm-check-item"><span className="wdm-checkmark">–</span><span>Warped baseboards</span></div>
              <div className="wdm-check-item"><span className="wdm-checkmark">–</span><span>Increased indoor humidity</span></div>
              <div className="wdm-check-item"><span className="wdm-checkmark">–</span><span>Staining on ceilings or walls</span></div>
              <div className="wdm-check-item"><span className="wdm-checkmark">–</span><span>Mold growth near wet areas</span></div>
            </div>
            <p className="wdm-outro">If you notice these signs, moisture may still be trapped inside building materials.</p>
          </div>
          <div className="wdm-mold-card">
            <h2>Mold Growth After Water Damage</h2>
            <p>Mold growth can begin when moisture remains trapped in walls, flooring, carpet, or other materials. Common areas where mold develops include:</p>
            <div className="wdm-checklist">
              <div className="wdm-check-item"><span className="wdm-checkmark">–</span><span>Behind baseboards</span></div>
              <div className="wdm-check-item"><span className="wdm-checkmark">–</span><span>Under carpet and padding</span></div>
              <div className="wdm-check-item"><span className="wdm-checkmark">–</span><span>Inside drywall</span></div>
              <div className="wdm-check-item"><span className="wdm-checkmark">–</span><span>Around plumbing leaks</span></div>
              <div className="wdm-check-item"><span className="wdm-checkmark">–</span><span>Beneath flooring</span></div>
              <div className="wdm-check-item"><span className="wdm-checkmark">–</span><span>Inside poorly ventilated spaces</span></div>
            </div>
            <p>Mold problems often begin after flooding, slow leaks, roof damage, high humidity, or untreated water damage.</p>
          </div>
        </div>
      </section>

      {/* Mold Remediation */}
      <section className="wdm-remediation">
        <div className="wdm-remediation-inner">
          <h2>Mold Removal &amp; Remediation</h2>
          <p>
            We provide mold removal and remediation services designed to help address affected materials
            and contaminated areas. Depending on the situation, this may include:
          </p>
          <div className="wdm-checklist wdm-remediation-list">
            <div className="wdm-check-item"><span className="wdm-checkmark">✓</span><span>Identifying moisture sources</span></div>
            <div className="wdm-check-item"><span className="wdm-checkmark">✓</span><span>Removing contaminated materials</span></div>
            <div className="wdm-check-item"><span className="wdm-checkmark">✓</span><span>HEPA vacuuming</span></div>
            <div className="wdm-check-item"><span className="wdm-checkmark">✓</span><span>Cleaning affected surfaces</span></div>
            <div className="wdm-check-item"><span className="wdm-checkmark">✓</span><span>Applying antimicrobial treatment</span></div>
            <div className="wdm-check-item"><span className="wdm-checkmark">✓</span><span>Drying affected areas fully</span></div>
          </div>
          <p className="wdm-outro">The most important step in mold control is correcting the moisture problem that caused it.</p>
        </div>
      </section>

      {/* Equipment + Commercial + Local */}
      <section className="wdm-info-cards">
        <div className="wdm-info-cards-inner">
          <div className="wdm-info-card">
            <h2>Equipment We Use</h2>
            <p>We use professional-grade equipment designed for water mitigation and drying, including:</p>
            <div className="wdm-checklist">
              <div className="wdm-check-item"><span className="wdm-checkmark">✓</span><span>High-powered extraction equipment</span></div>
              <div className="wdm-check-item"><span className="wdm-checkmark">✓</span><span>Commercial air movers</span></div>
              <div className="wdm-check-item"><span className="wdm-checkmark">✓</span><span>Dehumidifiers</span></div>
              <div className="wdm-check-item"><span className="wdm-checkmark">✓</span><span>Moisture detection equipment</span></div>
              <div className="wdm-check-item"><span className="wdm-checkmark">✓</span><span>HEPA filtration equipment</span></div>
              <div className="wdm-check-item"><span className="wdm-checkmark">✓</span><span>Drying fans</span></div>
            </div>
            <p className="wdm-outro">Professional equipment allows faster and more controlled drying compared to household fans or shop vacs.</p>
          </div>
          <div className="wdm-info-card">
            <h2>Commercial &amp; Residential Water Damage Cleanup</h2>
            <p>We provide water extraction and drying services for:</p>
            <div className="wdm-checklist">
              <div className="wdm-check-item"><span className="wdm-checkmark">–</span><span>Homes</span></div>
              <div className="wdm-check-item"><span className="wdm-checkmark">–</span><span>Apartments</span></div>
              <div className="wdm-check-item"><span className="wdm-checkmark">–</span><span>Rental properties</span></div>
              <div className="wdm-check-item"><span className="wdm-checkmark">–</span><span>Offices</span></div>
              <div className="wdm-check-item"><span className="wdm-checkmark">–</span><span>Restaurants</span></div>
              <div className="wdm-check-item"><span className="wdm-checkmark">–</span><span>Retail buildings</span></div>
              <div className="wdm-check-item"><span className="wdm-checkmark">–</span><span>Commercial spaces</span></div>
            </div>
          </div>
          <div className="wdm-info-card">
            <h2>Common Situations We Handle</h2>
            <div className="wdm-checklist">
              <div className="wdm-check-item"><span className="wdm-checkmark">–</span><span>Flooded carpet extraction</span></div>
              <div className="wdm-check-item"><span className="wdm-checkmark">–</span><span>Pipe break cleanup</span></div>
              <div className="wdm-check-item"><span className="wdm-checkmark">–</span><span>Overflow cleanup</span></div>
              <div className="wdm-check-item"><span className="wdm-checkmark">–</span><span>Appliance leak cleanup</span></div>
              <div className="wdm-check-item"><span className="wdm-checkmark">–</span><span>Storm water intrusion</span></div>
              <div className="wdm-check-item"><span className="wdm-checkmark">–</span><span>Wet carpet drying</span></div>
              <div className="wdm-check-item"><span className="wdm-checkmark">–</span><span>Water damaged flooring</span></div>
              <div className="wdm-check-item"><span className="wdm-checkmark">–</span><span>Mold growth after leaks</span></div>
              <div className="wdm-check-item"><span className="wdm-checkmark">–</span><span>Emergency moisture removal</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="wdm-areas">
        <div className="wdm-areas-inner">
          <h2>Serving Las Cruces &amp; El Paso Areas</h2>
          <p>We provide emergency water extraction and mold removal services throughout:</p>
          <div className="wdm-areas-grid">
            {['Las Cruces, NM', 'Mesilla', 'Sonoma Ranch', 'Picacho Hills', 'El Paso, TX', 'Doña Ana County', 'Surrounding communities'].map((area) => (
              <div className="wdm-area-item" key={area}>
                <span className="wdm-area-dot">✓</span>
                <span>{area}</span>
              </div>
            ))}
          </div>
          <p className="wdm-local-note">
            The climate in southern New Mexico and West Texas can create unique drying challenges depending
            on the season and indoor humidity levels. Moisture trapped inside carpet, drywall, or flooring
            can remain hidden even when surfaces appear dry. Professional moisture detection and drying
            equipment help address moisture below the surface.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="wdm-faq">
        <div className="wdm-faq-inner">
          <h2>Frequently Asked Questions</h2>
          <div className="wdm-faq-list">
            <div className="wdm-faq-item">
              <h3>How quickly should water damage be cleaned up?</h3>
              <p>As quickly as possible. Fast extraction and drying help reduce damage and lower the risk of mold growth.</p>
            </div>
            <div className="wdm-faq-item">
              <h3>Can wet carpet be saved?</h3>
              <p>In many cases, yes. Results depend on how long the carpet has been wet and the type of water involved.</p>
            </div>
            <div className="wdm-faq-item">
              <h3>How long does structural drying take?</h3>
              <p>Drying times vary depending on the amount of water, affected materials, and humidity conditions.</p>
            </div>
            <div className="wdm-faq-item">
              <h3>Can mold grow after a small leak?</h3>
              <p>Yes. Even small leaks can create enough trapped moisture for mold growth if not properly dried.</p>
            </div>
            <div className="wdm-faq-item">
              <h3>Do you remove moldy drywall or materials?</h3>
              <p>Depending on the situation, contaminated materials may need to be removed during remediation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="wdm-cta">
        <div className="wdm-cta-inner">
          <h2>Schedule Emergency Water Extraction &amp; Mold Removal</h2>
          <p>
            If your home or business has experienced flooding, leaks, or water damage, fast action is
            important. We provide emergency water extraction, drying, and mold remediation services
            throughout Las Cruces and El Paso.
          </p>
          <p>Contact Aggie Carpet Cleaning today for emergency water damage cleanup and mold removal services.</p>
          <Link to="/contact" className="wdm-connect-btn">Contact Us Now</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WaterDamageMold;
