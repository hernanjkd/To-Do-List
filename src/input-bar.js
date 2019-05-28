import React, { Component } from 'react'

class InputBar extends Component {

    state = {
        value: "",
        list: []
    }

    showDelete = refID => {
        this.refs[refID].style.visibility = "visible"
    }

    hideDelete = refID => {
        this.refs[refID].style.visibility = "hidden"
    }

    removeFromList = index => {
        let arr = this.state.list
        arr.splice(index, 1)
        this.setState({list: arr})
    }

    render() {
        return (
            <div>
                <input type="text" className="inputBar" 
                    onChange={ event => this.setState({value: event.target.value})}
                    onKeyPress={ event => {
                        if (event.key === 'Enter') {
                this.setState({ list: [event.target.value].concat(this.state.list) })
                            event.target.value = ""
                        }
                    }}
                 />
                    <div className="list">
                        {
                            this.state.list.map( (item, i) => {
                                return (
                                    <div key={i} className="item"
                                        onMouseOver={() => this.showDelete("x"+i)}
                                        onMouseOut={() => this.hideDelete("x"+i)}>
                                    {item}
                                    <i ref={"x"+i} 
                                        onClick={() => this.removeFromList(i)}
                                        className="fas fa-times"></i>
                                    </div>
                                )
                            })
                        }     
                    </div>
            </div>
        )
    }
}

export default InputBar;
