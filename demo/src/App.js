import React, { Component } from 'react'
import { IntlProvider, addLocaleData } from 'react-intl'
import ptLocaleData from 'react-intl/locale-data/pt'
import Button from '@vtex/styleguide/lib/Button'
import ptTranslations from '../../src/locales/pt'
import ProfileContainer from '../../src/ProfileContainer'
import ProfileRules from '../../src/ProfileRules'
import ProfileSummary from './ProfileSummary'
import 'vtex-tachyons'

class App extends Component {
  constructor(props) {
    super(props)
    addLocaleData(ptLocaleData)

    this.state = {
      profile: null,
      profileCountry: 'BRA',
      submitted: false,
    }
  }

  toggleLocale = () => {
    this.setState(prevState => ({
      profileCountry: prevState.profileCountry === 'BRA' ? 'USA' : 'BRA',
    }))
  }

  handleSubmit = ({ valid, profile }) => {
    if (!valid) return
    this.setState({ profile, submitted: true })
  }

  render() {
    const { profile, profileCountry, submitted } = this.state

    return (
      <div className="pa4">
        <h3>ProfileForm demo:</h3>
        {!submitted && (
          <div className="mb6">
            <Button
              size="small"
              variation="secondary"
              onClick={this.toggleLocale}
            >
              Set rules to {profileCountry === 'BRA' ? 'USA' : 'BRA'}
            </Button>
          </div>
        )}
        <IntlProvider locale={'pt-BR'} messages={ptTranslations}>
          <div>
            {!submitted && (
              <ProfileRules
                key={profileCountry}
                country={profileCountry}
                fetch={country => import('../../src/rules/' + country)}
              >
                <ProfileContainer
                  profile={profile}
                  onSubmit={this.handleSubmit}
                />
              </ProfileRules>
            )}
            {submitted && <ProfileSummary profile={profile} />}
          </div>
        </IntlProvider>
      </div>
    )
  }
}

export default App
