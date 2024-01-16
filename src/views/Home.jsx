/* eslint-disable react/no-unescaped-entities */
import ButtonComponent from "../components/ButtonComponent";

const Home = () => {
    return (
        <div style={home}>
            <h1 style={title}>Challenge Task</h1>
            <p style={description}>Let's try one by one</p>
            <ButtonComponent to='/count-duration' label='Count Duration' color='#3498db'/>
            <ButtonComponent to='/currency-convert' label='Currency Convert' color='#2ecc71'/>
            <ButtonComponent to='/matching-card' label='Matching Card' color='#e74c3c'/>
            <ButtonComponent to='/mobile-legend' label='Mobile Legend' color='#f39c12'/>
            <ButtonComponent to='/salary-calculating' label='Salary Calculating' color='#9b59b6'/>
            <ButtonComponent to='/tictactoe' label='Tic Tac Toe' color='#27ae60'/>
        </div>
    );  
}

export default Home;

const home = {
    backgroundImage: 'url("../public/img/img.jpg")',
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
    marginTop: '40px',
}

const description = {
    color: '#7f8c8d',
    marginTop: '-10px',
    marginBottom: '50px',
    fontSize: '25px'
}
