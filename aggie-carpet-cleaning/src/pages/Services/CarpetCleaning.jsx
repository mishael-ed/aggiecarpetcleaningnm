import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import './CarpetCleaning.css';

const CarpetCleaning = () => {
  return (
    <div className="carpet-page">
      <Navbar />

      {/* Hero Section */}
      <section className="cp-hero">
        <div className="cp-hero-inner">
          <div className="cp-hero-content">
            <h1>Professional Carpet Cleaning in Las Cruces, NM &amp; El Paso, TX</h1>
            <h2>Fast Dry Times &bull; Truck Mounted Steam Cleaning &bull; Pet Odor Removal</h2>
            <p>
              Aggie Carpet Cleaning provides professional carpet cleaning services in Las Cruces, El Paso,
              Mesilla, Picacho Hills, Sonoma Ranch, and surrounding areas. Using powerful truck mounted hot
              water extraction equipment, we remove deep soil, stains, pet odors, allergens, dust, bacteria,
              and contaminants from residential and commercial carpet.
            </p>
            <p>
              Your carpet goes through a lot every day. Dirt gets tracked in from outside, pets leave behind
              odors and stains, dust settles deep into carpet fibers, and high traffic areas slowly begin to
              look dark, worn, and dirty. Over time, carpets can hold onto odors, allergens, and bacteria that
              normal vacuuming simply cannot remove.
            </p>
            <p>
              Our advanced steam cleaning process uses high pressure heated water extraction combined with
              professional agitation equipment to deliver a deeper clean, faster dry times, healthier indoor
              air quality, and a noticeably fresher feeling home. We don't just clean the surface of your
              carpet. We flush contaminants from deep within the fibers to help restore the appearance,
              cleanliness, and comfort of your flooring.
            </p>
            <p>
              Whether you need carpet cleaning for your home, apartment, office, rental property, or commercial
              building, Aggie Carpet Cleaning delivers professional results designed to leave your carpets
              cleaner, softer, and smelling fresh again.
            </p>
            <p className="cp-cta-line">Contact us today to schedule your carpet cleaning appointment!</p>
            <Link to="/contact" className="cp-connect-btn">Let's Connect</Link>
          </div>
          <div className="cp-hero-img">
            <img
              src="/images/carpetcleaning/carpetcleaning-las-cruces.jpeg"
              alt="Professional carpet cleaning service in Las Cruces NM – Aggie Carpet Cleaning truck mounted steam cleaning"
            />
          </div>
        </div>
      </section>

      {/* Why Professional Carpet Cleaning Matters */}
      <section className="cp-why">
        <div className="cp-why-inner">
          <div className="cp-why-text">
            <h2>Why Professional Carpet Cleaning Matters</h2>
            <p>
              Dirty carpet affects more than just appearance. Carpet acts like a giant filter inside your home,
              trapping dust, allergens, dirt, pet dander, bacteria, and odors deep within the fibers. Over time,
              those contaminants build up and can leave your home feeling dirty even after vacuuming.
            </p>
            <p>
              Many homeowners become "used to" the smell or appearance of their carpet over time without
              realizing how much dirt is actually trapped below the surface. High traffic areas begin looking
              dark and matted, pet odors become more noticeable, and stains slowly make the entire room feel
              less clean.
            </p>
            <p>
              Professional steam carpet cleaning helps restore freshness and comfort back into your home. Clean
              carpets can make rooms feel brighter, smell cleaner, and feel healthier for children, pets, and
              guests. There is a major difference between carpet that has only been vacuumed and carpet that has
              been professionally deep cleaned using high pressure hot water extraction.
            </p>
            <p>
              For families with pets, children, allergies, or heavy foot traffic, routine professional carpet
              cleaning is one of the best ways to maintain a cleaner indoor environment while also helping extend
              the life of your carpet.
            </p>
          </div>
          <div className="cp-why-img">
            <img
              src="/images/carpetcleaning/carpet-cleaning-clean-room-las-cruces.jpeg"
              alt="Clean carpet in Las Cruces NM home after professional steam cleaning – bright and fresh living room"
            />
          </div>
        </div>
      </section>

      {/* Common Carpet Problems */}
      <section className="cp-problems">
        <div className="cp-problems-inner">
          <h2>Common Carpet Problems We Remove</h2>
          <p>
            Our professional carpet cleaning process is designed to tackle some of the toughest carpet
            cleaning issues homeowners and businesses deal with every day.
          </p>
          <div className="cp-problems-grid">
            <div className="cp-problem-item">
              <h3>Pet Urine Contamination</h3>
              <p>Pet accidents can soak deep into carpet padding and leave behind long lasting odors that continue to return even after surface cleaning.</p>
            </div>
            <div className="cp-problem-item">
              <h3>Dog &amp; Cat Odors</h3>
              <p>Pet odors trapped deep within carpet fibers can make entire rooms smell unpleasant and difficult to fully freshen without deep extraction.</p>
            </div>
            <div className="cp-problem-item">
              <h3>Heavy Traffic Lane Buildup</h3>
              <p>Hallways, living rooms, and entryways often become darkened from oils, dirt, and foot traffic over time.</p>
            </div>
            <div className="cp-problem-item">
              <h3>Food &amp; Drink Stains</h3>
              <p>Coffee, soda, juice, wine, and food spills can leave stubborn stains if not professionally treated.</p>
            </div>
            <div className="cp-problem-item">
              <h3>Smoke &amp; Tobacco Odors</h3>
              <p>Smoke odors can become trapped in carpet fibers and continue affecting indoor air quality.</p>
            </div>
            <div className="cp-problem-item">
              <h3>Dirty Apartment Carpets</h3>
              <p>Apartment carpets often experience heavy wear, staining, and odor buildup from constant foot traffic and move-ins.</p>
            </div>
            <div className="cp-problem-item">
              <h3>Rental Property Carpet Cleaning</h3>
              <p>We help landlords and property managers restore carpets between tenants and improve overall property appearance.</p>
            </div>
            <div className="cp-problem-item">
              <h3>Dirt &amp; Desert Dust Buildup</h3>
              <p>Homes in Las Cruces and surrounding areas commonly deal with desert dust and dirt being tracked indoors daily.</p>
            </div>
            <div className="cp-problem-item">
              <h3>High Traffic Commercial Carpet Wear</h3>
              <p>Commercial carpet experiences constant wear that can quickly leave businesses looking dirty or neglected.</p>
            </div>
            <div className="cp-problem-item">
              <h3>Matted Carpet Fibers</h3>
              <p>Heavy foot traffic can flatten carpet fibers and make carpets appear older than they really are.</p>
            </div>
            <div className="cp-problem-item">
              <h3>Allergens &amp; Dust Accumulation</h3>
              <p>Carpet can trap dust, pollen, pet dander, and allergens deep within the fibers over time.</p>
            </div>
            <div className="cp-problem-item">
              <h3>Stains Caused by Kids &amp; Pets</h3>
              <p>Everyday accidents happen. We help remove many common stains caused by active households.</p>
            </div>
            <div className="cp-problem-item">
              <h3>Grease &amp; Tracked-In Soil</h3>
              <p>Oily residue and outdoor soil can cling to carpet fibers and create dull, dirty looking carpet.</p>
            </div>
            <div className="cp-problem-item">
              <h3>Dingy &amp; Discolored Carpet Areas</h3>
              <p>Professional deep cleaning can help brighten heavily used carpet areas and improve overall appearance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="cp-expect">
        <div className="cp-expect-inner">
          <div className="cp-expect-text">
            <h2>Our Professional Carpet Cleaning Process</h2>

            <div className="cp-checklist">
              <div className="cp-check-item">
                <span className="cp-checkmark">1</span>
                <div>
                  <strong>Carpet Inspection</strong>
                  <p>We begin by carefully inspecting carpet fibers, stains, traffic lanes, and pet affected areas to determine the best cleaning approach for your carpet type and condition.</p>
                </div>
              </div>
              <div className="cp-check-item">
                <span className="cp-checkmark">2</span>
                <div>
                  <strong>Optional Commercial Pre-Vacuuming</strong>
                  <p>Dry soil removal before steam cleaning helps improve extraction results and overall carpet appearance by removing loose debris prior to flushing.</p>
                </div>
              </div>
              <div className="cp-check-item">
                <span className="cp-checkmark">3</span>
                <div>
                  <strong>Pre-Treatment Application</strong>
                  <p>Professional grade pre-treatment solutions are applied to break down oils, dirt, heavy traffic buildup, and embedded soil trapped within the carpet fibers.</p>
                </div>
              </div>
              <div className="cp-check-item">
                <span className="cp-checkmark">4</span>
                <div>
                  <strong>Agitation &amp; Fiber Restoration</strong>
                  <p>Using specialized agitation equipment including the Rotovac 360i, we loosen embedded dirt and restore carpet fibers prior to extraction. This process helps provide a deeper, more even clean compared to basic wand-only cleaning methods.</p>
                </div>
              </div>
              <div className="cp-check-item">
                <span className="cp-checkmark">5</span>
                <div>
                  <strong>Truck Mounted Hot Water Extraction</strong>
                  <p>Our truck mounted steam cleaning system uses high pressure 230+ degree hot water extraction to deeply flush carpets and remove dirt, bacteria, allergens, odors, and contaminants from deep within the carpet fibers. Unlike smaller portable machines, truck mounted systems provide stronger suction, higher temperatures, and more effective extraction power for superior cleaning results.</p>
                </div>
              </div>
              <div className="cp-check-item">
                <span className="cp-checkmark">6</span>
                <div>
                  <strong>Spot &amp; Stain Treatment</strong>
                  <p>Targeted stain removal treatments are performed on difficult spots and heavily soiled areas whenever possible.</p>
                </div>
              </div>
              <div className="cp-check-item">
                <span className="cp-checkmark">7</span>
                <div>
                  <strong>Fast Drying</strong>
                  <p>Our high powered extraction equipment removes more moisture from the carpet, helping carpets dry significantly faster than traditional carpet cleaning methods. Faster drying helps reduce inconvenience while allowing you to get back to enjoying your home sooner.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="cp-expect-image">
            <img
              src="/images/carpetcleaning/carpet-cleaning-with-chemical-el-paso-texas.jpeg"
              alt="Carpet cleaning pre-treatment chemical application in El Paso Texas – professional hot water extraction process"
            />
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="cp-different">
        <div className="cp-different-inner">
          <h2>What Makes Aggie Carpet Cleaning Different?</h2>
          <p>
            Not all carpet cleaning companies clean carpet the same way. Many companies rely only on
            traditional wand extraction, which can clean the surface but often leaves behind embedded soil,
            sticky residue, and heavily matted carpet fibers.
          </p>
          <p>
            At Aggie Carpet Cleaning, we use a far more advanced carpet cleaning process designed to provide
            deeper flushing, stronger extraction, better agitation, faster dry times, and a noticeably cleaner
            result.
          </p>
          <p>
            Our goal is not just to make the carpet look cleaner for a day or two. We focus on delivering a
            true deep cleaning process designed to leave carpet softer, fresher, healthier, and cleaner for longer.
          </p>

          <div className="cp-different-banner-img">
            <img
              src="/images/carpetcleaning/carpet-cleaning-done-las-cruces.jpeg"
              alt="Carpet cleaning completed in Las Cruces NM – professional deep cleaning results from Aggie Carpet Cleaning"
            />
          </div>

          <div className="cp-differentiators">
            <div className="cp-differentiator">
              <h3>Advanced Rotovac 360i Carpet Cleaning</h3>
              <p>
                Aggie Carpet Cleaning is one of the only carpet cleaning companies in Las Cruces using the
                powerful Rotovac 360i rotary extraction system.
              </p>
              <p>
                Unlike standard wand cleaning, the Rotovac 360i uses multiple rotating extraction heads that
                simultaneously scrub, rinse, and extract the carpet at a much more aggressive and consistent
                level. This process allows us to clean deeper into the carpet fibers while removing embedded
                soil, traffic lane buildup, pet contamination, and stubborn dirt more effectively than
                traditional wand-only carpet cleaning methods.
              </p>
              <p>
                The Rotovac 360i also helps restore matted carpet fibers and provides a more even cleaning
                result throughout the carpet. Instead of relying completely on manual wand passes alone, the
                rotary extraction system creates consistent agitation and extraction across the carpet surface
                for a deeper overall clean.
              </p>
              <p>For homes with pets, children, heavy traffic, or years of soil buildup, the difference can be dramatic.</p>
            </div>

            <div className="cp-differentiator">
              <h3>Soft Filtered Water Cleaning</h3>
              <p>
                Another major difference in our carpet cleaning process is the water itself.
              </p>
              <p>
                Many carpet cleaning companies clean using untreated hard water directly from the tap. Hard
                water can contain minerals that contribute to residue buildup and may leave carpet feeling
                stiff or crunchy after drying.
              </p>
              <p>
                Aggie Carpet Cleaning uses filtered soft water during the cleaning process to help create a
                cleaner rinse and a softer feeling carpet after cleaning. Cleaner water helps improve rinsing
                performance while reducing leftover residue trapped within the carpet fibers.
              </p>
              <p>This leaves carpets feeling cleaner, softer, and fresher after the cleaning process is complete.</p>
            </div>

            <div className="cp-differentiator">
              <h3>Acidic Rinse Carpet Neutralization</h3>
              <p>
                One of the most overlooked parts of professional carpet cleaning is proper carpet rinsing
                and pH neutralization.
              </p>
              <p>
                Many carpet cleaners use strong alkaline cleaning solutions but fail to properly neutralize
                the carpet afterward. This can leave behind sticky soap residue that attracts dirt quickly
                after cleaning, causing carpets to resoil faster and sometimes feel crunchy or stiff once dry.
              </p>
              <p>
                Our process includes an acidic rinse designed to properly neutralize the carpet after cleaning.
                This helps remove leftover residue while leaving carpet fibers softer, cleaner, and more
                natural feeling after drying.
              </p>
              <p>Proper carpet neutralization also helps reduce rapid resoiling, helping your carpet stay cleaner longer after the service is completed.</p>
            </div>
          </div>

          <div className="cp-deep-clean-summary">
            <h3>Deep Cleaning Designed For Real Results</h3>
            <p>We built our carpet cleaning process around one goal: delivering a deeper and more thorough clean than basic surface cleaning methods.</p>
            <p>Our combination of:</p>
            <ul>
              <li>Truck mounted hot water extraction</li>
              <li>230+ degree steam cleaning</li>
              <li>Rotovac 360i agitation and extraction</li>
              <li>Filtered soft water cleaning</li>
              <li>Acidic rinse neutralization</li>
              <li>High powered extraction equipment</li>
              <li>Deep pet odor treatment</li>
            </ul>
            <p>
              …allows us to provide professional carpet cleaning results designed to go far beyond basic wand
              cleaning alone.
            </p>
            <p>
              When homeowners hire Aggie Carpet Cleaning, they are not simply paying for someone to spray soap
              and vacuum the surface of the carpet. They are investing in a professional deep cleaning process
              designed to restore cleaner, fresher, softer feeling carpet throughout the home.
            </p>
            <p>
              Many customers immediately notice the difference in how their carpet looks, feels, and smells
              after cleaning. High traffic areas often appear brighter, carpet fibers feel softer underfoot,
              and rooms feel fresher and cleaner overall.
            </p>
            <p>
              For homeowners struggling with pet odors, heavy traffic lanes, dirty rental carpets, or years of
              embedded soil buildup, professional deep extraction cleaning can make a major difference in both
              the appearance and comfort of the home.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="cp-why-choose">
        <div className="cp-why-choose-inner">
          <h2>Why Homeowners Choose Aggie Carpet Cleaning</h2>
          <p>
            Homeowners throughout Las Cruces and El Paso trust Aggie Carpet Cleaning because we focus on
            delivering real results instead of rushed surface cleaning.
          </p>
          <div className="cp-checklist">
            <div className="cp-check-item"><span className="cp-checkmark">✓</span><span>Powerful truck mounted steam cleaning equipment</span></div>
            <div className="cp-check-item"><span className="cp-checkmark">✓</span><span>High pressure hot water extraction</span></div>
            <div className="cp-check-item"><span className="cp-checkmark">✓</span><span>Fast dry times</span></div>
            <div className="cp-check-item"><span className="cp-checkmark">✓</span><span>Deep pet odor treatment</span></div>
            <div className="cp-check-item"><span className="cp-checkmark">✓</span><span>Residential and commercial carpet cleaning</span></div>
            <div className="cp-check-item"><span className="cp-checkmark">✓</span><span>Professional agitation equipment including the Rotovac 360i</span></div>
            <div className="cp-check-item"><span className="cp-checkmark">✓</span><span>Friendly and reliable service</span></div>
            <div className="cp-check-item"><span className="cp-checkmark">✓</span><span>Honest pricing with no hidden fees</span></div>
            <div className="cp-check-item"><span className="cp-checkmark">✓</span><span>Locally owned and operated</span></div>
            <div className="cp-check-item"><span className="cp-checkmark">✓</span><span>Serving Las Cruces, El Paso, Mesilla, Picacho Hills, and surrounding communities</span></div>
          </div>
          <p>
            We understand how frustrating dirty carpet can be, especially when odors, stains, or traffic lanes
            make your home feel less clean no matter how much you vacuum. Our goal is to help restore
            freshness, comfort, and cleanliness back into your living space.
          </p>
        </div>
      </section>

      {/* Local Service Areas */}
      <section className="cp-areas">
        <div className="cp-areas-inner">
          <h2>Areas We Serve</h2>
          <div className="cp-areas-grid">
            <div className="cp-area-item">
              <h3>Carpet Cleaning in Picacho Hills</h3>
              <p>
                We provide professional carpet cleaning services throughout Picacho Hills using truck mounted
                steam cleaning equipment designed to remove deep soil, pet odors, dust, and allergens from
                carpet.
              </p>
              <p>
                Homes in Picacho Hills often deal with desert dust buildup and heavy traffic areas, making
                routine professional carpet cleaning important for maintaining cleaner and healthier flooring.
                Our deep extraction cleaning process helps remove embedded dirt while improving the overall
                appearance and feel of your carpet.
              </p>
            </div>
            <div className="cp-area-item">
              <h3>Carpet Cleaning in Sonoma Ranch</h3>
              <p>
                Aggie Carpet Cleaning proudly serves Sonoma Ranch with professional steam carpet cleaning
                services for homes, apartments, and businesses.
              </p>
              <p>
                Our deep extraction cleaning process helps restore carpet appearance while removing stains,
                odors, allergens, and embedded dirt from high traffic areas. Professional carpet cleaning can
                help your home feel cleaner, fresher, and more comfortable for both your family and guests.
              </p>
            </div>
            <div className="cp-area-item">
              <h3>Carpet Cleaning Near NMSU</h3>
              <p>
                We provide carpet cleaning services near New Mexico State University for homes, apartments,
                student housing, and rental properties.
              </p>
              <p>
                Student housing and rental properties often experience heavy traffic, spills, stains, and odor
                buildup that standard vacuuming cannot fully remove. Our professional hot water extraction
                process helps restore cleaner carpet conditions while improving overall freshness.
              </p>
            </div>
            <div className="cp-area-item">
              <h3>Carpet Cleaning in Mesilla</h3>
              <p>
                Our Mesilla carpet cleaning services help homeowners maintain cleaner and healthier carpets
                using professional truck mounted steam cleaning equipment.
              </p>
              <p>
                We remove embedded dirt, allergens, stains, and odors while helping extend the life and
                appearance of your carpet. Regular professional carpet cleaning can help preserve your
                flooring investment while keeping your home looking its best.
              </p>
            </div>
            <div className="cp-area-item">
              <h3>Carpet Cleaning in El Paso</h3>
              <p>
                Aggie Carpet Cleaning also provides professional carpet cleaning services throughout El Paso, TX.
              </p>
              <p>
                We clean residential and commercial carpet using high powered truck mounted extraction
                equipment designed to deliver deeper cleaning and faster drying results. Whether you are
                dealing with pet odors, stained carpet, traffic lane buildup, or general carpet wear, we help
                restore cleaner and fresher flooring throughout your home or business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pet Urine & Odor */}
      <section className="cp-pet-urine">
        <div className="cp-pet-urine-inner">
          <div className="cp-pet-urine-text">
            <h2>Pet Urine &amp; Odor Carpet Cleaning</h2>
            <p>
              Pet urine contamination can soak deep into carpet padding and even the subfloor underneath the
              carpet. Standard carpet cleaning alone often does not fully remove urine deposits or odor causing
              bacteria trapped below the surface.
            </p>
            <p>
              This is one of the biggest reasons odors often return shortly after traditional carpet cleaning.
              Surface cleaning may improve the smell temporarily, but contamination trapped underneath the
              carpet can continue producing odor over time.
            </p>
            <p>
              Our deep pet urine treatment process uses flushing and subsurface extraction methods designed to
              remove contamination from both the carpet fibers and underlying padding whenever possible. This
              helps reduce persistent odors and improve overall cleanliness far beyond traditional surface
              cleaning methods.
            </p>
            <p>
              For many homeowners, pet odor problems can become embarrassing and frustrating, especially when
              guests notice smells that seem impossible to remove. Deep extraction treatment helps target the
              source of the odor instead of simply covering it up.
            </p>
          </div>
          <div className="cp-pet-urine-img">
            <img
              src="/images/carpetcleaning/cleaned-carpets-el-paso.jpeg"
              alt="Freshly cleaned carpets in El Paso TX after professional pet urine and odor removal treatment by Aggie Carpet Cleaning"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="cp-faq">
        <div className="cp-faq-inner">
          <h2>Frequently Asked Questions</h2>
          <div className="cp-faq-list">
            <div className="cp-faq-item">
              <h3>How long does carpet cleaning take to dry?</h3>
              <p>Most carpets dry within 4-8 hours depending on airflow, humidity, carpet thickness, and overall soil conditions.</p>
            </div>
            <div className="cp-faq-item">
              <h3>Do you move furniture?</h3>
              <p>We move light furniture as part of the carpet cleaning process whenever possible.</p>
            </div>
            <div className="cp-faq-item">
              <h3>What carpet cleaning method do you use?</h3>
              <p>We use professional truck mounted hot water extraction, commonly referred to as steam cleaning.</p>
            </div>
            <div className="cp-faq-item">
              <h3>Do you remove pet urine odors?</h3>
              <p>Yes. We offer deep pet urine treatment and subsurface extraction services designed to target odor contamination beneath the carpet surface.</p>
            </div>
            <div className="cp-faq-item">
              <h3>How often should carpets be professionally cleaned?</h3>
              <p>Most homes benefit from professional carpet cleaning every 6-12 months depending on pets, children, and traffic levels.</p>
            </div>
            <div className="cp-faq-item">
              <h3>Do you serve Picacho Hills and Sonoma Ranch?</h3>
              <p>Yes. We proudly serve Las Cruces, El Paso, Mesilla, Picacho Hills, Sonoma Ranch, and surrounding communities.</p>
            </div>
            <div className="cp-faq-item">
              <h3>Are your cleaning products safe for kids and pets?</h3>
              <p>Yes. We use professional cleaning solutions that are safe when used properly and according to manufacturer guidelines.</p>
            </div>
            <div className="cp-faq-item">
              <h3>Can professional carpet cleaning help with allergies?</h3>
              <p>Professional steam carpet cleaning can help remove dust, allergens, pet dander, and other contaminants trapped within carpet fibers.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CarpetCleaning;
