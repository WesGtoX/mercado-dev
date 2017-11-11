import React, { Component } from 'react'

class NovoAnuncio extends Component {
    render() {
        return(
            <div>
                <div className='container' style={{paddingTop: '120px'}}>
                    <h1>Novo Anúncio</h1>
                    <form onSubmit={null}>
                        <div className='form-group'>
                            <label htmlFor='nome'>Nome</label>
                            <input type='text' className='form-control' id='nome' placeholder='Nome' />
                        </div>
                    </form>                    
                </div>
                
            </div>
        )
    }
}
export default NovoAnuncio