import React from 'react'
import Search from './Search'
import FuzzySearch from 'fuzzy-search'

class List extends React.Component {
    state = { searchTerm: null }

    search = (term) => {
        this.setState({
            searchTerm: term
        })
    }

    renderList() {
        var List = []
        var { Lawmakers } = this.props
        var Searcher = new FuzzySearch(Lawmakers, ['name'])
        if (this.state.searchTerm !== null) {
            List = Searcher.search(this.state.searchTerm)
        } else {
            List = Lawmakers
        }
        return List.map(lawmaker => {
            return (
                <tbody>
                    <tr>
                        <td data-label='Name'>{lawmaker.name}</td>
                        <td data-label='Portfolio'>{lawmaker.Portfolio}</td>
                        <td data-label='Phone Number'>{lawmaker.Phone}</td>
                        <td data-label='Email'><a className='ui red button' href={`mailto:${lawmaker.Email}?Subject=OkadaAndKekeBan`}>Send Mail</a></td>
                    </tr>
                </tbody>
            )
        })
    }

    render() {
        return (
            <div>
                <div>
                    <Search search={this.search} />
                </div >
                <div className="ui inverted relaxed divided list">
                    <table className='ui celled table'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Portfolio</th>
                                <th>Phone Number</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        {this.renderList()}
                    </table>
                </div>
            </div>
        )
    }

}
export default List