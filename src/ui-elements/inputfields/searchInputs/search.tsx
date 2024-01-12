/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ChangeEvent } from 'react'
import './search.scss'
import search_icon from '../../../assets/icons/search_icon.svg'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/reducers'
import Button from '../../buttons/buttons'

type SearchProps = {
  refetch?: () => void,
  text?:string,
  onChange?:(e: ChangeEvent<HTMLInputElement>)=> void,
  
}

const Search:React.FC<SearchProps> = ({text,onChange, refetch}) => {

  const {device} = useSelector((state: RootState) => state.windowSize)
  
   
  return (
     <div className={`wrapping ${onChange ? "" : "heading"}`}>
        <div className="CA-text">
          <h1 className={`text ${device}`}>{text}</h1>
        </div>
        {onChange ? 
        <div>
          {refetch ?
          <div className='refetch_container'>
            <Button edges='round' text='Refresh' onClick={refetch}></Button>
          </div> 
          : null}

          <div className="search_container">
              <input
              onChange={onChange}  
              className="search_input" 
              type="text" 
              placeholder="Search..." 
              />
              <a href="#" className="search_btn">
                <img className="search_icon" src={search_icon} alt='search animation'/>
              </a>
          </div>
        </div>
          :
          null
        }
    </div>
    
  )
}

export default Search
     


      