import React from 'react'

import './ShareList.css'
const mocks=[{name:'The Musician',img:'https://images.unsplash.com/photo-1556449895-a33c9dba33dd?auto=format&fit=crop&w=934&q=80'},
{name:'The Gamer',img:'https://images.unsplash.com/photo-1554213352-5ffe6534af08?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=932&q=80'},
{name:'The Fashionista',img:'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80'},
{name:'The Foodie',img:'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'},
{name:'The Sport Pro',img:'https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=582&q=80'}]
const ShareList=(props)=>{
    return(
        <ul className="showList_container">
            { mocks.map((item,index)=>{
                return(
                 <div key={index}  className="shareList_items">
                    <div  className="showList_item" style={{'backgroundImage':`url(${item.img})`}}></div>
                    {item.name}
                 </div>)
            })}
        </ul>
       
    )
}
export default ShareList