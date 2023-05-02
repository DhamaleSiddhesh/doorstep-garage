
function GarageResponce() {
    console.log("LocalStorage",localStorage.getItem("email"));

    return (
        <>
            <div className="Registration">
                <strong>Thank You for your request, we will respond in just 2 min...</strong>
            </div>
            < div className='bodycolor'>
                <div className='Rborder '>
                    <strong>Mechanic Details...</strong>
                    <div>Name : ABC</div>
                    <div>Contact no. : </div>
                    <div>Garage name : </div>
                </div>
            </div>
        </>
    )

}
export default GarageResponce;