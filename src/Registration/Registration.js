import './Registration.css'
function Registration() {
    return (
        < div className='bodycolor'>
            <div className='Registration mt-3'>Register for further process</div>
            <div className='Rborder'>
                <form className='px-0'>
                    <label>Full Name : </label>
                    <input type="text" name="FullName" size="15" placeholder='Enter Full Name' className='px-2 box' /><br /><br />

                    Email :
                    <input type='email' id='email' name='email' placeholder='abc12@gmail.com' className='px-2 box' /><br /><br />
                    Phone no :
                    <input type='text' name='phone' size={10} placeholder='**********' className='px-2 box' /><br /><br />

                    Address : <br />
                    <textarea cols={30} rows={3} className='box' ></textarea><br /><br />

                    {/* username :
                    <input type='text' name='username' size={15} placeholder='abc123' className='px-2 box' /><br /><br />

                    Password :
                    <input type='password' id='pass' name='pass' placeholder='******' className='box' /><br /><br /> */}
                    <button type='button'className='mx-3 Rbutton'>Submit</button>
                    <button type='button'className='mx-3 Rbutton'>Reset</button>
                </form>
            </div>
        </div>


    )
}
export default Registration;