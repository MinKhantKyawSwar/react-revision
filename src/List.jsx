import React from 'react'
import PropTypes from 'prop-types'

const List = (props) => {
    const itemList = props.items;
    const category = props.category;

    const lowCalItem = itemList.filter(item => item.calories < 100)

    const listItems = itemList.map(item => <li key={item.id}>
                                                {item.name} : &nbsp;
                                                {item.calories}
                                                </li>)
   
    return (<>
    <h3>{category}</h3>
    <ol>{listItems}</ol>
    </>
  )
}
List.propsTypes ={
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                              name: PropTypes.string,
                                                category: PropTypes.string  
    }))
}

List.defaultProps = {
    category : "Category",
    items : [],
}

export default List