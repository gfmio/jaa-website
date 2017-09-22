
const c = require('csam/lib/component')

const Link = require('../../../../uikit/link')
const EmbedIFrame = require('../../../../uikit/embed-iframe')

const InputWrapper = require('../../../../uikit/form-components').InputWrapper;

module.exports = function(props, children) {
  var props = props || {}

  var payButtonInitialised = false;

  const ticketModel = {
    basicAmount: 0,
    halfAmount: 0,
    fullAmount: 0,
    brunchAmount: 0,
  };

  const initialisePayButton = function() {
    var handler = window.StripeCheckout.configure({
      key: "pk_live_gEifQ8L5UkANl9uoLQzygwu2",
      image: '/media/favicon.png',
      locale: 'auto',
      token: function(token) {
        const ticketStrings = []
        if (ticketModel.basicAmount > 0) {
          ticketStrings.push(ticketModel.basicAmount.toString() + "x Basic");
        }
        if (ticketModel.halfAmount > 0) {
          ticketStrings.push(ticketModel.halfAmount.toString() + "x Half");
        }
        if (ticketModel.fullAmount > 0) {
          ticketStrings.push(ticketModel.fullAmount.toString() + "x Full");
        }
        if (ticketModel.brunchAmount > 0) {
          ticketStrings.push(ticketModel.brunchAmount.toString() + "x Brunch Only");
        }

        $("#homecoming-2017-ticket-shop").fadeOut().addClass("uk-hidden");
        $.post("https://api.jacobs-alumni.de/buy-hc2017-tickets", {
          email: token.email,
          stripeToken: token.id,
          tickets: ticketModel
        }, function(result) {
          // console.log("result", result);
          $("#homecoming-2017-purchase-complete-message")[0].innerText = "Your ticket purchase (" + ticketStrings.join(", ") + ") for Homecoming 2017 was successful. An receipt of your purchase will be emailed to the email address you provided (" + token.email + ")."
          $("#homecoming-2017-purchase-complete-wrapper").hide().removeClass("uk-hidden").fadeIn();
        }, "json").fail(function(err) {
          $("#homecoming-2017-purchase-complete-message")[0].innerText = "Your ticket purchase (" + ticketStrings.join(", ") + ") for Homecoming 2017 failed. " + err;
          $("#homecoming-2017-purchase-complete-wrapper").hide().removeClass("uk-hidden").fadeIn();
          // console.log("err", err);
        });
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
      }
    });

    document.getElementById('payButton').addEventListener('click', function(e) {
      const ticketStrings = []
      if (ticketModel.basicAmount > 0) {
        ticketStrings.push(ticketModel.basicAmount.toString() + "x Basic");
      }
      if (ticketModel.halfAmount > 0) {
        ticketStrings.push(ticketModel.halfAmount.toString() + "x Half");
      }
      if (ticketModel.fullAmount > 0) {
        ticketStrings.push(ticketModel.fullAmount.toString() + "x Full");
      }
      if (ticketModel.brunchAmount > 0) {
        ticketStrings.push(ticketModel.brunchAmount.toString() + "x Brunch Only");
      }

      const description = "Homecoming tickets \n(" + ticketStrings.join(", ") + ")"

      // Open Checkout with further options:
      handler.open({
        name: 'Jacobs Alumni Association',
        description: description,
        // email: "...@jacobs-alumni.de",
        zipCode: false,
        currency: 'eur',
        amount: calcPrice(ticketModel) * 100
      });
      e.preventDefault();
    });

    // Close Checkout on page navigation:
    window.addEventListener('popstate', function() {
      handler.close();
    });

    payButtonInitialised = true;
  }

  const updateTicketAmounts = function(e) {
    ticketModel.basicAmount = document.getElementById("basicAmountInput").valueAsNumber || 0;
    // ticketModel.halfAmount = document.getElementById("halfAmountInput").valueAsNumber || 0;
    // ticketModel.fullAmount = document.getElementById("fullAmountInput").valueAsNumber || 0;
    ticketModel.brunchAmount = document.getElementById("brunchAmountInput").valueAsNumber || 0;

    ticketModel.halfAmount = 0;
    ticketModel.fullAmount = 0;

    const totalAmount = calcPrice(ticketModel);
    document.getElementById("totalAmount").innerText = totalAmount.toFixed(2);

    if (!payButtonInitialised) {
      initialisePayButton()
    }

    if (totalAmount > 0) {
      $("#payButtonWrapper").removeClass("uk-hidden").show();
    } else {
      $("#payButtonWrapper").hide().addClass("uk-hidden");
    }
  }

  const calcPrice = function(ticketModel) {
    return ticketModel.basicAmount * 15 +
           ticketModel.halfAmount * 45 +
           ticketModel.fullAmount * 75 +
           ticketModel.brunchAmount * 10;
  }

  return (
    <article class="uk-article">
      <h1 class="uk-article-title">Homecoming 2017</h1>
      <figure>
        <img src="/media/what-we-do/homecoming/2017/banner.jpg" alt="Homecoming 2017 banner" />
      </figure>

      <h2>Welcome</h2>
      <p>
        The Homecoming Organization Committee is excited to welcome you for this year’s Homecoming from 22nd – 24th of September on campus. The Class Representatives of 2007 and 2012, Stefan Rustler and Henrik Maedler along with the organization team consisting of Lida Lottko, Diana Wells, Adriana Trutzenberg, Hasan Tahir, Devashish Tikekar, Alex Taskov, Max Lüth, Flo Sturm and Max Lüth are working hard towards making this yet another memorable event for all Alumni “coming home”.
      </p>
      <p>
        Many things will be the like the previous year, most notably the combination of Homecoming with the Symposium on Friday and the Jacobs Games (formerly Olympix). We are excited to host this year’s Gala Dinner at Jacobs University in the Campus Center’s East Wing. Like last year, the dinner will be open to all Alumni, regardless of their graduating class. We are also very excited to move the Alumni Association Assembly to Saturday Afternoon – allowing all of us to enjoy a calm Saturday morning on campus and to be well rested for the Homecoming party on Saturday Night.
      </p>

      <h2>Ticket sales</h2>

      <p>
        The ticket sales will be opened from August 11th onwards. There are three ticket options – from the full package to the basic ticket for just a few Euros. Unfortunately, there will be no rooms to stay on campus this year because of a very big incoming Class of 2020. <strong>To facilitate your stay in Bremen, we have blocked a number of rooms at local hotels in Bremen Nord or downtown.</strong> You can find all information <a target="_blank" href="/media/what-we-do/homecoming/2017/HC 2017 - Hotels Overview.pdf">here</a>.
      </p>

      <h2>Career Symposium</h2>
      <p>
        We are also pleased to invite you to the Jacobs Career Symposium 2017, organized by the Career Services Center in close cooperation with the Alumni Association. You can use this opportunity to enlarge your network, meeting Jacobs Alumni as company representatives and other top representatives of amazing corporates. The panel discussion will be followed by a networking event with students, alumni, faculty and company representatives. Snacks and drinks will be provided. A separate registration on <Link href="https://www.eventbrite.co.uk/e/jacobs-career-symposium-2017-registration-36051639424">EventBrite</Link> is required for this, as name tags will be prepared for you.
      </p>

      <h2>Agenda</h2>

      <EmbedIFrame format={ 0.777 } src="/media/what-we-do/homecoming/2017/Agenda_Homecoming2017_vF.pdf" />
      <p>
        In case you can’t see the embedded PDF, you can open it by clicking <a href="/media/what-we-do/homecoming/2017/Agenda_Homecoming2017_vF.pdf" target="_blank">this link</a>.
      </p>

      <h3>Friday:</h3>
      <ul>
        <li>In the afternoon, there will be several <strong>open lectures</strong>. For a complete overview of topics, times and locations, please check <a href="/media/what-we-do/homecoming/2017/HC2017_OpenLecturesSchedule.pdf" target="_blank">the schedule</a>.</li>
        <li>Get your <strong>Welcome Package</strong> in Campus Center Foyer and greet incoming fellow alumni there</li>
        <li>At the <strong>Career Symposium</strong>, organized by the Career Service Center of Jacobs, selected alumni speakers and other company representatives present their companies and participate in a panel discussion. Continue the discussions over some <strong>snacks and drinks</strong> right after the Symposium. Make sure to bring your business cards!</li>
        <li>Alumni-only <strong>Bar Chill Out</strong> in TheOtherSide after the Symposium. Drinks are included in the tickets.</li>
      </ul>
      <h3>Saturday:</h3>
      <ul>
        <li>Various <strong>Major Homecomings</strong> are planned for this morning. For example, the ISS and the Logistics program are hosting events for students and alumni. Detailed schedules will be posted on this page.</li>
        <li>This year’s lunch is again planned to be a <strong>“Chill and Grill“</strong>-event by the Campus Center. Drinks are included in the tickets. </li>
        <li>For the <strong>General Assembly of the Jacobs Alumni Association</strong> both university representatives and board members of the association give updates and ask for feedback of alumni. Also, the results of the <strong>Board Elections</strong> will be announced here.</li>
        <li>Fancy some coffee after the BBQ? Looking for an alumni meeting spot? Then check out the <strong>Alumni/GSA Lounge</strong>. There are comfy couches and some free hot drinks waiting for you.</li>
        <li>All alumni are invited to the <strong>Gala Dinner</strong> in the East Wing of the Campus Center.</li>
        <li>The <strong>Jacobs Games</strong> (formerly Olympix) are held during the weekend, culminating in the <strong>Cheerleading Finale</strong>.</li>
        <li>The <strong>Saturday night party</strong> will combine the sporty spirit with some summer party tunes. Drinks are included in the ticket.</li>
        <li>A professional <strong>photographer</strong> will be present during the day. Check out the gallery from <Link href="/homecoming/2016/picture-gallery">last year</Link>!</li>
      </ul>
      <h3>Sunday:</h3>
      <ul>
        <li>Meet in the servery of College Three – for the <strong>Farewell Brunch</strong> and make sure to say good bye to new and old friends. Brunch vouchers need to be separately purchased in the shop.</li>
        <li>We are in the process of organizing a football match, <strong>Alumni Allstars vs. Student Champions</strong>. Stay tuned for updates!</li>
      </ul>

      <h2>FAQs</h2>
      <p>
        <strong>I am not part of Class of 2007 or 2012. Can I still join the event?</strong>
      </p>
      <p>
        Absolutely! Homecoming is an event for all Jacobs alumni – and their partners and children. That includes recent graduates and also exchange students. As in the previous year the Gala Dinner at East Wing will be open to all alumni. Note, however, that you have to be an official member of the Alumni Association in order to purchase tickets for Homecoming, having paid the membership contribution. Tickets may be purchased for fellow alumni.
      </p>
      <p>
        <strong>What will happen at the Gala Dinner?</strong>
      </p>
      <p>
        This year’s Gala Dinner will happen in the East Wing of the Campus Center, which will open its doors at 6pm on Saturday for a champagne reception. At 7:00pm the agenda will begin with a welcome address, after which the grand buffet will be openedwe will enjoy a three-course dinner. Two bottles of wine and water are included for each table of eight. And yes, you can bring your partner along. This year we will also have some musical performances by students! Please note that participation is only included in the full ticket.
      </p>
      <p>
        <strong>Will there be any sports activities?</strong>
      </p>
      <p>
        We are lucky to have Olympix – now “Jacobs Games” – taking place on the same weekend as Homecoming. Alumni are invited to join the “graduate teams” and be once again part of this crazy competition. Sports alumni can join are the following: Basketball, Football, Dodgeball, Volleyball, Tug of War, E-sports. You may already voice your interested in joining any sport by writing to <a href="mailto:homecoming@jacobs-alumni.de">homecoming@jacobs-alumni.de</a> but we will also send out a survey for this purpose closer to the events once also the grad captains are settled. The main venue of the Jacobs Games will be the Sports and Convention Center, where there are also showers available. A detailed schedule of the event can be found at the bottom of this page when it becomes available. One event that we would like to point out here, though, is the Cheerleading Finale right after the Gala Dinner on Saturday. An alumni group will be performing (out of competition), too!
      </p>
      <p>
        <strong>Where can I RSVP for Homecoming and check who else is coming?</strong>
      </p>
      <p>
        To RSVP for Homecoming, please visit the <a href="https://www.facebook.com/events/301778486904583" target="_blank">Facebook page of the event</a>. Note that you have to be a member of the “Jacobs University Alumni”-group in order to do so. Also note that RSVPing on the Facebook page does not officially register you for the event.
      </p>
      <p>
        <strong>What ticket options are there and what are the prices?</strong>
      </p>
      <p>
        There are three ticket options: The <strong>basic ticket (15€)</strong> that gives you access and drinks for the Friday night Bar Chill-Out and the Saturday night theme party. The <strong>half-ticket (45 €)</strong> which on top of that includes the Saturday Chill&Grill-BBQ (incl. drinks). And the <strong>full-ticket (75€)</strong> which includes the formal Gala Dinner Saturday evening. For transparency purposes, we would like to make sure you understand the <a href="/media/what-we-do/homecoming/2017/HC2017_TicketCostBreakdown.png" target="_blank">composition of costs of the packages</a>. We are grateful to be partially subsidized by the university for the Gala Dinner so we can offer the full-ticket at a reduced prices.
      </p>
      <p>
        <strong>How can I make donations?</strong>
      </p>
      <p>
        Donations will be possible during the Gala Dinner through credit card payment as well as paper forms (Einzugsermächtigung). Additional fees might apply when paying through credit card.
      </p>
      <p>
        <strong>I missed the registration deadline but would still like to attend. Can I still sign up?</strong>
      </p>
      <p>
        After the deadline for the registration passes (September 17), you may sign up during a late-registration time slot scheduled to Thursday, September 21, 12pm CET till Friday, September 22, 3pm. After this time slot no registrations will be accepted.
      </p>
      <p>
        <strong>Can I cancel my ticket purchases?</strong>
      </p>
      <p>
        All tickets are fully refundable before the end of the sales period on September 17. After the salse period ends, only 50% of the ticket price will be refunded upon cancellation. There will be a late registration phase on Thursday, September 21, 12pm CET till Friday, September 22, 3pm. No refunds will be given upon cancellation of late registrations.
      </p>
      <p>
        <strong>Can I get accommodation on campus?</strong>
      </p>
      <p>
        Unfortunately, this year there is no on-campus accommodation available. Even the Guest House is fully booked. The rooms in College Nordmetall will be filled up with freshmen – a large class is expected this year. Check the section for off-campus accommodation below for further advice.
      </p>
      <p>
        <strong>What about accommodation off-campus?</strong>
      </p>
      <p>
        You can of course book accommodation in any hotel there is in Bremen, preferably well advance, as rooms are booked out quickly. We encourage you to also get in touch with your former host family in Bremen. Maybe you can arrange a night or two with them. In addition to this, we have reserved several rooms in Hotels in Bremen. In order to take advantage of this, simply state that you are a participant of “Jacobs University Alumni Homecoming 2017” when making the booking.
      </p>
      <p>
        <strong>I am staying not too close to campus. Can store luggage and change on campus?</strong>
      </p>
      <p>
        Since this year there will not be any on-campus accommodation available due to the large incoming student batch, we are making every effort to mitigate any inconveniences caused especially for those staying further away from campus. In particular, on Saturday there are two dress codes, casual for the day and formal for the evening, and going back to your hotel to change might not be feasible. We put a slot in which you can change, from after the General Assembly at 16:30 to the beginning of the Gala Danner at 19:00. However, if this is to short you can bring the outfit for the evening to campus (or any other belongings) and store it in the Alumni Lounge (see map in agenda), which is open between 10:00 and 20:00. This is a general alumni meeting spot that will be looked after by a student assistant. You can change in the bathrooms there or go over to the Sports & Convention Center and use its changing rooms. Any stuff that you want to leave for the night, you can leave at the Alumni Lounge, which will be closed for the night and re-opened the following morning. You may also bring any belongings to the party, which has a cloakroom set up. Please note that any of those storing services are at your own risk and that we cannot be held liable for any damage or loss that might occur to your belongings.
      </p>
      <p>
        <strong>Where can I get my Welcome Package and what is in it?</strong>
      </p>
      <p>
        The Welcome Packages will be ready in the foyer of the foyer of the university Campus Center. If you are arriving late, you can also pick them up Saturday during the Chill&Grill-BBQ. The package will include your wristband for the BBQ, Gala Dinner and party, meal vouchers, prints of all schedules.
      </p>

      <h2>At a Glance</h2>
      <ul>
        <li>Dates: 22nd – 24th September, 2017</li>
        <li>Registration: Until September 17th, 2017 (full refund only when cancelled before)</li>
        <li>Facebook event: <Link href="https://www.facebook.com/events/301778486904583/">https://www.facebook.com/events/301778486904583</Link></li>
        <li>Accommodation: On-campus housing not available. List of local hotels <a href="/media/what-we-do/homecoming/2017/HC 2017 - Hotels Overview.pdf" target="_blank">here</a>.</li>
        <li>Open lectures schedules: <a href="/media/what-we-do/homecoming/2017/HC2017_OpenLecturesSchedule.pdf" target="_blank">Link</a></li>
        <li>Career Symposium: <Link href="https://www.eventbrite.co.uk/e/jacobs-career-symposium-2017-registration-36051639424">Separate registration necessary</Link></li>
        <li>General Assembly: See separate invitation via email</li>
        <li>Jacobs Games schedule: TBD</li>
      </ul>

      <h2>Ticket Infos</h2>
      <p>
        Welcome to the Homecoming Ticket Shop! We look forward to seeing you on campus this year to reunite, reminisce and relive.
      </p>
      <p>
        Of course, coming together on campus for Homecoming is free of charge. Many items on the agenda are open to all alumni, regardless of whether you buy a ticket or not. That goes especially for the core of every Homecoming weekend, the Alumni Association Assembly on Saturday afternoon: We are excited to introduce the Assembly in an open and interactive town hall setting for the first time this year. The Career Symposium on Friday night, including a light dinner, will also be open to all Alumni at the courtesy of the University.
      </p>
      <p>
        Aside from those program items, we are offering different packages with a few perks, that are supposed to make the weekend even more fun. Below you can find the different packages – choose the one that suits you best. Upon arrival you will receive a wristband with which you will be able to enjoy the extras of your package.
      </p>
      <p>
        All tickets are fully refundable before the end of the sales period on September 17. After the salse period ends, only 50% of the ticket price will be refunded upon cancellation. There will be a late registration phase on Thursday, September 21, 12pm CET till Friday, September 22, 3pm. No refunds will be given upon cancellation of late registrations.
      </p>

      <h3>Ticket options</h3>

      <h4>Basic Ticket – „Just Dance!“</h4>
      <p><strong>15 €</strong></p>
      <p>
        All you care about is party, and party is what you will get. This year’s Saturday night Homecoming extravaganza sports all the features that an all-night campus party needs. Aside from our set of all-time favorite alumni DJs bringing out the best beats across all ranges of musical tastes, our party planners are organizing a range of surprise gigs and gadgets to make sure you will not forget this night for a while. The ticket price might seem high at first – but it includes free drinks! The theme will be announced soon, with enough time to you to pack according to the dress code. Let’s see if you make it on the survivor’s picture!
      </p>
      <p>Includes</p>
      <ul>
        <li>Drinks Friday night at TheOherSide</li>
        <li>Entrance to TheOtherSide on Saturday night</li>
        <li>All-You-Can-Drink at to TheOtherSide on Saturday night</li>
      </ul>

      <h4>Half Ticket – „Sweet Saturday“</h4>
      <p><strong>45 €</strong></p>
      <p>
        This one is for a revival of that last summer day before midterm season starts. Catch up and relax with fellow alumni at the Homecoming BBQ: Ice cold, Bremen-brewed Beck’s beers, a salad buffet and a selection of hearty grill goodies (both meaty and veggie, of course) will set the mood. Get ready for the Saturday night party with enough time to outshine your fellow classmates with those annoying consulting jobs (they will probably be wearing grey suits).
      </p>
      <p>Includes</p>
      <ul>
        <li>Drinks Friday night at TheOherSide</li>
        <li>BBQ (incl. drinks) for lunch on Saturday</li>
        <li>Entrance to TheOtherSide on Saturday night</li>
        <li>All-You-Can-Drink at to TheOtherSide on Saturday night</li>
      </ul>

      <h4>Full Ticket – „Gimme Everything”</h4>
      <p><strong>75 €</strong></p>
      <p>
        Here’s the full package. Everything. Schedule a few extra sessions at the gym, because you will eat a lot. Treat yourself to the three-course seated Gala Dinner including a very fine selection of red and white wine, enjoy the Homecoming BBQ, and forget the stress of a busy work week over drinks and funky dance moves at TheOtherSide for Saturday night’s Homecoming Party. And if you like, your Sunday morning hangover will be cured by the full-range brunch (optional, not included in the price) at the College III Servery, just like in the good old days.
      </p>
      <p>Includes:</p>
      <ul>
        <li>Drinks Friday night at TheOherSide</li>
        <li>Free drinks and a BBQ at lunch</li>
        <li>Entrance to The Other Side on Saturday night</li>
        <li>All-you-can-drink at to The Other Side on Saturday night</li>
        <li>Reunion dinner and drinks</li>
      </ul>

      <h4>Brunch Only Ticket: “Brunch, Baby”</h4>
      <p><strong>10 €</strong></p>
      <p>
        You can add this item to all three of the above Options. The Farewell Brunch will take place at the College III servery and round up your Homecoming weekend, just like in the good old days.
      </p>
      <p>Includes:</p>
      <ul>
        <li>Brunch on Sunday morning</li>
      </ul>

      <hr/>

      { /* <h3>The ticket sale for Homecoming 2017 is now closed.</h3>
      <p>Late-registration will be open from Thu, Sep 21, 12pm till Fri, Sep 22, 3pm (CET).</p> */ }

      <div id="homecoming-2017-ticket-shop">
        <h3>Homecoming 2017 Ticket Shop - Grab your last tickets now!</h3>
        <p>
          Late-registration is open from Thu, Sep 21, 12pm till Fri, Sep 22, 3pm (CET).
        </p>
        <p><strong>Half and full tickets are now sold out!</strong></p>

        <form>
          <InputWrapper name="basic" label="Basic Ticket – „Just Dance!“ 15 €" alerts={[]}>
            <input class="uk-input" type="number" id="basicAmountInput" name="basic" min="0" value="0" on={{ change: updateTicketAmounts, click: updateTicketAmounts }} />
          </InputWrapper>
          { /* <InputWrapper name="half" label="Half Ticket – „Sweet Saturday“ 45 €" alerts={[]}>
            <input class="uk-input" type="number" id="halfAmountInput" name="half" min="0" value="0" on={{ change: updateTicketAmounts, click: updateTicketAmounts }} />
          </InputWrapper>
          <InputWrapper name="full" label="Full Ticket – „Gimme Everything” 75 €" alerts={[]}>
            <input class="uk-input" type="number" id="fullAmountInput" name="full" min="0" value="0" on={{ change: updateTicketAmounts, click: updateTicketAmounts }} />
          </InputWrapper> */ }
          <InputWrapper name="brunch" label="Brunch Only Ticket - “Brunch, Baby” 10 €" alerts={[]}>
            <input class="uk-input" type="number" id="brunchAmountInput" name="brunch" min="0" value="0" on={{ change: updateTicketAmounts, click: updateTicketAmounts }} />
          </InputWrapper>

          <p>
            <strong>TOTAL: <span id="totalAmount">0.00</span> €</strong>
          </p>
          <div id="payButtonWrapper" class="uk-hidden">
            <button id="payButton" class="uk-button uk-button-primary">Purchase tickets</button>
          </div>
        </form>
      </div>
      <div id="homecoming-2017-purchase-complete-wrapper" class="uk-hidden">
        <h1 class="uk-text-primary">You're coming to Homecoming 2017!</h1>
        <p class="uk-text-lead" id="homecoming-2017-purchase-complete-message">
        </p>
        <p class="uk-text-lead">We're looking forward to having you join us!</p>
        <p class="uk-text-lead">See you at Homecoming!</p>
      </div>
      <script src="https://checkout.stripe.com/checkout.js"></script>
    </article>
  )
}
