import React from 'react'
import {Lawmakers} from '../Data/lawmakers'
import List from './List'



const App = ()=>{
    return(
        <div className='ui inverted segment container'>
           
            <List Lawmakers={Lawmakers}/>
        </div>
    )
}

export default App