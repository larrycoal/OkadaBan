import React from 'react'


class Search extends React.Component {


    searchList() {
        return (
            <div className="ui grid">
                <div className="ten wide column">
                    #OKADABAN
                </div>
                <div className="ui mini form six wide column">
                    <div className="field">
                        <form>
                            <input type='text' placeholder='Search list' onChange={(e)=>this.props.search(e.target.value)} />
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.searchList()}
            </div>
        )
    }
}

export default Search