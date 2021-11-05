import React from 'react'
import './main.css'
export default function Main() {
    return (
        <main>
            <div className="filme-principal">
                <div className="container">
                    <h3 className="titulo">Confira as fotos do dia</h3>
                    <p className="descricao">No momento as fotos esão sendo recolhidas de forma manual, o objetivo é implementar uma API para raspagem de dados, a fim de coletar as fotos do dia.<br/>Fonte:Nasa Gov</p>
                    <div className="botoes">
                        <button role="button" className="botao">
                            <i className="fas fa-play"></i>
                            <a href="https://images.nasa.gov/search-results?q=station&page=1&media=image&yearStart=1920&yearEnd=2021">VER AGORA</a>
                        </button>
                        <button role="button" className="botao">
                            <i className="fas fa-info-circle"></i>
                            <a href="https://images.nasa.gov/">MAIS INFORMAÇÕES</a>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}
