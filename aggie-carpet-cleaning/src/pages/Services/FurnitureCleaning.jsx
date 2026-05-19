import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import './FurnitureCleaning.css';

const FurnitureCleaning = () => {
  return (
    <div className="fc-page">
      <Navbar />

      {/* Hero */}
      <section className="fc-hero">
        <div className="fc-hero-inner">
          <div className="fc-hero-content">
            <h1>Furniture Cleaning in Las Cruces, NM &amp; El Paso, TX</h1>
            <h2>Upholstery Cleaning for Sofas, Couches, Recliners &amp; Chairs</h2>
            <p className="fc-hero-tagline">Fast Dry Times &bull; Truck-Mounted Hot Water Extraction &bull; Pet Odor &amp; Stain Removal</p>
            <p>
              Furniture gets used every single day — but it rarely gets deep cleaned. Over time, sofas,
              sectionals, recliners, and chairs collect body oils, sweat, dust, food particles, pet
              accidents, and everyday soil that vacuuming and basic cleaning cannot remove.
            </p>
            <p>
              We provide professional furniture and upholstery cleaning in Las Cruces, NM, El Paso, TX,
              Mesilla, Picacho Hills, Sonoma Ranch, and surrounding areas using truck-mounted hot water
              extraction, professional pre-treatment, and deep fiber agitation to clean furniture properly
              from the inside out.
            </p>
            <p className="fc-cta-line">Contact us today to schedule your furniture cleaning appointment!</p>
            <Link to="/contact" className="fc-connect-btn">Let's Connect</Link>
          </div>
          <div className="fc-hero-img">
            <img
              src="/images/furniturecleaning/furniture-cleaning-sofa-las-cruces-nm.jpeg"
              alt="Professional sofa and furniture cleaning service in Las Cruces NM – Aggie Carpet Cleaning upholstery cleaning"
            />
          </div>
        </div>
      </section>

      {/* What Builds Up */}
      <section className="fc-buildup">
        <div className="fc-buildup-inner">
          <div className="fc-buildup-text">
            <h2>What Builds Up Inside Furniture</h2>
            <p>Even when furniture looks clean on the outside, it can still contain:</p>
            <div className="fc-checklist">
              <div className="fc-check-item"><span className="fc-checkmark">–</span><span>Body oils and sweat</span></div>
              <div className="fc-check-item"><span className="fc-checkmark">–</span><span>Pet urine and dander</span></div>
              <div className="fc-check-item"><span className="fc-checkmark">–</span><span>Food and drink residue</span></div>
              <div className="fc-check-item"><span className="fc-checkmark">–</span><span>Dust and allergens</span></div>
              <div className="fc-check-item"><span className="fc-checkmark">–</span><span>Embedded soil deep in fabric</span></div>
              <div className="fc-check-item"><span className="fc-checkmark">–</span><span>Odor-causing buildup</span></div>
            </div>
            <p>Over time, this can lead to:</p>
            <div className="fc-checklist">
              <div className="fc-check-item"><span className="fc-checkmark">–</span><span>Lingering odors that don't go away</span></div>
              <div className="fc-check-item"><span className="fc-checkmark">–</span><span>Darkened areas on arms and headrests</span></div>
              <div className="fc-check-item"><span className="fc-checkmark">–</span><span>Worn or sticky fabric feel</span></div>
              <div className="fc-check-item"><span className="fc-checkmark">–</span><span>Stains that keep reappearing</span></div>
              <div className="fc-check-item"><span className="fc-checkmark">–</span><span>Furniture that feels "not fresh" anymore</span></div>
            </div>
            <p className="fc-outro">Most of this buildup is deep inside the fabric where normal cleaning cannot reach.</p>
          </div>
          <div className="fc-buildup-image">
            <img
              src="/images/furniturecleaning/professional-furniture-cleaning-las-cruces.jpeg"
              alt="Professional furniture and upholstery cleaning service in Las Cruces NM – deep cleaning sofa and couch fabric"
            />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="fc-process">
        <div className="fc-process-inner">
          <h2>Professional Furniture Cleaning Process</h2>
          <p>We use a step-by-step deep cleaning system designed for upholstery fabrics.</p>
          <div className="fc-process-steps">
            <div className="fc-process-step">
              <div className="fc-step-num">1</div>
              <div className="fc-step-content">
                <h3>Inspection</h3>
                <p>We identify fabric type, condition, and stain areas before cleaning begins to ensure safe treatment.</p>
              </div>
            </div>
            <div className="fc-process-step">
              <div className="fc-step-num">2</div>
              <div className="fc-step-content">
                <h3>Pre-Treatment</h3>
                <p>We apply a professional upholstery cleaning solution that breaks down oils and grease, embedded dirt, stains, and odor-causing residues.</p>
              </div>
            </div>
            <div className="fc-process-step">
              <div className="fc-step-num">3</div>
              <div className="fc-step-content">
                <h3>Mechanical Agitation (High-Speed Scrubbing)</h3>
                <p>We use a high-speed orbital microfiber scrubber (up to 3,500 RPM) to gently agitate the fabric after pre-treatment. This lifts dirt from deep within fibers, breaks down stuck-on buildup, and improves stain removal results.</p>
              </div>
            </div>
            <div className="fc-process-step">
              <div className="fc-step-num">4</div>
              <div className="fc-step-content">
                <h3>Hot Water Extraction (Steam Cleaning)</h3>
                <p>We use truck-mounted hot water extraction to rinse and remove dirt, debris, allergens, bacteria, cleaning solution residue, and odors from deep within the fabric.</p>
              </div>
            </div>
            <div className="fc-process-step">
              <div className="fc-step-num">5</div>
              <div className="fc-step-content">
                <h3>Spot &amp; Stain Treatment</h3>
                <p>We target stubborn stains such as pet accidents, coffee and drink spills, food stains, and set-in or unknown stains.</p>
              </div>
            </div>
            <div className="fc-process-step">
              <div className="fc-step-num">6</div>
              <div className="fc-step-content">
                <h3>Final Grooming &amp; Drying</h3>
                <p>We reset fabric texture and help promote faster, even drying so furniture is ready to use as soon as possible.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="fc-comparison">
        <div className="fc-comparison-inner">
          <h2>Furniture Cleaning Comparison</h2>
          <div className="fc-table-wrap">
            <table className="fc-table">
              <thead>
                <tr>
                  <th>Factor</th>
                  <th>DIY Cleaning</th>
                  <th>Professional Furniture Cleaning</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cleaning depth</td>
                  <td>Surface-level cleaning using store products or rental machines</td>
                  <td className="fc-highlight">Deep cleaning using hot water extraction and mechanical agitation</td>
                </tr>
                <tr>
                  <td>Stain removal</td>
                  <td>May lighten some stains, results vary</td>
                  <td className="fc-highlight">More consistent results using pre-treatment + agitation + extraction</td>
                </tr>
                <tr>
                  <td>Odor control</td>
                  <td>Temporary improvement depending on product used</td>
                  <td className="fc-highlight">Helps reduce odors by cleaning deep into fabric and cushions</td>
                </tr>
                <tr>
                  <td>Drying time</td>
                  <td>Varies depending on method and water usage</td>
                  <td className="fc-highlight">Controlled extraction process designed to reduce excess moisture</td>
                </tr>
                <tr>
                  <td>Equipment</td>
                  <td>Consumer-grade cleaners or rental machines</td>
                  <td className="fc-highlight">Truck-mounted professional cleaning system</td>
                </tr>
                <tr>
                  <td>Risk of damage</td>
                  <td>Possible if incorrect chemicals or too much water are used</td>
                  <td className="fc-highlight">Lower risk when properly inspected and cleaned</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Problems + Types */}
      <section className="fc-two-col">
        <div className="fc-two-col-banner-wrap">
          <img
            src="/images/furniturecleaning/sectional-couch-cleaning-las-cruces-nm.jpeg"
            alt="Sectional couch cleaning in Las Cruces NM – professional upholstery and fabric cleaning service"
          />
        </div>
        <div className="fc-two-col-inner">
          <div className="fc-two-col-card">
            <h2>Common Furniture Problems We Clean</h2>
            <p>We regularly handle:</p>
            <div className="fc-checklist">
              <div className="fc-check-item"><span className="fc-checkmark">✓</span><span>Pet urine in couches and cushions</span></div>
              <div className="fc-check-item"><span className="fc-checkmark">✓</span><span>Persistent furniture odors</span></div>
              <div className="fc-check-item"><span className="fc-checkmark">✓</span><span>Dark buildup on arms and headrests</span></div>
              <div className="fc-check-item"><span className="fc-checkmark">✓</span><span>Food and drink stains</span></div>
              <div className="fc-check-item"><span className="fc-checkmark">✓</span><span>Rental and move-out furniture cleaning</span></div>
              <div className="fc-check-item"><span className="fc-checkmark">✓</span><span>Airbnb turnover furniture cleaning</span></div>
              <div className="fc-check-item"><span className="fc-checkmark">✓</span><span>General dull or worn upholstery</span></div>
            </div>
          </div>
          <div className="fc-two-col-card">
            <h2>Types of Furniture We Clean</h2>
            <div className="fc-checklist">
              <div className="fc-check-item"><span className="fc-checkmark">✓</span><span>Sofas and couches</span></div>
              <div className="fc-check-item"><span className="fc-checkmark">✓</span><span>Sectionals</span></div>
              <div className="fc-check-item"><span className="fc-checkmark">✓</span><span>Recliners</span></div>
              <div className="fc-check-item"><span className="fc-checkmark">✓</span><span>Armchairs</span></div>
              <div className="fc-check-item"><span className="fc-checkmark">✓</span><span>Dining chairs</span></div>
              <div className="fc-check-item"><span className="fc-checkmark">✓</span><span>Office chairs</span></div>
              <div className="fc-check-item"><span className="fc-checkmark">✓</span><span>Ottomans</span></div>
              <div className="fc-check-item"><span className="fc-checkmark">✓</span><span>Cushions and fabric inserts</span></div>
            </div>
            <p className="fc-outro">Mattress cleaning is available as an additional service.</p>
          </div>
        </div>
      </section>

      {/* Pet + Frequency */}
      <section className="fc-info">
        <div className="fc-info-inner">
          <div className="fc-info-card">
            <h2>Pet Stain &amp; Odor Removal</h2>
            <p>
              Pet accidents often soak deep into upholstery and padding where odors can linger. We use a
              combination of deep hot water extraction and enzyme-based treatment to help break down
              odor-causing materials inside fabric and cushions.
            </p>
          </div>
          <div className="fc-info-card">
            <h2>How Often Should You Clean Furniture?</h2>
            <div className="fc-checklist">
              <div className="fc-check-item"><span className="fc-checkmark">–</span><span>Every 12–18 months for most homes</span></div>
              <div className="fc-check-item"><span className="fc-checkmark">–</span><span>Every 6–12 months for homes with pets or children</span></div>
              <div className="fc-check-item"><span className="fc-checkmark">–</span><span>Immediately after spills or accidents</span></div>
            </div>
            <p className="fc-outro">Regular cleaning helps extend furniture life and maintain a fresher, cleaner home environment.</p>
          </div>
          <div className="fc-info-card">
            <h2>Serving Las Cruces &amp; El Paso</h2>
            <div className="fc-checklist">
              <div className="fc-check-item"><span className="fc-checkmark">–</span><span>Las Cruces, NM</span></div>
              <div className="fc-check-item"><span className="fc-checkmark">–</span><span>Mesilla</span></div>
              <div className="fc-check-item"><span className="fc-checkmark">–</span><span>Sonoma Ranch</span></div>
              <div className="fc-check-item"><span className="fc-checkmark">–</span><span>Picacho Hills</span></div>
              <div className="fc-check-item"><span className="fc-checkmark">–</span><span>El Paso, TX</span></div>
              <div className="fc-check-item"><span className="fc-checkmark">–</span><span>Surrounding areas</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="fc-faq">
        <div className="fc-faq-inner">
          <div className="fc-faq-content">
            <h2>Frequently Asked Questions</h2>
            <div className="fc-faq-list">
              <div className="fc-faq-item">
                <h3>How long does furniture take to dry?</h3>
                <p>Most furniture dries within a few hours depending on fabric type, airflow, and humidity.</p>
              </div>
              <div className="fc-faq-item">
                <h3>Can you remove all stains?</h3>
                <p>Most stains can be significantly improved or removed, but results depend on how long they've been set and the fabric type.</p>
              </div>
              <div className="fc-faq-item">
                <h3>Is your cleaning safe for kids and pets?</h3>
                <p>Yes. We use professional fabric-safe cleaning solutions.</p>
              </div>
              <div className="fc-faq-item">
                <h3>Will my furniture get soaked?</h3>
                <p>No. Our truck-mounted extraction system removes moisture during cleaning.</p>
              </div>
              <div className="fc-faq-item">
                <h3>Do you clean delicate fabrics?</h3>
                <p>Yes. We always inspect first and adjust cleaning methods based on fabric type.</p>
              </div>
            </div>
          </div>
          <div className="fc-faq-img">
            <img
              src="/images/furniturecleaning/upholstery-deep-cleaning-las-cruces.jpeg"
              alt="Upholstery deep cleaning in Las Cruces NM – professional furniture steam cleaning results by Aggie Carpet Cleaning"
            />
          </div>
        </div>
      </section>

      {/* Photo Strip */}
      <section className="fc-photo-strip">
        <div className="fc-photo-strip-inner">
          <img
            src="/images/furniturecleaning/upholstery-cleaning-couch-el-paso-tx.jpeg"
            alt="Couch and upholstery cleaning in El Paso TX – professional stain and odor removal service"
          />
          <img
            src="/images/furniturecleaning/sofa-steam-cleaning-el-paso-texas.jpeg"
            alt="Sofa steam cleaning El Paso Texas – truck-mounted hot water extraction furniture cleaning"
          />
          <img
            src="/images/furniturecleaning/furniture-cleaning-el-paso-service.jpeg"
            alt="Furniture cleaning service El Paso Texas – Aggie Carpet Cleaning professional upholstery results"
          />
          <img
            src="/images/furniturecleaning/furniture-stain-removal-el-paso-tx.jpeg"
            alt="Furniture stain removal El Paso TX – professional upholstery cleaning before and after"
          />
          <img
            src="/images/furniturecleaning/furniture-cleaning-before-after-el-paso.jpeg"
            alt="Furniture cleaning before and after El Paso TX – professional upholstery deep cleaning results"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="fc-cta">
        <div className="fc-cta-inner">
          <h2>Schedule Furniture Cleaning Today</h2>
          <p>
            If your furniture looks worn, smells unpleasant, or has visible stains, professional cleaning
            can restore its appearance and freshness.
          </p>
          <p>
            We provide furniture cleaning services throughout Las Cruces and El Paso, TX. Call today to
            schedule your furniture cleaning service.
          </p>
          <Link to="/contact" className="fc-connect-btn">Get a Free Quote</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FurnitureCleaning;
