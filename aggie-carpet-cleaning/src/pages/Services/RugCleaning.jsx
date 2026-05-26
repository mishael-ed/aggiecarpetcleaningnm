import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import './RugCleaning.css';

const RugCleaning = () => {
  return (
    <div className="rc-page">
      <Navbar />

      {/* Hero */}
      <section className="rc-hero">
        <div className="rc-hero-inner">
          <div className="rc-hero-content">
            <h1>Rug Cleaning in Las Cruces, NM &amp; El Paso, TX</h1>
            <h2>Professional Area Rug, Persian Rug &amp; Oriental Rug Cleaning</h2>
            <p className="rc-hero-tagline">Deep Cleaning &bull; Pet Odor Removal &bull; Fast Dry Times &bull; Pickup &amp; Delivery Available</p>
            <p>
              Area rugs go through more abuse than most homeowners realize. They collect dirt from shoes,
              pet hair, body oils, food spills, dust, allergens, and bacteria deep inside the fibers every
              single day. Over time, even expensive rugs can start to look dull, hold odors, flatten out,
              or develop dark traffic patterns that normal vacuuming cannot remove.
            </p>
            <p>
              At Aggie Carpet Cleaning, we provide professional rug cleaning services in Las Cruces, NM,
              El Paso, TX, Mesilla, Picacho Hills, Sonoma Ranch, and surrounding areas for all major rug
              types, including synthetic rugs, wool rugs, Oriental rugs, Persian rugs, and specialty area rugs.
            </p>
            <p>
              Our cleaning process is designed to safely deep clean rugs while helping restore color,
              softness, and freshness without leaving behind heavy residue or over-wetting the fibers.
            </p>
            <p className="rc-cta-line">Contact us today to schedule your rug cleaning appointment!</p>
            <Link to="/contact" className="rc-connect-btn">Let's Connect</Link>
          </div>
          <div className="rc-hero-img">
            <img
              src="/images/rugcleaning/professional-rug-cleaning-las-cruces.jpeg"
              alt="Professional rug cleaning service in Las Cruces NM – area rug and Oriental rug deep cleaning by Aggie Carpet Cleaning"
            />
          </div>
        </div>
      </section>

      {/* Vacuuming vs Professional */}
      <section className="rc-vs">
        <div className="rc-vs-inner">
          <div className="rc-vs-text">
            <h2>Professional Rug Cleaning vs Vacuuming</h2>
            <p>
              Vacuuming is important for maintenance, but it only removes loose debris from the surface.
              Deep inside your rug fibers, there can still be:
            </p>
            <div className="rc-checklist">
              <div className="rc-check-item"><span className="rc-checkmark">–</span><span>Embedded dirt and grit</span></div>
              <div className="rc-check-item"><span className="rc-checkmark">–</span><span>Pet urine and dander</span></div>
              <div className="rc-check-item"><span className="rc-checkmark">–</span><span>Dust mites and allergens</span></div>
              <div className="rc-check-item"><span className="rc-checkmark">–</span><span>Food and drink residue</span></div>
              <div className="rc-check-item"><span className="rc-checkmark">–</span><span>Body oils from foot traffic</span></div>
              <div className="rc-check-item"><span className="rc-checkmark">–</span><span>Odor-causing bacteria</span></div>
              <div className="rc-check-item"><span className="rc-checkmark">–</span><span>Soil trapped near the backing</span></div>
            </div>
            <p>Over time, this buildup can cause rugs to:</p>
            <div className="rc-checklist">
              <div className="rc-check-item"><span className="rc-checkmark">–</span><span>Lose color and softness</span></div>
              <div className="rc-check-item"><span className="rc-checkmark">–</span><span>Develop dark traffic lanes</span></div>
              <div className="rc-check-item"><span className="rc-checkmark">–</span><span>Smell musty or unpleasant</span></div>
              <div className="rc-check-item"><span className="rc-checkmark">–</span><span>Wear down faster</span></div>
              <div className="rc-check-item"><span className="rc-checkmark">–</span><span>Hold onto stains permanently</span></div>
              <div className="rc-check-item"><span className="rc-checkmark">–</span><span>Trigger allergy symptoms indoors</span></div>
            </div>
            <p className="rc-outro">Professional rug cleaning helps remove this buildup before it permanently damages the fibers.</p>
          </div>
          <div className="rc-vs-image">
            <img
              src="/images/rugcleaning/rug-cleaning-service-el-paso-texas.jpeg"
              alt="Professional rug cleaning equipment and service in El Paso Texas – hot water extraction area rug cleaning"
            />
          </div>
        </div>
      </section>

      {/* Types of Rugs */}
      <section className="rc-types">
        <div className="rc-types-inner">
          <h2>Types of Rugs We Clean</h2>
          <p>We clean many different rug styles and materials, including:</p>
          <div className="rc-types-grid">
            {[
              'Area rugs', 'Persian rugs', 'Oriental rugs', 'Wool rugs',
              'Synthetic rugs', 'Shag rugs', 'Low-pile rugs', 'High-traffic rugs',
              'Hallway runners', 'Living room rugs', 'Bedroom rugs',
              'Dining room rugs', 'Commercial area rugs',
            ].map((type) => (
              <div className="rc-type-item" key={type}>
                <span className="rc-type-dot">✓</span>
                <span>{type}</span>
              </div>
            ))}
          </div>
          <p className="rc-types-note">If you are unsure about your rug type, we can inspect it before cleaning.</p>
          <div className="rc-types-banner-img">
            <img
              src="/images/rugcleaning/area-rug-cleaning-el-paso-tx.jpeg"
              alt="Area rug cleaning in El Paso TX – professional deep cleaning for all rug types by Aggie Carpet Cleaning"
            />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="rc-process">
        <div className="rc-process-inner">
          <div className="rc-process-content">
            <h2>Rug Cleaning Process</h2>
            <p>Every rug is different, which is why we inspect each rug before choosing the safest and most effective cleaning method.</p>
          <div className="rc-process-steps">
            <div className="rc-process-step">
              <div className="rc-step-num">1</div>
              <div className="rc-step-content">
                <h3>Rug Inspection</h3>
                <p>We inspect the rug for fiber type, color stability, wear patterns, stains and odors, fringe condition, and traffic damage to determine the best cleaning approach.</p>
              </div>
            </div>
            <div className="rc-process-step">
              <div className="rc-step-num">2</div>
              <div className="rc-step-content">
                <h3>Pre-Treatment</h3>
                <p>We apply a professional rug cleaning solution designed to break down embedded soil, oils and grease, food spills, pet contamination, and general buildup.</p>
              </div>
            </div>
            <div className="rc-process-step">
              <div className="rc-step-num">3</div>
              <div className="rc-step-content">
                <h3>Mechanical Agitation</h3>
                <p>We use controlled agitation tools to help loosen dirt trapped deep inside rug fibers, improving soil removal, cleaning consistency, and overall extraction results.</p>
              </div>
            </div>
            <div className="rc-process-step">
              <div className="rc-step-num">4</div>
              <div className="rc-step-content">
                <h3>Deep Hot Water Extraction</h3>
                <p>Using professional-grade hot water extraction equipment, we flush and remove dirt, debris, allergens, odors, cleaning residues, and contaminants trapped inside fibers.</p>
              </div>
            </div>
            <div className="rc-process-step">
              <div className="rc-step-num">5</div>
              <div className="rc-step-content">
                <h3>Spot &amp; Stain Treatment</h3>
                <p>We treat problem areas including pet urine stains, coffee spills, food stains, dark traffic areas, and set-in spots.</p>
              </div>
            </div>
            <div className="rc-process-step">
              <div className="rc-step-num">6</div>
              <div className="rc-step-content">
                <h3>Controlled Drying</h3>
                <p>Proper drying is critical for rug cleaning. We use controlled drying methods designed to help rugs dry evenly and safely.</p>
              </div>
            </div>
          </div>
          </div>
          <div className="rc-process-img">
            <img
              src="/images/rugcleaning/rug-stain-removal-el-paso-tx.jpeg"
              alt="Rug stain removal in El Paso TX – professional hot water extraction and spot treatment process by Aggie Carpet Cleaning"
            />
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="rc-comparison">
        <div className="rc-comparison-inner">
          <h2>Rug Cleaning Comparison</h2>
          <div className="rc-table-wrap">
            <table className="rc-table">
              <thead>
                <tr>
                  <th>Factor</th>
                  <th>DIY Rug Cleaning</th>
                  <th>Professional Rug Cleaning</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cleaning depth</td>
                  <td>Surface-level cleaning</td>
                  <td className="rc-highlight">Deep fiber cleaning</td>
                </tr>
                <tr>
                  <td>Stain treatment</td>
                  <td>Limited effectiveness</td>
                  <td className="rc-highlight">Professional pre-treatment and extraction</td>
                </tr>
                <tr>
                  <td>Odor reduction</td>
                  <td>Temporary improvement</td>
                  <td className="rc-highlight">Deep cleaning helps reduce trapped odors</td>
                </tr>
                <tr>
                  <td>Equipment</td>
                  <td>Rental or consumer-grade machines</td>
                  <td className="rc-highlight">Professional-grade extraction systems</td>
                </tr>
                <tr>
                  <td>Drying control</td>
                  <td>Varies greatly</td>
                  <td className="rc-highlight">Controlled drying process</td>
                </tr>
                <tr>
                  <td>Risk of damage</td>
                  <td>Possible from overwetting or harsh chemicals</td>
                  <td className="rc-highlight">Lower risk with inspected cleaning methods</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Specialty Rug Types */}
      <section className="rc-specialty">
        <div className="rc-specialty-inner">
          <div className="rc-specialty-card">
            <h2>Persian &amp; Oriental Rug Cleaning</h2>
            <p>
              Persian and Oriental rugs require extra attention because many contain delicate fibers,
              specialty dyes, and handwoven construction.
            </p>
            <p>Improper cleaning can lead to:</p>
            <div className="rc-checklist">
              <div className="rc-check-item"><span className="rc-checkmark">–</span><span>Dye bleeding</span></div>
              <div className="rc-check-item"><span className="rc-checkmark">–</span><span>Fiber damage</span></div>
              <div className="rc-check-item"><span className="rc-checkmark">–</span><span>Shrinkage</span></div>
              <div className="rc-check-item"><span className="rc-checkmark">–</span><span>Permanent discoloration</span></div>
            </div>
            <p className="rc-outro">We inspect specialty rugs carefully before cleaning and adjust methods based on material and condition.</p>
          </div>
          <div className="rc-specialty-card">
            <h2>Wool Rug Cleaning</h2>
            <p>Wool rugs are durable, but they can also trap large amounts of soil deep within the fibers.</p>
            <p>Common wool rug problems include:</p>
            <div className="rc-checklist">
              <div className="rc-check-item"><span className="rc-checkmark">–</span><span>Traffic lane darkening</span></div>
              <div className="rc-check-item"><span className="rc-checkmark">–</span><span>Pet odors</span></div>
              <div className="rc-check-item"><span className="rc-checkmark">–</span><span>Fiber flattening</span></div>
              <div className="rc-check-item"><span className="rc-checkmark">–</span><span>Lingering dust buildup</span></div>
              <div className="rc-check-item"><span className="rc-checkmark">–</span><span>Stains from spills or accidents</span></div>
            </div>
            <p className="rc-outro">Professional cleaning helps remove deep soil while protecting the natural fibers.</p>
          </div>
          <div className="rc-specialty-card">
            <h2>Pet Odor &amp; Urine Treatment for Rugs</h2>
            <p>
              Pet accidents are one of the most common rug problems we see in Las Cruces and El Paso
              homes. Urine can soak through the rug fibers and into the backing, causing odors to return
              repeatedly over time.
            </p>
            <p>Our process is designed to help treat:</p>
            <div className="rc-checklist">
              <div className="rc-check-item"><span className="rc-checkmark">–</span><span>Pet urine contamination</span></div>
              <div className="rc-check-item"><span className="rc-checkmark">–</span><span>Odor buildup</span></div>
              <div className="rc-check-item"><span className="rc-checkmark">–</span><span>Repeated pet marking areas</span></div>
              <div className="rc-check-item"><span className="rc-checkmark">–</span><span>Stains caused by accidents</span></div>
            </div>
            <p className="rc-outro">Deep extraction and enzyme-based treatments help break down odor-causing material trapped within the rug.</p>
          </div>
        </div>
      </section>

      {/* Common Problems + Local Info + Pickup */}
      <section className="rc-details">
        <div className="rc-details-inner">
          <div className="rc-details-card">
            <h2>Common Rug Problems We Clean</h2>
            <p>We regularly help with:</p>
            <div className="rc-checklist">
              <div className="rc-check-item"><span className="rc-checkmark">✓</span><span>Pet urine odors</span></div>
              <div className="rc-check-item"><span className="rc-checkmark">✓</span><span>Heavy traffic lane buildup</span></div>
              <div className="rc-check-item"><span className="rc-checkmark">✓</span><span>Food and drink spills</span></div>
              <div className="rc-check-item"><span className="rc-checkmark">✓</span><span>Dirt tracked in from outside</span></div>
              <div className="rc-check-item"><span className="rc-checkmark">✓</span><span>Smoke odors</span></div>
              <div className="rc-check-item"><span className="rc-checkmark">✓</span><span>General discoloration</span></div>
              <div className="rc-check-item"><span className="rc-checkmark">✓</span><span>Dust and allergen buildup</span></div>
              <div className="rc-check-item"><span className="rc-checkmark">✓</span><span>Dull or worn-looking rugs</span></div>
            </div>
          </div>
          <div className="rc-details-card">
            <h2>Why Rugs Get Dirtier Faster in Las Cruces &amp; El Paso</h2>
            <p>
              Homes in Las Cruces and El Paso deal with unique conditions that can cause rugs to collect
              soil faster than in many other parts of the country.
            </p>
            <p>These include:</p>
            <div className="rc-checklist">
              <div className="rc-check-item"><span className="rc-checkmark">–</span><span>Dust and desert soil</span></div>
              <div className="rc-check-item"><span className="rc-checkmark">–</span><span>Dry windy conditions</span></div>
              <div className="rc-check-item"><span className="rc-checkmark">–</span><span>Heavy foot traffic from outdoor debris</span></div>
              <div className="rc-check-item"><span className="rc-checkmark">–</span><span>Pet hair and dander</span></div>
              <div className="rc-check-item"><span className="rc-checkmark">–</span><span>Sand and fine particles tracked indoors</span></div>
            </div>
            <p className="rc-outro">These fine particles settle deep into rug fibers and can slowly wear them down over time if not professionally cleaned.</p>
          </div>
          <div className="rc-details-card">
            <h2>Rug Pickup &amp; Delivery Available</h2>
            <p>
              Large rugs can be difficult to move and clean properly. We offer pickup and delivery options
              for many rug cleaning jobs throughout the Las Cruces and El Paso area.
            </p>
          </div>
        </div>
      </section>

      {/* Frequency + Areas + Why Choose */}
      <section className="rc-bottom-info">
        <div className="rc-bottom-info-inner">
          <div className="rc-bottom-card">
            <h2>How Often Should Rugs Be Professionally Cleaned?</h2>
            <p>We generally recommend:</p>
            <div className="rc-checklist">
              <div className="rc-check-item"><span className="rc-checkmark">–</span><span>Every 12–18 months for most homes</span></div>
              <div className="rc-check-item"><span className="rc-checkmark">–</span><span>Every 6–12 months for homes with pets or children</span></div>
              <div className="rc-check-item"><span className="rc-checkmark">–</span><span>More often for high-traffic rugs or allergy concerns</span></div>
            </div>
            <p className="rc-outro">Routine cleaning helps extend rug life and maintain appearance.</p>
          </div>
          <div className="rc-bottom-card">
            <h2>Serving Las Cruces &amp; El Paso Areas</h2>
            <p>We proudly provide rug cleaning services throughout:</p>
            <div className="rc-checklist">
              <div className="rc-check-item"><span className="rc-checkmark">–</span><span>Las Cruces, NM</span></div>
              <div className="rc-check-item"><span className="rc-checkmark">–</span><span>Mesilla</span></div>
              <div className="rc-check-item"><span className="rc-checkmark">–</span><span>Sonoma Ranch</span></div>
              <div className="rc-check-item"><span className="rc-checkmark">–</span><span>Picacho Hills</span></div>
              <div className="rc-check-item"><span className="rc-checkmark">–</span><span>El Paso, TX</span></div>
              <div className="rc-check-item"><span className="rc-checkmark">–</span><span>Doña Ana County</span></div>
              <div className="rc-check-item"><span className="rc-checkmark">–</span><span>Surrounding communities</span></div>
            </div>
          </div>
          <div className="rc-bottom-card">
            <h2>Why Homeowners Choose Aggie Carpet Cleaning</h2>
            <div className="rc-checklist">
              <div className="rc-check-item"><span className="rc-checkmark">✓</span><span>Professional hot water extraction equipment</span></div>
              <div className="rc-check-item"><span className="rc-checkmark">✓</span><span>Safe rug cleaning methods</span></div>
              <div className="rc-check-item"><span className="rc-checkmark">✓</span><span>Pet odor and stain treatment</span></div>
              <div className="rc-check-item"><span className="rc-checkmark">✓</span><span>Controlled drying process</span></div>
              <div className="rc-check-item"><span className="rc-checkmark">✓</span><span>Service for synthetic and specialty rugs</span></div>
              <div className="rc-check-item"><span className="rc-checkmark">✓</span><span>Local service throughout Las Cruces and El Paso</span></div>
            </div>
            <p className="rc-outro">We focus on thorough cleaning while helping protect the condition and appearance of your rugs.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="rc-faq">
        <div className="rc-faq-inner">
          <div className="rc-faq-content">
            <h2>Frequently Asked Questions</h2>
            <div className="rc-faq-list">
              <div className="rc-faq-item">
                <h3>Can you clean Persian rugs?</h3>
                <p>Yes. We clean Persian rugs, Oriental rugs, and many specialty rug types after inspection.</p>
              </div>
              <div className="rc-faq-item">
                <h3>How long do rugs take to dry?</h3>
                <p>Dry times vary depending on rug thickness, material, airflow, and humidity, but most rugs dry within several hours to a day.</p>
              </div>
              <div className="rc-faq-item">
                <h3>Can pet urine be removed from rugs?</h3>
                <p>Many pet urine issues can be significantly improved using deep extraction and enzyme treatment, though results vary depending on severity and how long contamination has been present.</p>
              </div>
              <div className="rc-faq-item">
                <h3>Is professional rug cleaning safe for wool rugs?</h3>
                <p>Yes. Wool rugs are inspected first so cleaning methods can be adjusted appropriately.</p>
              </div>
              <div className="rc-faq-item">
                <h3>Should rugs be cleaned even if they do not look dirty?</h3>
                <p>Yes. Large amounts of soil and allergens can build up deep inside rug fibers before becoming visible on the surface.</p>
              </div>
            </div>
          </div>
          <div className="rc-faq-img">
            <img
              src="/images/rugcleaning/wool-rug-cleaning-las-cruces-nm.jpeg"
              alt="Wool rug cleaning in Las Cruces NM – professional deep cleaning for wool and specialty area rugs"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rc-cta">
        <div className="rc-cta-inner">
          <h2>Schedule Professional Rug Cleaning</h2>
          <p>
            If your rug is starting to look dull, hold odors, collect stains, or feel heavily soiled,
            professional cleaning can help restore its appearance and freshness.
          </p>
          <p>
            We provide rug cleaning throughout Las Cruces, NM and El Paso, TX for area rugs, Persian rugs,
            Oriental rugs, wool rugs, and more.
          </p>
          <Link to="/contact" className="rc-connect-btn">Get a Free Quote</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RugCleaning;
