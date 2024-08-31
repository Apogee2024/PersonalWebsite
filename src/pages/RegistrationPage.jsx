import Register from "../components/RegistrationInfo";
function RegistrationPage() {
    return(
        <div>
        <h2>Register here to receive our promotions!</h2>
        <p>Enter your name and email address to receive our promotions in your inbox</p>
        {Register()}
        </div>
    )
}

export default RegistrationPage;