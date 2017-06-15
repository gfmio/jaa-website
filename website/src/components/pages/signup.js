
const c = require('csam/lib/component')

const User = require('../../models/user')

const Form = require('../uikit/form')
const Input = require('../uikit/form-input')

const objectMap = function(o, fn, recursionCondition) {
  recursionCondition = recursionCondition || function(o) {
    return false
  }

  var newObject = {}
  for (var key in o) {
    // console.log(key, recursionCondition(o[key]))
    if (recursionCondition(o[key])) {
      newObject[key] = objectMap(o[key], fn, recursionCondition)
    } else {
      newObject[key] = fn(o[key])
    }
  }

  return newObject
}

const computeFormInfo = function(model) {
  var formInfo = {
    action: model.endpoint,
    method: 'POST',
    fields: objectMap(model.fields, function(field) {
      const notes = field.notes || []
      var newField = Object.assign({}, field)
      delete newField.notes
      delete newField.validators
      delete newField.__field__
      newField.validation = {
        state: 'empty',
        alerts: notes.map(function(note) {
          return { type: 'note', message: note }
        })
      }

      return newField
    }, function(o) {
      return !(o.__field__ === true)
    })
  }

  return formInfo
}

const showForm = function(e) {
  e.preventDefault()
  $("#intro").fadeOut().addClass("uk-hidden")
  $("#application-container").hide().removeClass("uk-hidden").fadeIn()
  return false
}

const completeStep = function(n) {
  return function(e) {
    e.preventDefault()
    var $child = $($('#tabList')[0].children[n])
    // $child.removeClass("uk-disabled").removeClass("uk-hidden")
    // setTimeout(function(){
    //   UIkit.tab('#tabList').show(n)
    // }, 0)
    return false
  }
}

const formInfo = computeFormInfo(User)

module.exports = function(props, children) {
  var props = props || {}

  //        <a class="uk-button uk-button-primary" href="#" on={{ click: showForm }}>Get started</a>

  return (
    <article class="uk-article">
      <h1 class="uk-article-title">Join the Jacobs Alumni Association</h1>

      <div id="intro">
        <p class="uk-text-lead">
          In order to become a member of the association, you need to provide some personal information about yourself, which will require 5 to 10 minutes of your time.
        </p>
        <p class="uk-text-lead">
          Students of the current graduating class can enjoy up to two years free membership, students of the previous graduating class can enjoy up to one years free membership and all other new alumni members enjoy 6 months free membership.
        </p>
        <div class="uk-margin">
          <p class="uk-text-lead">
            <strong>
              The registration is currently being upgraded. Please check back later today!
            </strong>
          </p>
        </div>
      </div>

      <div id="application-container" class="uk-grid uk-grid-small uk-hidden" uk-grid>
        <div class="uk-width-auto@m">
          <div>
            <ul id="tabList" class="uk-tab uk-tab-left" uk-tab="connect: #form-steps">
              <li class="uk-active"><a href="#">Step 1</a></li>
              <li class="uk-disabled uk-hidden"><a href="#">Step 2</a></li>
              <li class="uk-disabled uk-hidden"><a href="#">Step 3</a></li>
              <li class="uk-disabled uk-hidden"><a href="#">Step 4</a></li>
              <li class="uk-disabled uk-hidden"><a href="#">Submit</a></li>
              <li class="uk-disabled uk-hidden"><a href="#">Payment</a></li>
            </ul>
          </div>
        </div>
        <div class="uk-width-expand@m">
          <Form class="uk-form-horizontal" action={ formInfo.action } method={ formInfo.method }>
            <ul id="form-steps" class="uk-switcher" uk-switcher="animation: uk-animation-fade">
              <li><fieldset id="form-step-1" class="uk-fieldset uk-margin">
                <legend class="uk-legend uk-margin-bottom">
                  Step 1 of 4: General information
                  <span class="uk-text-muted"> - just the basics</span>
                </legend>

                <Input from={ formInfo.fields.general.name.firstName } />
                <Input from={ formInfo.fields.general.name.lastName } />
                <Input from={ formInfo.fields.general.sex } />
                <Input from={ formInfo.fields.general.birthday } />
                <Input from={ formInfo.fields.general.email } />
                <Input from={ formInfo.fields.general.address } />
                <Input from={ formInfo.fields.general.nationalities } />
                <Input from={ formInfo.fields.general.category } />
                <Input from={ formInfo.fields.general.avatar } />
                <div class="uk-margin">
                  <a class="uk-button uk-button-primary" href="" on={{ click: completeStep(1) }} uk-switcher-item="next">Continue</a>
                </div>
              </fieldset></li>

              <li><fieldset id="form-step-2" class="uk-fieldset uk-margin">
                <legend class="uk-legend uk-margin-bottom">
                  Step 2 of 4: Alumni data
                  <span class="uk-text-muted"> - tell us about what you did @ jacobs</span>
                </legend>

                <Input from={ formInfo.fields.alumniData.college } />
                <Input from={ formInfo.fields.alumniData.graduationClass } />
                <Input from={ formInfo.fields.alumniData.degree } />
                <Input from={ formInfo.fields.alumniData.majors } />
                <Input from={ formInfo.fields.alumniData.furtherDegrees } />
                <Input from={ formInfo.fields.alumniData.includeOnAlumniMap } />
                <div class="uk-margin">
                  <a class="uk-button uk-button-primary" href="" on={{ click: completeStep(2) }} uk-switcher-item="next">Continue</a>
                </div>
              </fieldset></li>

              <li><fieldset id="form-step-3" class="uk-fieldset uk-margin">
                <legend class="uk-legend uk-margin-bottom">
                  Step 3 of 4: Employer information
                  <span class="uk-text-muted"> - tell us what you do</span>
                </legend>

                List of Employers
                Social profiles??
                I want to be listed as contact for students who want to join my field
                <div class="uk-margin">
                  <a class="uk-button uk-button-primary" href="" on={{ click: completeStep(3) }} uk-switcher-item="next">Continue</a>
                </div>
              </fieldset></li>

              <li><fieldset id="form-step-4" class="uk-fieldset uk-margin">
                <legend class="uk-legend uk-margin-bottom">
                  Step 4 of 4: Choose your membership plan
                  <span class="uk-text-muted"> - { 'it\'s all about the network' }</span>
                </legend>

                <p class="uk-margin-remove">
                  Your contributions make the association a rapidly growing and autonomous organisation that will make a difference to our alma mater as well as our network via scholarships, direct alumni support and many more projects we have in our pipeline! Alumni membership can be deducted from (German) taxes and for further information on the contribution model just follow <a href="https://docs.google.com/presentation/d/19guVw-fBrtHWBJ9Ejq8n73C7wU7zlCMURn943qwlka4/edit?usp=sharing" target="_blank">this link</a>.
                </p>
                <p class="uk-text-bold">
                  It works because of your support!
                </p>

                <div class="uk-grid uk-grid-small uk-grid-match uk-child-width-1-3@l" uk-grid>
                  <div>
                    <div class="uk-card uk-card-default uk-card-small uk-card-body" style={{ display: 'flex', flexDirection: 'column' }}>
                      <div class="fill">
                        <div class="uk-card-header">
                          <h3 class="uk-card-title">
                            Starter <span class="uk-text-muted uk-text-small">(free)</span>
                          </h3>
                        </div>
                        <p>
                          If you are a graduate and can not afford our membership contributions but would still like to be a member
                        </p>
                        <ul>
                          <li>
                            You get this powerful membership for free for a year.
                          </li>
                          <li>
                            All the perks of the contributor membership are included in this special offer for you too!
                          </li>
                          <li>
                            Get connected with our senior alumni, be it virtually or in a city near you.
                          </li>
                        </ul>
                      </div>
                      <div class="uk-card-footer uk-padding-remove-left uk-padding-remove-right">
                        <button class="uk-button uk-button-primary uk-width-1-1" on={{ click: function(e) { e.preventDefault(); return false; } }}>
                          Select Starter Plan
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="uk-card uk-card-default uk-card-small uk-card-body" style={{ display: 'flex', flexDirection: 'column' }}>
                      <div class="fill">
                        <div class="uk-card-header">
                          <h3 class="uk-card-title">
                            Contributor <span class="uk-text-muted uk-text-small">(39,00 € / year)</span>
                          </h3>
                        </div>
                        <p>
                          Ideal for young alumni and associate members, who are part of our network! You contribute to the development and growth of the association and its alumni.
                        </p>
                        <p>
                          Get the value of this membership for the cost of just one Jacobs coffee per month:
                        </p>
                        <ul>
                          <li>
                            Stay involved with the university, other alumni and current students while finding valuable business contacts through the Alumni Network.
                          </li>
                          <li>
                            Google account with e-mail, apps and unlimited storage.
                          </li>
                          <li>
                            Find Alumni in your city, class or company on our online platform.
                          </li>
                          <li>
                            Lifelong learning and career services in collaboration with the university.
                          </li>
                          <li>
                            Job and networking opportunities.
                          </li>
                          <li>
                            Continuously growing Alumni network with homecomings, chapters and other events.
                          </li>
                          <li>
                            Relive the fun times you had with your friends at reunions on campus.
                          </li>
                        </ul>
                      </div>
                      <div class="uk-card-footer uk-padding-remove-left uk-padding-remove-right">
                        <button class="uk-button uk-button-primary uk-width-1-1" on={{ click: function(e) { e.preventDefault(); return false; } }}>
                          Select Contributor Plan
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="uk-card uk-card-default uk-card-small uk-card-body" style={{ display: 'flex', flexDirection: 'column' }}>
                      <div class="fill">
                        <div class="uk-card-header">
                          <h3 class="uk-card-title">
                            Patron <span class="uk-text-muted uk-text-small">(249,00 € / year)</span>
                          </h3>
                        </div>
                        <p>
                          Our membership for alumni and friends who have made it and want to give back even more and see the Jacobs spirit grow!
                        </p>
                        <ul>
                          <li>
                            Includes all of the benefits of the Contributor Membership.
                          </li>
                          <li>
                            Engraved Jacobs Alumni Brick and special mention.
                          </li>
                          <li>
                            Enable the Alumni Association to help young and future alumni grow and really make a difference in their lives.
                          </li>
                          <li>
                            Be one of a very few generous Alumni Patrons!
                          </li>
                        </ul>
                      </div>
                      <div class="uk-card-footer uk-padding-remove-left uk-padding-remove-right">
                        <button class="uk-button uk-button-primary uk-width-1-1" on={{ click: function(e) { e.preventDefault(); return false; } }}>
                          Select Patron Plan
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="uk-margin">
                  <a class="uk-button uk-button-primary" href="" on={{ click: completeStep(4) }} uk-switcher-item="next">Continue</a>
                </div>
              </fieldset></li>

              <li><fieldset id="form-step-5" class="uk-fieldset uk-margin">
                <legend class="uk-legend uk-margin-bottom">
                  Terms & Conditions
                </legend>

                <Input from={ formInfo.fields.agreeTermsConditions } />

                <div class="uk-margin">
                  <input class="uk-button uk-button-primary" type="submit" value="Submit your membership application" />
                </div>
              </fieldset></li>

              <li><fieldset id="form-step-6" class="uk-fieldset uk-margin">
                <legend class="uk-legend uk-margin-bottom">
                  Payment information
                </legend>

                ...Stripe form goes here...
              </fieldset></li>
            </ul>
          </Form>
        </div>
      </div>
    </article>
  )
}
