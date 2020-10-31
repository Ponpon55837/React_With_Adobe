import React from 'react'
import { AodbeButton, AdobeSearchField } from './components/example'

const App = () => {
  return (
    <div className="App">
      <AodbeButton onPress={() => alert('Button pressed!')}>Press me</AodbeButton>
      <AdobeSearchField
        label="Search"
        placeholder="What are you looking for?"
        onSubmit={(text) => alert(text)}
      />
    </div>
  )
}

export default App
