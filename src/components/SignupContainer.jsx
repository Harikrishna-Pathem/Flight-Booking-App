import styles from "./SignupContainer.module.css";

function SignupContainer(){
    return <>

        <div className={`container mt-5 p-3 ${styles.box}`}>
            <div className="row mb-5 justify-content-center">
                <div className={`col-6 ${styles.text}`}>
                    <h2 className="text-center mt-3">Want to recieve Exculsive Discounts and Updates Stright to Inbox ?</h2>
                </div>
            </div>
            <div className="row my-5 justify-content-center">
                <div className="col-3">
                    <input type="email" class="form-control" placeholder="Email" />
                </div>
                <div className={`col-2 ${styles.button}`}>
                    <button className="btn btn-primary w-100">SignMe Up</button>
                </div>
            </div>
        </div>
    </>
}

export default SignupContainer