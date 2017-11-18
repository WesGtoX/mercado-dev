import React from 'react'
import { Link, Route } from 'react-router-dom'

import HeaderInterno from './HeaderInterno'
import Categoria from './Categoria'
import Anuncio from './Anuncio'

const Categorias = (props) => {
    return(
        <div>
            <HeaderInterno />
            <div className='container' style={{paddingTop: '120px'}}>
                <h1>Categorias</h1>
                <div className="row">
                    <div className="col-lg-4">
                        <ul>
                        {
                            props.categorias.map(
                                cat => {
                                    return(
                                        <li key={cat.url}>
                                            <Link to={`/categorias/${cat.url}`}>{cat.categoria}</Link>
                                        </li>
                                    )
                                }
                            )
                        }
                        </ul>
                    </div>
                    <div className="col-lg-8">
                        <Route path='/categorias/:urlCategoria' exact component={Categoria} />
                        <Route path='/categorias/:urlCategoria/:idAnuncio' render={(props) => <Anuncio {...props} />} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categorias