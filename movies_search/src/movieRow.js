import React from 'react'

class movieRow extends React.Component {
    render() {
        return <table key={this.props.movie.id} className="bodyBox">
            <tbody>
            <tr>
                <td>
                    <img className="movieImages" src={this.props.movie.poster_src} width="140px" alt="poster"/>
                </td>
                <td>
                    <h2>{this.props.movie.title}</h2>
                    <p>{this.props.movie.overview}</p>
                </td>
            </tr>
            </tbody>
        </table>
    }
}

export default movieRow