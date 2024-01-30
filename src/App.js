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
        }
    }
    fetchData = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json => {
                this.setState({
                    data : json
                })
            })
    }

    handleShowModal = () => {
        this.setState({
            isShowModal: true
        })
    }

    componentDidMount() {
        this.fetchData();
    }

    render(){
        return (
            <div className="flex flex-col h-full justify-between">
                <Header/>
                <Display data={this.state.data}/>
                <Footer/>
                {this.state.isShowModal && <Modal />}
                <button onClick={this.handleShowModal} className="fixed right-2 top-2 py-4 px-6 border border-green-900 rounded-full">+</button>
            </div>
        );
    }
}

export default App;
