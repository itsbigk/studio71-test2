import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import './App.css'

class App extends React.Component {
  state = {
    items: []
  }

  componentDidMount () {
    fetch('http://assets.studio71.io/test/news_feed.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          items: data.items
        })
      })
  }

  render () {
    const { items } = this.state

    const cards = items.map((item, index) => (
      <div className='card-wrapper' key={index}>
        <Card key={index}>
          <Image style={{height: '260px'}} src={item.thumbnail} />
          <Card.Content>
            <Card.Header>
              {item.title}
            </Card.Header>
            <Card.Description>
              {item.message}
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
    ))

    return items.length > 0 && (
      <div className='cards-wrapper'>
        {cards}
      </div>
    )
  }
}

export default App
