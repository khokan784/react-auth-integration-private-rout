import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./Providers/AuthProvider";
import { signInWithPopup } from "firebase/auth";
import { auth } from "./firebase.init";

const Login = () => {
    const navigate = useNavigate()

    const { signInUser, signInWithGoogle, twitterProvider,gitHubProvider } = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        signInUser(email, password)
            .then(result => {
                console.log(result)
                e.target.reset()
                navigate('/')
            })
            .catch(error => {
                console.log('ERROR', error)
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                navigate('/')
            })
            .catch(error => { 
                console.log('ERROR',error.message)
            })
    }
    
    const handleTwitterSignIn = () => {
        signInWithPopup(auth,twitterProvider)
            .then(result => {
                console.log(result)
                navigate('/')
            })
            .catch(error => { 
                console.log('ERROR',error.message)
            })
    }
    const handleGithubSignIn = () => {
        signInWithPopup(auth,gitHubProvider)
            .then(result => {
                console.log(result.user)
                navigate('/')
            })
            .catch(error => { 
                console.log('ERROR',error.message)
            })
    }

    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className="text-center mx-4 p-4">New to this website? please <Link to='/register'>Register</Link></p>
                    <p className="text-center">
                        <button onClick={handleGoogleSignIn} className="btn">google sign in</button>
                    </p>
                    <p className="text-center">
                        <button onClick={handleTwitterSignIn} className="btn">Twitter sign in</button>
                        <button onClick={handleGithubSignIn} className="btn">Github sign in</button>

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;