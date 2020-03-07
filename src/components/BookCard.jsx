import React from "react";
import {Card, Icon, Image, Button} from 'semantic-ui-react'

const Book = (props) => {
  const {title, author, image, price, addToCart, addedCount} = props;
  return (
    <Card>
      <Image src={image}/>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span className='date'>{author}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <b>{price}</b>
        <Icon name='rub'/>
      </Card.Content>
      <Button onClick={addToCart.bind(this, props)}>
        Добавить в корзину &nbsp;{addedCount > 0 && `(${addedCount})`}
      </Button>
    </Card>
  )
};

export default Book;