import Header from "./components/Header/Header";
import Display from "./components/Display/Display";
import Footer from "./components/Footer/Footer";
import {Component} from "react";
import Modal from "./components/Modal/Modal";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data : [],
            isShowModal: false,
            navState: 'products'

        }
    }
    fetchData = (title) => {
        fetch(`https://fakestoreapi.com/${title}`)
            .then(res=>res.json())
            .then(json => this.setState({
                    navState: title,
                    data : json
                }))
                .catch(e => {
                  this.setState({
                      data: [],
                      isShowModal: false,
                      navState: 'products'
                  })
                })
              }

    handleShowModal = () => {
        this.setState({
            isShowModal: true
        })
    }

    componentDidMount() {
        this.fetchData("products");
    }

    render(){
        return (
            <div className="flex flex-col h-full justify-between">
                <Header changeNav={this.fetchData}/>
                <Display heading={this.state}/>
                <Footer/>
                {this.state.isShowModal && <Modal changeModal={this.fetchData} modal={this.state} title={this.state.navState}/>}
                <button onClick={this.handleShowModal} className="fixed right-2 top-2 py-4 px-6 border border-green-900 rounded-full">+</button>
            </div>
        );
    }
}

export default App;
