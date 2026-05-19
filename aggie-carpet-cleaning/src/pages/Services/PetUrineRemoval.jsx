import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import './PetUrineRemoval.css';

const PetUrineRemoval = () => {
  return (
    <div className="pur-page">
      <Navbar />

      {/* Hero */}
      <section className="pur-hero">
        <div className="pur-hero-inner">
          <h1>Pet Urine Removal in Las Cruces, NM &amp; El Paso, TX</h1>
          <h2>Real Urine Extraction — Not Just Enzyme Sprays or Surface Cleaning</h2>
          <p>
            Pet urine in carpet is one of the most misunderstood problems in the cleaning industry. What
            looks like a simple stain or odor issue on the surface is almost always a deep contamination
            problem that extends far beyond what the eye can see.
          </p>
          <p>
            Most companies treat pet urine as a surface issue. They spray enzymes, run a light steam
            cleaning pass, and apply deodorizer. The carpet may smell better temporarily, but the actual
            contamination remains trapped inside the carpet system.
          </p>
          <p>
            At Aggie Carpet Cleaning, we take a completely different approach. We specialize in true pet
            urine extraction, which means we don't just treat the surface — we physically remove urine
            contamination from deep within the carpet fibers, backing, and most importantly, the carpet
            padding underneath.
          </p>
          <p>
            Our process combines peroxide-based saturation treatment with professional Water Claw
            sub-surface extraction equipment to remove urine at its source. This is not standard carpet
            cleaning. This is deep structural urine removal designed to permanently eliminate odor and
            contamination, not mask it.
          </p>
          <p>
            We proudly serve Las Cruces, NM, including Mesilla, Sonoma Ranch, Picacho Hills, Organ, and
            surrounding areas, as well as El Paso, TX.
          </p>
          <p className="pur-cta-line">Contact us today to schedule your pet urine removal service!</p>
          <Link to="/contact" className="pur-connect-btn">Let's Connect</Link>
        </div>
      </section>

      {/* Why It Comes Back */}
      <section className="pur-why">
        <div className="pur-why-inner">
          <h2>Why Pet Urine Problems Always Come Back After "Cleaning"</h2>
          <p>
            If you've ever had your carpet cleaned only for the smell to return days or weeks later,
            you've already experienced the most common failure in the carpet cleaning industry.
          </p>
          <p>
            The reason is simple: most cleaning methods do not remove urine from the carpet padding.
          </p>
          <p>Here's what actually happens when a pet accident occurs:</p>
          <div className="pur-steps">
            <div className="pur-step-item"><span className="pur-step-num">1</span><span>Urine quickly soaks through carpet fibers</span></div>
            <div className="pur-step-item"><span className="pur-step-num">2</span><span>It reaches the carpet backing within seconds</span></div>
            <div className="pur-step-item"><span className="pur-step-num">3</span><span>It continues sinking into the carpet pad underneath</span></div>
            <div className="pur-step-item"><span className="pur-step-num">4</span><span>It spreads horizontally through the padding like a sponge</span></div>
            <div className="pur-step-item"><span className="pur-step-num">5</span><span>As it dries, it leaves behind crystallized urine compounds</span></div>
            <div className="pur-step-item"><span className="pur-step-num">6</span><span>When humidity increases, those crystals reactivate and release odor again</span></div>
          </div>
          <p>
            This is why the smell often seems to "come back," even after cleaning. The contamination was
            never fully removed — it was only partially treated on the surface. That is the core problem
            with most carpet cleaning methods.
          </p>
        </div>
      </section>

      {/* Traditional Methods */}
      <section className="pur-methods">
        <div className="pur-methods-inner">
          <h2>The Problem With Traditional Pet Urine Cleaning Methods</h2>
          <p>Most carpet cleaning companies rely on three main approaches when dealing with pet urine:</p>

          <div className="pur-methods-grid">
            <div className="pur-method-card">
              <h3>1. Enzyme Treatments</h3>
              <p>
                Enzyme cleaners are designed to break down organic material. While they can be somewhat
                effective in controlled conditions, they have major limitations:
              </p>
              <ul>
                <li>They often do not fully penetrate into the carpet pad</li>
                <li>They require long dwell times that are rarely achieved properly</li>
                <li>They rely on moisture staying in the exact contaminated area</li>
                <li>They do not physically remove contamination</li>
              </ul>
              <p className="pur-method-verdict">At best, enzymes reduce odor temporarily. At worst, they give a false sense of the problem being solved.</p>
            </div>

            <div className="pur-method-card">
              <h3>2. Standard Steam Cleaning (Hot Water Extraction)</h3>
              <p>
                Steam cleaning is excellent for general soil removal, but for pet urine it has serious
                drawbacks:
              </p>
              <ul>
                <li>It may dilute urine instead of removing it</li>
                <li>It can push contamination deeper into the padding</li>
                <li>It does not isolate heavily saturated areas</li>
                <li>It does not target the full depth of contamination</li>
              </ul>
              <p className="pur-method-verdict">This is why carpets can smell worse after a "cleaning" if urine was present.</p>
            </div>

            <div className="pur-method-card">
              <h3>3. Deodorizers and Masking Agents</h3>
              <p>These products are designed to cover odor, not remove it:</p>
              <ul>
                <li>Smell returns once the product wears off</li>
                <li>Urine contamination remains untouched underneath</li>
                <li>No actual removal or neutralization occurs</li>
                <li>Creates a temporary illusion of cleanliness</li>
              </ul>
              <p className="pur-method-verdict">Masking agents do not solve the problem — they delay it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="pur-comparison">
        <div className="pur-comparison-inner">
          <h2>Comparison of Pet Urine Cleaning Methods</h2>
          <p>
            The difference between surface treatment and true extraction becomes very clear when you
            compare methods side-by-side:
          </p>
          <div className="pur-table-wrap">
            <table className="pur-table">
              <thead>
                <tr>
                  <th>Method</th>
                  <th>Reaches Carpet Surface</th>
                  <th>Reaches Carpet Backing</th>
                  <th>Extracts From Pad</th>
                  <th>Permanent Odor Removal</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Enzyme Sprays</td>
                  <td className="pur-yes">✔</td>
                  <td className="pur-no">✖</td>
                  <td className="pur-no">✖</td>
                  <td className="pur-no">✖</td>
                  <td>Only treats surface contamination, often temporary</td>
                </tr>
                <tr>
                  <td>Standard Steam Cleaning</td>
                  <td className="pur-yes">✔</td>
                  <td>Partial</td>
                  <td className="pur-no">✖</td>
                  <td className="pur-no">✖ / Sometimes</td>
                  <td>Can dilute urine but often leaves pad contamination behind</td>
                </tr>
                <tr>
                  <td>Deodorizers / Masking Agents</td>
                  <td className="pur-yes">✔</td>
                  <td className="pur-no">✖</td>
                  <td className="pur-no">✖</td>
                  <td className="pur-no">✖</td>
                  <td>Only hides odor temporarily, does not treat source</td>
                </tr>
                <tr>
                  <td>Basic "Pet Treatment" Add-ons</td>
                  <td className="pur-yes">✔</td>
                  <td>Partial</td>
                  <td className="pur-no">✖</td>
                  <td className="pur-warn">⚠️ Inconsistent</td>
                  <td>Depends heavily on technician and dwell time</td>
                </tr>
                <tr className="pur-our-row">
                  <td><strong>Our Peroxide + Water Claw Extraction</strong></td>
                  <td className="pur-yes">✔</td>
                  <td className="pur-yes">✔</td>
                  <td className="pur-yes">✔✔✔</td>
                  <td className="pur-yes">✔✔✔</td>
                  <td>Physically removes urine from carpet system, including padding</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="pur-comparison-note">
            Most methods treat what you can see. Our method removes what you can't see.
          </p>
        </div>
      </section>

      {/* Our Process */}
      <section className="pur-process">
        <div className="pur-process-inner">
          <div className="pur-process-text">
            <h2>Our Pet Urine Extraction Process</h2>
            <p>
              At Aggie Carpet Cleaning, we don't rely on surface treatments or guesswork. We use a
              structured extraction process designed to remove contamination from the entire carpet system.
            </p>

            <div className="pur-checklist">
              <div className="pur-check-item">
                <span className="pur-checkmark">1</span>
                <div>
                  <strong>Full Contamination Assessment</strong>
                  <p>We begin by identifying all affected areas including visible stains, hidden saturation zones, spread areas within carpet padding, and older contamination that may not be visible. Urine damage is often larger than homeowners realize.</p>
                </div>
              </div>
              <div className="pur-check-item">
                <span className="pur-checkmark">2</span>
                <div>
                  <strong>Peroxide-Based Saturation Treatment</strong>
                  <p>We apply a controlled peroxide-based solution that breaks down urine crystals at the molecular level, neutralizes odor-causing compounds, penetrates deep into carpet fibers and backing, and prepares contamination for full extraction.</p>
                </div>
              </div>
              <div className="pur-check-item">
                <span className="pur-checkmark">3</span>
                <div>
                  <strong>Sub-Surface Extraction Using Water Claw Technology</strong>
                  <p>We use professional Water Claw extraction equipment designed specifically to pull liquid from beneath the carpet surface — extracting urine from the carpet backing, removing contamination from the padding, and preventing reactivation and odor return.</p>
                </div>
              </div>
              <div className="pur-check-item">
                <span className="pur-checkmark">4</span>
                <div>
                  <strong>Final Rinse and Neutralization</strong>
                  <p>After extraction we perform a controlled rinse and neutralization process to remove remaining residue, neutralize odor-causing compounds, balance carpet fibers, and ensure no chemical buildup remains.</p>
                </div>
              </div>
              <div className="pur-check-item">
                <span className="pur-checkmark">5</span>
                <div>
                  <strong>Controlled Drying Process</strong>
                  <p>Proper drying prevents trapped moisture in padding, reduces risk of odor reactivation, speeds up usability of treated areas, and ensures consistent results across all affected zones.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pur-process-image">
            <img
              src={require('../pet-urine-equipment.jpg')}
              alt="Water Claw sub-surface extraction equipment"
            />
            <p className="pur-image-caption">Water Claw sub-surface extraction technology</p>
          </div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="pur-why-works">
        <div className="pur-why-works-inner">
          <h2>Why Our Method Works When Others Fail</h2>
          <p>
            The difference between our process and traditional carpet cleaning is simple: most companies
            treat the surface. We remove the source.
          </p>
          <p>
            Pet urine is not a surface stain — it is a deep contamination issue that becomes embedded in
            the carpet system. Our process works because we:
          </p>
          <div className="pur-steps">
            <div className="pur-step-item"><span className="pur-step-num">✓</span><span>Fully saturate affected areas for complete breakdown</span></div>
            <div className="pur-step-item"><span className="pur-step-num">✓</span><span>Chemically neutralize urine compounds</span></div>
            <div className="pur-step-item"><span className="pur-step-num">✓</span><span>Physically extract contamination from carpet padding</span></div>
            <div className="pur-step-item"><span className="pur-step-num">✓</span><span>Remove the actual source of odor, not just the smell</span></div>
          </div>
          <p>This is why our results last, while others often do not.</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="pur-benefits">
        <div className="pur-benefits-inner">
          <h2>Benefits of Professional Urine Extraction</h2>
          <p>When done correctly, deep extraction provides long-term benefits:</p>
          <div className="pur-benefits-grid">
            <div className="pur-benefit-item">
              <span className="pur-benefit-icon">✔</span>
              <div>
                <h3>Permanent Odor Removal</h3>
                <p>We eliminate the source of odor instead of masking it.</p>
              </div>
            </div>
            <div className="pur-benefit-item">
              <span className="pur-benefit-icon">✔</span>
              <div>
                <h3>Prevents Recurring Smell Issues</h3>
                <p>No reactivation during humidity changes.</p>
              </div>
            </div>
            <div className="pur-benefit-item">
              <span className="pur-benefit-icon">✔</span>
              <div>
                <h3>Saves Carpet From Unnecessary Replacement</h3>
                <p>Many carpets can be restored instead of replaced.</p>
              </div>
            </div>
            <div className="pur-benefit-item">
              <span className="pur-benefit-icon">✔</span>
              <div>
                <h3>Improves Indoor Air Quality</h3>
                <p>Removes bacteria and organic contaminants trapped in padding.</p>
              </div>
            </div>
            <div className="pur-benefit-item">
              <span className="pur-benefit-icon">✔</span>
              <div>
                <h3>Eliminates Hidden Contamination</h3>
                <p>Targets what standard cleaning cannot reach.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas & Signs */}
      <section className="pur-areas-signs">
        <div className="pur-areas-signs-inner">
          <div className="pur-areas">
            <h2>Pet Urine Removal Services in Las Cruces &amp; El Paso</h2>
            <p>We provide professional urine extraction services throughout:</p>
            <ul>
              <li>Las Cruces, NM</li>
              <li>Mesilla</li>
              <li>Sonoma Ranch</li>
              <li>Picacho Hills</li>
              <li>Organ</li>
              <li>El Paso, TX and surrounding areas</li>
            </ul>
            <p>
              Whether you are dealing with a single accident or long-term pet damage, we can assess
              and treat the problem at its source.
            </p>
          </div>

          <div className="pur-signs">
            <h2>Common Signs You Need Deep Urine Extraction</h2>
            <p>You may need professional treatment if:</p>
            <div className="pur-signs-list">
              <div className="pur-sign-item"><span className="pur-sign-dot">•</span><span>Odor returns after cleaning</span></div>
              <div className="pur-sign-item"><span className="pur-sign-dot">•</span><span>Smell becomes stronger in humid weather</span></div>
              <div className="pur-sign-item"><span className="pur-sign-dot">•</span><span>Pets keep marking the same spot repeatedly</span></div>
              <div className="pur-sign-item"><span className="pur-sign-dot">•</span><span>Persistent ammonia or urine smell remains in carpet</span></div>
              <div className="pur-sign-item"><span className="pur-sign-dot">•</span><span>Stains reappear after cleaning</span></div>
              <div className="pur-sign-item"><span className="pur-sign-dot">•</span><span>You notice multiple hidden accident areas</span></div>
            </div>
            <p>
              These are strong indicators that urine is still present in the padding beneath the carpet.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pur-faq">
        <div className="pur-faq-inner">
          <h2>Frequently Asked Questions</h2>
          <div className="pur-faq-list">
            <div className="pur-faq-item">
              <h3>Can pet urine be completely removed from carpet?</h3>
              <p>Yes. In most cases, urine can be fully removed when properly extracted from both the carpet and padding layers.</p>
            </div>
            <div className="pur-faq-item">
              <h3>Why does the smell come back after cleaning?</h3>
              <p>Because urine remains trapped in the carpet padding. When humidity rises, it reactivates and releases odor again.</p>
            </div>
            <div className="pur-faq-item">
              <h3>Will I need to replace my carpet padding?</h3>
              <p>Not always. Many cases can be fully restored through deep extraction. Severe or long-term contamination may require partial replacement.</p>
            </div>
            <div className="pur-faq-item">
              <h3>How long does the process take?</h3>
              <p>Most jobs take a few hours depending on severity and size of affected areas.</p>
            </div>
            <div className="pur-faq-item">
              <h3>Is peroxide safe for carpet?</h3>
              <p>Yes, when properly diluted and professionally applied, peroxide is commonly used in restoration cleaning.</p>
            </div>
            <div className="pur-faq-item">
              <h3>Will the odor return?</h3>
              <p>Not when the contamination is fully extracted from the carpet system. Surface cleaning methods are what typically lead to odor return.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pur-cta">
        <div className="pur-cta-inner">
          <h2>Schedule Professional Pet Urine Extraction Today</h2>
          <p>
            If you are dealing with recurring pet odor or urine contamination, surface cleaning is not enough.
          </p>
          <p>
            At Aggie Carpet Cleaning, we specialize in deep extraction methods designed to permanently remove
            urine from carpet systems, not just treat the surface. Call today to schedule professional pet urine
            removal in Las Cruces, NM or El Paso, TX and get the problem handled at its source.
          </p>
          <Link to="/contact" className="pur-connect-btn">Get a Free Quote</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PetUrineRemoval;
