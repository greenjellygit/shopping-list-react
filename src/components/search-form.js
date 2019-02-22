import React, {Component} from "react";
import Item from "./item";

class SearchForm extends Component {

    constructor() {
        super();
        this.state = {
            itemName: ''
        };
    }

    handleInputChange = (e) => {
        console.log(e.target.value);
        this.setState({
            itemName: e.target.value
        })
    };

    hadleFormSubmit = (e) => {
        e.preventDefault();
        console.log('form submitted');
    };

    handleItemClick = (e) => {
        console.log('item clicked');
    };

    render() {
        return (
            <div className='search-form-container'>
                <form onSubmit={(e) => this.hadleFormSubmit(e)}>
                    <input type='text' placeholder='Type offer name' onChange={this.handleInputChange}/>
                    <button type='submit'>Search</button>
                </form>
                <div className='search-form-item-list'>
                    <Item name='Super maska' price={15} imageUrl='https://e.allegroimg.com/s512/01653b/07e7baf8427e9282a58d7a37c11e'
                          item={{}} handleItemClick={this.handleItemClick}/>
                    <Item name='Cool maska' price={240} imageUrl='https://f.allegroimg.com/s512/01da90/bfd8c9e14ff395df734517700cdf'
                          item={{}} handleItemClick={this.handleItemClick}/>
                    <Item name='Nigga maska' price={8} imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTazEvaUOSE0P96xAhUA6uB5l_AztlVZnyUs0ss-Sqa8J6wW7Yh'
                          item={{}} handleItemClick={this.handleItemClick}/>
                    <Item name='Cool maska' price={240} imageUrl='https://f.allegroimg.com/s512/01da90/bfd8c9e14ff395df734517700cdf'
                          item={{}} handleItemClick={this.handleItemClick}/>
                    <Item name='Cool maska' price={240} imageUrl='https://f.allegroimg.com/s512/01da90/bfd8c9e14ff395df734517700cdf'
                          item={{}} handleItemClick={this.handleItemClick}/>
                    <Item name='Nigga maska' price={8} imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTazEvaUOSE0P96xAhUA6uB5l_AztlVZnyUs0ss-Sqa8J6wW7Yh'
                          item={{}} handleItemClick={this.handleItemClick}/>
                    <Item name='Nigga maska' price={8} imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTazEvaUOSE0P96xAhUA6uB5l_AztlVZnyUs0ss-Sqa8J6wW7Yh'
                          item={{}} handleItemClick={this.handleItemClick}/>
                    <Item name='Cool maska' price={240} imageUrl='https://f.allegroimg.com/s512/01da90/bfd8c9e14ff395df734517700cdf'
                          item={{}} handleItemClick={this.handleItemClick}/>
                </div>
            </div>
        )
    }
}

export default SearchForm;
