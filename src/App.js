import React from 'react'
import { AodbeButton, AdobeSearchField, AdobeCheckbox } from './components/example'

const App = () => {
  return (
    <div className="App">
      <AodbeButton onPress={() => alert('Button pressed!')}>Press me</AodbeButton>
      <AdobeSearchField
        label="Search"
        placeholder="What are you looking for?"
        onSubmit={(text) => alert(text)}
      />
      <AdobeCheckbox
        onChange={(isChecked) => ( isChecked ? console.log('click') : console.log('unclick'))}>
        Check me
      </AdobeCheckbox>
    </div>
  )
}

export default App
