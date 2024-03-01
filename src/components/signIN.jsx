import googleIcon from '../assets/google.svg';
import githubIcon from '../assets/githublogo.svg';

const SignIn = () => {
    return (
        <div className="mainContainer">
            <div className="container">
                <div className="leftSide">
                    <img className="logo" src="" alt="" />
                    <img className="illustration" src="" alt="" />
                    <h2>Online Community For 
                    Front-end Developers</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.</p>
                </div>
                <div className="rightSide">
                    <h2>Join & Connect the Fastest Growing Online Community</h2>
                    <div className="rightsideButtons">
                        <div>
                            <img src={googleIcon} alt="" />
                        </div>
                        <div><img src={githubIcon} alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;