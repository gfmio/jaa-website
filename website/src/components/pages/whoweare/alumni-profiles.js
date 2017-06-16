
const c = require('csam/lib/component')

module.exports = function(props, children) {
  var props = props || {}

  return (
    <article class="uk-article">
      <div class="uk-grid uk-child-width-1-3" uk-grid>
        <div>
          <h2 class="">What are the Jacobs Alumni up to next?</h2>

          <p>
            The network of Jacobs Alumni is truly global, encompassing a variety of professional and academic career paths. You can read more about some of the latest accomplishments and stories on this page.
          </p>
          <p>
            We will gradually be featuring more profiles on this page – from our alumni around the world!
          </p>
        </div>
        <div>
          <h2 class="">Suggest a story or share your own!</h2>
          <p>
            Suggest a story or share your own!
          </p>
          <p>
            If you have someone with an interesting profile in mind, suggest their names to us with the following form. Your friend or even your own story might be featured in the next newsletter!
          </p>
        </div>
        <div>
          <figure class="slideshow" >
            <img class="active" src="/media/who-we-are/what1.png" />
            <img src="/media/who-we-are/university.jpg" />
            <img src="/media/who-we-are/alumni-profiles-J.-Eduardo-Marquez-11.jpg" />
          </figure>
        </div>
      </div>

      <div class="uk-padding"></div>

      <div class="uk-grid uk-grid-small" uk-grid>
        <div class="uk-width-auto@m">
          <div>
            <ul id="tabList" class="uk-tab uk-tab-left" uk-tab="connect: #form-steps">
              <li class="uk-active"><a href="#">J. Eduardo Marquez (‘11)</a></li>
              <li class=""><a href="#">Noor Cornelissen (‘13)</a></li>
              <li class=""><a href="#">Chirin Khawatmi (‘10)</a></li>
            </ul>
          </div>
        </div>
        <div class="uk-width-expand@m">
          <ul id="form-steps" class="uk-switcher" uk-switcher="animation: uk-animation-fade">
            <li>
              <h1 class="uk-article-title">J. Eduardo Marquez (‘11)</h1>
              <figure class="uk-padding-small uk-margin-remove" style={{ float: 'right' }}>
                <img src="/media/who-we-are/alumni-profiles-J.-Eduardo-Marquez-11.jpg" alt="" />
              </figure>
              <p>
                After graduating from Jacobs with a BSc in Earth and Space Sciences, Eduardo pursued a Master of Science in Geology and Geochemistry at the University of Freiburg. Having worked on an environmental assessment project of a mine in Vietnam and exploring Mexico’s main mining states as an Industry Analyst at the Mexico Mining Review, he decided to pursue a career in environmental consulting for the mining industry.
              </p>
              <p>
                <strong>Current location:</strong> Queretaro, Mexico
              </p>
              <p>
                <strong>Nationality:</strong> Mexican
              </p>
              <p>
                <strong>Job title:</strong> Staff Consultant (Geochemist)
              </p>
              <p>
                <strong>Current employer:</strong> <a href="http://www.srk.com/en">SRK Consulting</a>
              </p>
              <p>
                <em>Tell us about your current occupation, responsibilities and what you like most about it.</em>
              </p>
              <p>
                I am currently employed by SRK Consulting, one of the main mining consulting firms in the world. My responsibilities include geochemistry and hydrogeology field work at mine sites in Mexico, and support work for the SRK North American and South American operations. I like that I am able to use both my scientific knowledge which I acquired throughout my studies in Germany and my business knowledge which I acquired after working on the business publication Mexico Mining Review.
              </p>
              <p>
                <em>What was your journey since you graduated from Jacobs, in regards to what you are doing now?</em>
              </p>
              <p>
                After Jacobs, I felt like I wanted to dig deeper into geochemistry, and so I decided to go to Freiburg where I was accepted in a master program and in a geochemistry research group. During the two years in Freiburg, I was able not only to expand my theoretical understanding of geochemistry but was also given the opportunity to do some hands-on research work on the environmental impact of coal mining in Vietnam. Coming back to Mexico, I took a job as an industry analyst in the Mexico Mining Review team, which took me all over Mexico to meet the leaders of the country’s mining industry. It was through this job that I truly began to understand mining, and realized that I wanted to do environmental consulting for the extractive industries. The job with SRK Consulting is an ideal step in my career.
              </p>
              <p>
                <em>I heard you moved back to your home country. Any thoughts you want to share about the transition and returning back home?</em>
              </p>
              <p>
                I won’t try to generalize my experience since every country and every person is different. However, I will say that coming back to Mexico was the best choice that I could have made personally and professionally. I left Mexico when I was 18 years old and did not move back until I was 24. Coming back to live in Mexico as a young adult allowed me to see the true aspect of my home country.
              </p>
              <p>
                <em>Looking back, what do you miss most about Jacobs?</em>
              </p>
              <p>
                I miss hanging out with my friends from Jacobs, the weekend trips to Berlin, and movie nights with my Canadian roommate.
              </p>
              <p>
                <em>What advice would you give to current Jacobs students?</em>
              </p>
              <p>
                Make the most out of the Jacobs experience, both academically and personally. Look to your professors for help whenever you are stuck academically, and try to visit downtown Bremen at least once a week. Also, learn German if you are not German! It is important to be able to communicate with the local population of the country where you live.
              </p>
              <p>
                <em>One favorite Jacobs memory/ or one thing you are grateful for.</em>
              </p>
              <p>
                The traditional birthday parties in May in celebration of my two best friends, Kyle Gentes and Lukas Friedemann
              </p>
              <p>
                <em>Interesting fact about Eduardo</em>
              </p>
              <p>
                I ended up getting married with another Jacobs student from Russia and we now live together in Mexico.
              </p>
            </li>
            <li>
              <h1 class="uk-article-title">Noor Cornelissen (‘13)</h1>
              <figure class="uk-padding-small uk-margin-remove" style={{ float: 'right' }}>
                <img src="/media/who-we-are/Noor-Cornelissen-%E2%80%9813.jpg" alt="" />
              </figure>
              <p>
                After graduating from Jacobs with a BA International Politics and History, Noor pursued a Master of Arts in International Development (direction Public Health and Gender) at the Geneva Graduate Institute. She is currently employed by Doctors without Borders, awaiting to be deployed for the first mission in the field.
              </p>
              <p><strong>Current location:</strong> Geneva/Amsterdam</p>
              <p><strong>Nationality</strong> The Netherlands</p>
              <p><strong>Job title:</strong> Humanitarian Affairs Officer</p>
              <p><strong>Current employer:</strong><a href="http://www.msf.org/">Doctors without Borders (MSF)</a></p>
              <p><em>You have some exciting plans upcoming in your professional life. Could you tell us more about it?</em></p>
              <p>I just got hired as a Humanitarian Affairs Officer by MSF, for which I will be working in different conflict and emergency situations around the world, relocating every six months. Among other things, I will be responsible for conducting a context analysis of a particular country: politically, socially, economically, and medically. My analysis of the current situation and the potential future developments will then be used by the Head of Mission in that country to create a strategy and coordinate the medical and psycho social teams. I am currently on stand-by, waiting to be sent on my first mission. What attracted me most to the position is the interaction I will get with all different stakeholders, ranging from interviewing patients and community groups on their medical needs and negotiating humanitarian access with government officials to using ‘field data’ to lobby international actors to prevent and respond to emergency situations. In addition to that, I am just very happy to work for an organization whose mission, vision, and approach I share. In my view, MSF is very humble, locally-embedded, and self-critical, qualities often overlooked in the problematic fields of development and humanitarianism.</p>
              <p><em>t was your journey since you graduated from Jacobs, in regards to what you are doing now?</em></p>
              <p>After Jacobs I moved to Geneva for my MA degree, during which I quickly discovered my interest in public health, particularly sexual and reproductive health and rights. After an internship with UNAIDS in Geneva and a research project in a women’s hospital in Nairobi, I was certain that I wanted to continue specializing in health issues while being in ‘the field’. In that sense, MSF is truly the perfect place for me.</p>
              <p><em>Any interesting upcoming plans??</em></p>
              <p>I am waiting to be deployed on a mission and it can be anywhere in the world – so I am pretty excited for this uncertain adventure!</p>
              <p><em>Any favorite course from Jacobs that you found particularly useful after graduation?</em></p>
              <p>History of Development by Corinna Unger – This course and this particular professor influenced my career path significantly. I could recommend any course by her actually. Prof. Unger is encouraging and dedicated and has a very critical, informed view on the field of development. One of my essays from that class served as the basis of a writing sample for one of my later job applications and I remember looking back at those class notes for one of my master courses.</p>
              <p><em>Looking back, what do you miss most about Jacobs?</em></p>
              <p>I’d have to say those B2 chill sessions in Michael Lawrence and Harri Geiger’s room spent doing Hello Kitty puzzles, watching Pokemon, playing with our dwarf bunnies we ordered on Ebay, and finding other great ways to procrastinate.</p>
              <p><em>What advice would you give to current Jacobs students?</em></p>
              <p>Try to change what you do not like about Jacobs or initiate what you think is missing! You should be the ones designing your own education and the institution needs your critical feedback and great energy while you are still there.</p>
              <p><em>One favorite Jacobs memory/ or one thing you are grateful for.</em></p>
              <p>I am grateful for the people I met at Jacobs and the connections we established. Coming from a somewhat Utopian international high school (UWC), I was a bit scared that it could only go downhill from there. Fortunately, Jacobs offered a really wonderful, warm, and diverse community that made me feel at home very soon. My favorite memories include shisha nights at the Cottage and the silent disco outside at the pond.</p>
              <p><em>Interesting “Jacobs” fact about Noor</em></p>
              <p>I just spent a wonderful night in Kenya partying at the beach with five generations of Jacobs alumni. We were the only ones on the dance floor, having lots of fun, and looking quite ridiculous. When I closed my eyes, I felt like I could see the lime-green walls and the trash bag covered windows of H3.</p>
            </li>
            <li>
              <h1 class="uk-article-title">Chirin Khawatmi (‘10)</h1>
              <figure class="uk-padding-small uk-margin-remove" style={{ float: 'right' }}>
                <img src="/media/who-we-are/Chirin_Khawatmi.jpg" alt="" />
              </figure>
              <p>
                After graduating from Jacobs with a BSc in International Logistics, Chirin continued her higher education at Hult University, obtaining a Master’s in International Business. Further on, she was employed at Johnson &amp; Johnson as an Assistant Supply and Demand Planner, after which she decided to start up her own business, thus the beginnings of a new venture – Mama’s Box.
              </p>
              <p><strong>Current location:</strong> Dubai, United Arab Emirates</p>
              <p><strong>Nationality</strong> Syrian</p>
              <p><strong>Job title:</strong> Founder and Owner</p>
              <p><strong>Current employer:</strong>
                <a href="http://mamas-box.com/">
                Mama’s Box
                </a>
              </p>
              <p><em>What was your journey since you graduated from Jacobs?</em></p>
              <p>I moved to Dubai to pursue my Masters, after graduation I worked for Johnson &amp; Johnson. I quit my job when I was pregnant to be able to take care of my baby since the maternity leave in the UAE is very short.  After having my second baby I decided to start my own business – a subscription box service for pregnant and new mothers in the UAE. This month the business turns one year old!</p>
              <p><em>What is the story behind Mamas Box?</em></p>
              <p>My experience of  living in Dubai away from family and having my two children very close in age inspired me to start Mama’s Box. Mama’s Box is basically a monthly box of surprise goodies and essentials customized to the mother’s pregnancy stage or her baby’s age and delivered to her doorstep monthly. It is a fantastic way for mothers to be introduced to new products and brands at just the right time and a great way for brands to allow mothers to test their products!</p>
              <p><em>What plans do you have for the near future – for your business, as well as personal?</em></p>
              <p>We aim to grow Mama’s Box as there is currently no other business that does what we do in the UAE. We also plan to expand in the ‘pregnancy’ sector as there is a lot of room for new ideas. In terms of personal plans – simply to focus on my two children and make the best of this special time with them!</p>
              <p><em>What tips do you have for those who want to start their own business? </em></p>
              <p>If you have an idea and you really believe in it, then just do it! Logically it made no sense that I start a business with a 1 year old and a newborn, but my instincts told me go for it and I am so glad I did. </p>
              <p><em>Looking back, what do you miss most about Jacobs?</em></p>
              <p>The people for sure!</p>
              <p><em>What advice would you give to current Jacobs students?</em></p>
              <p>Enjoy every second! Time flies and there is no experience like the Jacobs Experience!</p>
              <p><em>One favorite Jacobs memory/ or one thing you are grateful for.</em></p>
              <p>This may sound crazy – but I am grateful for how hard we were pushed! It has prepared me for life and made everything ahead seam a little easier. </p>
              <p><em>Interesting fact about Chirin (&amp;Mama’s Box)</em></p>
              <p>Mama’s Box has recently been nominated &amp; is shortlisted for Time Out Kids Family Entrepreneurial Award!</p>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}
