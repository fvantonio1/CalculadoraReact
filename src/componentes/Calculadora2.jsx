// Antonio Fernandes Valadares 11711ECP015

import React from 'react'
import Display from './Display.jsx'
import './Button.css'
import './Calculadora.css'
import './Display.css'

const initialState = {
    numero_armazenado : '',
    numero_atual : '',
    operacao : '',
}

export default class Calculadora extends React.Component {
    constructor(props){
        super(props);

        this.state = {...initialState}
    }


    recebeDigito = (n) => {
        if(this.state.operacao == '='){
            this.setState({
                numero_atual : '' + n,
                operacao : ''
            })
            return
        }
        else  
            if(n == '.' && this.state.numero_atual.includes('.'))
                return        

            this.setState({
                numero_atual : this.state.numero_atual + n
            })        
    }

    recebeOp = (op) => {
        if(this.state.operacao == '' || this.state.operacao == '=')
            this.setState({
                operacao : op,
                numero_armazenado : this.state.numero_atual,
                numero_atual : ''
            })
        else
            if(this.state.operacao == '/')(
                this.setState({
                    operacao : op,
                    numero_armazenado : this.state.numero_armazenado / this.state.numero_atual,
                    numero_atual : ''
                })
            )
            if(this.state.operacao == '*')(
                this.setState({
                    operacao : op,
                    numero_armazenado : this.state.numero_armazenado * this.state.numero_atual,
                    numero_atual : ''
                })
            )
            if(this.state.operacao == '+')(
                this.setState({
                    operacao : op,
                    numero_armazenado : parseFloat(this.state.numero_armazenado) + parseFloat(this.state.numero_atual),
                    numero_atual : '',
                })
            )
            if(this.state.operacao == '-')(
                this.setState({
                    operacao : op,
                    numero_armazenado : this.state.numero_armazenado - this.state.numero_atual,
                    numero_atual : '',
                })
            )
    }

    recebeIgual = () => {
        if(this.state.operacao == '/')(
            this.setState({
                operacao : '=',
                numero_armazenado : '',
                numero_atual : this.state.numero_armazenado / this.state.numero_atual,
            })
        )
        if(this.state.operacao == '+')(
            this.setState({
                operacao : '=',
                numero_armazenado : '',
                numero_atual : parseFloat(this.state.numero_armazenado) + parseFloat(this.state.numero_atual),
            })
        )
        if(this.state.operacao == '*')(
            this.setState({
                operacao : '=',
                numero_armazenado : '',
                numero_atual : this.state.numero_armazenado * this.state.numero_atual,
            })
        )
        if(this.state.operacao == '-')(
            this.setState({
                operacao : '=',
                numero_armazenado : '',
                numero_atual : this.state.numero_armazenado - this.state.numero_atual,
            })
        )
    }

    clean = () => {
        this.setState({...initialState})
    }

    render() {
        return(
            <div className='calculadora'>
                <Display value={this.state.numero_atual} />
                <button onClick={() => this.recebeDigito(7)}  className='button'> 7 </button>
                <button onClick={() => this.recebeDigito(8)}  className='button'> 8 </button>
                <button onClick={() => this.recebeDigito(9)}  className='button'> 9 </button>
                <button onClick={() => this.recebeOp('/')}   className='button'> / </button> 
                <button onClick={() => this.recebeDigito(4)}  className='button'> 4 </button>
                <button onClick={() => this.recebeDigito(5)}  className='button'> 5 </button>
                <button onClick={() => this.recebeDigito(6)}  className='button'> 6 </button>
                <button onClick={() => this.recebeOp('*')}   className='button'> * </button>
                <button onClick={() => this.recebeDigito(1)}  className='button'> 1 </button>
                <button onClick={() => this.recebeDigito(2)}  className='button'> 2 </button>
                <button onClick={() => this.recebeDigito(3)}  className='button'> 3 </button>
                <button onClick={() => this.recebeOp('-')}   className='button'> - </button>
                <button onClick={() => this.recebeDigito(0)}  className='button'> 0 </button>
                <button onClick={() => this.recebeDigito('.')}  className='button'> . </button>
                <button onClick={() => this.recebeIgual()}   className='button'> = </button>
                <button onClick={() => this.recebeOp('+')}   className='button'> + </button>
                <button onClick={() => this.clean()}   className='button'> C </button>
                
            </div>
           
        )
    }
}