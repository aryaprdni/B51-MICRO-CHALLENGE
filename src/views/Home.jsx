/* eslint-disable react/no-unescaped-entities */
import ButtonComponent from "../components/ButtonComponent";

const Home = () => {
    return (
        <div style={home}>
            <h1 style={title}>Challenge Task</h1>
            <p style={description}>Let's try one by one</p>
            <ButtonComponent to='/count-duration' label='Count Duration'/>
            <ButtonComponent to='/currency-convert' label='Currency Convert'/>
            <ButtonComponent to='/mobile-legend' label='Mobile Legend'/>
            <ButtonComponent to='/tictactoe' label='Tic Tac Toe'/>
            <ButtonComponent to='/matching-card' label='Matching Card'/>
            <ButtonComponent to='/salary-calculating' label='Salary Calculating'/>
            <ButtonComponent to='/word-scramb' label='Word Scramb'/>
        </div>
    );  
}

export default Home;

const home = {
    backgroundImage: 'url("../public/images/img.jpg")',
    backgroundSize: '30%',
    backgroundPosition: 'left center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    height: '100%',
    marginLeft: '50px'
}

const title = {
    color: '#2c3e50',
    marginTop : '-15px'
}

const description = {
    color: '#7f8c8d',
    marginTop: '-10px',
    marginBottom: '50px',
    fontSize: '25px'
}
