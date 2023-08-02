import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import imagen1 from '../assets/img/imagen1.jpg'
import imagen2 from '../assets/img/imagen2.jpg'
import imagen3 from '../assets/img/imagen3.jpg'
import imagen4 from '../assets/img/imagen4.jpg'
import imagen5 from '../assets/img/imagen5.jpg'
import imagen6 from '../assets/img/imagen6.jpg'
import imagen7 from '../assets/img/imagen7.jpg'
import imagen8 from '../assets/img/imagen8.jpg'
import { GiMusicalNotes } from 'react-icons/gi'
import '../Style/search.css';


const Searchf = () => {

    const des = [
        {
            id: 1,
            img: imagen1,
            name: 'la musica es el alma',
            p2: 'jvbjxfbfjvsdjnvjsdnvjnfdjvnjfd',
            s2: '3.6'
        },
        {
            id: 2,
            img: imagen2,
            name: 'la musica es el alma',
            p2: 'jvbjxfbfjvsdjnvjsdnvjnfdjvnjfd',
            s2: '3.6'
        },
        {
            id: 3,
            img: imagen3,
            name: 'la musica es el alma',
            p2: 'jvbjxfbfjvsdjnvjsdnvjnfdjvnjfd',
            s2: '4.4'
        },
        {
            id: 4,
            img: imagen4,
            name: 'la musica es el alma',
            p2: 'jvbjxfbfjvsdjnvjsdnvjnfdjvnjfd',
            s2: '3.6'
        },
        {
            id: 5,
            img: imagen5,
            name: 'la musica es el alma',
            p2: 'jvbjxfbfjvsdjnvjsdnvjnfdjvnjfd',
            s2: '3.6'
        },
        {
            id: 6,
            img: imagen6,
            name: 'la musica es el alma',
            p2: 'jvbjxfbfjvsdjnvjsdnvjnfdjvnjfd',
            s2: '3.6'
        },
        {
            id: 7,
            img: imagen7,
            name: 'la musica es el alma',
            p2: 'jvbjxfbfjvsdjnvjsdnvjnfdjvnjfd',
            s2: '3.6'
        },
        {
            id: 8,
            img: imagen8,
            name: 'la musica es el alma',
            p2: 'jvbjxfbfjvsdjnvjsdnvjnfdjvnjfd',
            s2: '3.5'
        },
    ]



    return (
        <div className='destinate section container'>
            <div className='secontainer'>
                <div className='text'>
                    <span className='redtext'>EPLORE NOW</span>
                    <h3 className='h'>find your song that inspires you</h3>
                    <p className='p'>look for something that comes from your heart to be able to sing it at the top of your lungs</p>
                </div>

                <div className='searchField'>
                    <div className='inputField flex'>
                        <input type="text" placeholder="Soung" />
                        <BiSearchAlt className='icon' />
                    </div>
                </div>

                <div className='secMenu'>
                    <ul className='flex'>
                        <li className='active l1'>All</li>
                        <li className='active l1'>Recommended</li>
                        <li className='l1'>Beach</li>
                        <li className='l1'>Park</li>
                        <li className='l1'>Nature</li>
                        <li className='l1'>Mountain</li>
                    </ul>
                </div>

                <div className='destina'>
                    {des.map(dest => {
                        return (
                            <div className='singledestina' key={dest.id}>
                                <div className='imgcdiv'>
                                    <img src={dest.img} alt='hola' className='imgc' />
                                    <div className='descInfo'>
                                        <div className='text'>
                                            <span className='name'><GiMusicalNotes className='icon2' />{dest.name}</span>
                                            <p className='flex p2'>{dest.p2}</p>
                                        </div>
                                        
                                        <span className='s1'>
                                            {dest.s2}
                                        </span>

                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default Searchf
