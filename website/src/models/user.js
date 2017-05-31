
const c = require('csam/lib/component')

const countries = require('./countries')
const majors = require('./majors')

const Field = function(o) {
  return Object.assign({ __field__: true }, o)
}

o = {
  endpoint: '//api.dev.jacobs-alumni.de/users',
  idField: '_id',
  fields: {
    general: {
      name: {
        firstName: Field({
          name: 'name.firstName',
          type: 'text',
          label: 'First name',
          placeholder: 'First name',
          validators: [

          ]
        }),
        lastName: Field({
          name: 'name.lastName',
          type: 'text',
          label: 'Last name',
          placeholder: 'Last name',
          validators: [

          ]
        })
      },
      sex: Field({
        name: 'sex',
        type: 'radioGroup',
        label: 'Sex',
        placeholder: 'Sex',
        options: {
          male: 'male',
          female: 'female',
          other: 'other',
          '': 'prefer not to say'
        },
        validators: [

        ]
      }),
      email: Field({
        name: 'email',
        type: 'email',
        label: 'Email',
        placeholder: 'Your e-mail address',
        validators: [

        ]
      }),
      birthday: Field({
        name: 'birthday',
        type: 'date',
        label: 'Birthday',
        placeholder: 'Your birthday',
        validators: [

        ]
      }),
      address: Field({
        name: 'address',
        type: 'longText',
        label: 'Address',
        placeholder: 'Your private home address',
        validators: [

        ]
      }),
      nationalities: Field({
        name: 'nationalities',
        type: 'select',
        label: 'Nationalities',
        placeholder: 'Your nationality / nationalities',
        multiple: true,
        options: countries,
        validators: [
        ]
      }),
      category: Field({
        name: 'category',
        type: 'select',
        label: 'Category',
        placeholder: '',
        multiple: false,
        options: {
          alumni: 'Alumni (former student)',
          faculty: 'Faculty',
          staff: 'Staff',
          hostFamily: 'Host family',
          other: 'Friend of the Association',
        },
        validators: [

        ]
      }),
      avatar: Field({
        name: 'avatar',
        type: 'file',
        label: 'Profile picture',
        placeholder: 'Your profile picture',
        validators: [
        ]
      })
    },
    alumniData: {
      college: Field({
        name: 'college',
        type: 'select',
        label: 'College',
        placeholder: 'College',
        multiple: true,
        options: {
          krupp: 'Krupp',
          mercator: 'Mercator',
          ciii: 'College III',
          nordmetall: 'Nordmetall'
        },
        validators: [
        ]
      }),
      degree: Field({
        name: 'degree',
        type: 'select',
        label: 'Degree',
        placeholder: 'Degree',
        multiple: false,
        options: {
          ba: 'B.A.',
          bsc: 'B.Sc.',
          ma: 'M.A.',
          msc: 'M.Sc.',
          phd: 'Ph.D.',
          mba: 'MBA',
          'n/a': 'n/a'
        },
        validators: [
        ]
      }),
      graduationClass: Field({
        name: 'graduationClass',
        type: 'select',
        label: 'Class (first graduation)',
        placeholder: 'Class (first graduation)',
        multiple: false,
        options: {
          2004: 2004,
          2005: 2005,
          2006: 2006,
          2007: 2007,
          2008: 2008,
          2009: 2009,
          2010: 2010,
          2011: 2011,
          2012: 2012,
          2013: 2013,
          2014: 2014,
          2015: 2015,
          2016: 2016,
          2017: 2017
        },
        validators: [
        ]
      }),
      majors: Field({
        name: 'majors',
        type: 'select',
        label: 'Majors',
        placeholder: 'Majors',
        multiple: true,
        options: majors,
        validators: [
        ]
      }),
      furtherDegrees: Field({
        name: 'furtherDegrees',
        type: 'text',
        label: 'Further degrees',
        placeholder: 'Further degrees (to be changed)',
        validators: [
        ]
      }),
      includeOnAlumniMap: Field({
        name: 'includeOnAlumniMap',
        type: 'checkbox',
        label: 'Include me on the Alumni Map',
        placeholder: '',
        validators: [

        ],
        notes: [
          'Please include me on the global alumni map, which will be visible to registered alumni graduates (former students) only, so I can enjoy all functions of AlmaLink and find Alumni in my city or company. This feature is currently in the works.'
        ]
      })
    },
    employerInformation: {},
    description: Field({
      name: 'description',
      type: 'longText',
      label: 'Description',
      placeholder: 'Description',
      validators: [

      ]
    }),
    agreeTermsConditions: Field({
      name: 'agreeTermsConditions',
      type: 'checkbox',
      label: 'Agree to Terms & Conditions',
      placeholder: '',
      validators: [

      ],
      notes: [(
        <div>
          <p>
            By clicking the “Submit your membership application” button, you give your consent for Jacobs University Bremen Alumni Association e.V. (“JUBAA”) to save and use the data you disclose in connection with your user account (see list of data in the Privacy Policy)
          </p>
          <ul>
            <li>
              to ensure that you can be found through the website’s search function by other registered users (only alumni graduates, not associate members), using your work and home location (geolocation) if necessary,
            </li>
            <li>
              and to enable other registered users to contact you for networking purposes.
            </li>
          </ul>
          <p>
            You further give your consent for both JUBAA and Jacobs University Bremen to save and use this data
          </p>
          <ul>
            <li>
              to contact you themselves for networking purposes
            </li>
            <li>
              and to inform you by e-mail or post about events, surveys, fundraising campaigns and other subjects relating to Jacobs University Bremen.
            </li>
          </ul>
          <p>
            You give your consent for JUBAA to forward your data - with the exception of your payment data – to Jacobs University Bremen for that purpose.
          </p>
        </div>
      )]
    })
  }
}

// console.log(o)

module.exports = o
