import React from 'react'
import Navbar from './layoutComponents/Navbar'
import Content from './layoutComponents/Content'
import Footer from './layoutComponents/Footer'
import { AodbeButton, AdobeSearchField, AdobeCheckbox } from './components/example'

const App = () => {
  return (
    <>
      <Navbar />
      <Content>
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
      </Content>
      <Footer />
    </>
  )
}

export default App
