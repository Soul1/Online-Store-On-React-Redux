import React from "react";
import {Card, Icon, Image,} from 'semantic-ui-react'

const Book = ({title, author, image, price}) => {
  return (
    <Card>
      <Image src={image} wrapped ui={false}/>
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
    </Card>
  )
};

export default Book;