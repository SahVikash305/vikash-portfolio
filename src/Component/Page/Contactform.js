import React from 'react'

function Contactform() {
    return (
        <div>
            <div className='contact-form'>

<div className='send'><h1>Send mail to me</h1></div>
<form class="row g-3 forms">
    <div class="col-md-4 ">
        <label for="inputEmail4" class="form-label">Name</label>
        <input type="text" className="form-control input " id="inputEmail4" />
    </div>
    <div class="col-md-4">
        <label for="inputState" class="form-label">You are</label>
        <select id="inputState" class="form-select">
            <option selected>Choose...</option>
            <option>Student</option>
            <option>Recruiter</option>
            <option>Client</option>
            <option>Other</option>
        </select>
    </div>
    <div class="col-md-8">
        <label for="inputEmail4" class="form-label">Email</label>
        <input type="email" className="form-control input" id="inputEmail4" />
    </div>
    <div class="col-md-8">
        <label for="inputEmail4" class="form-label">Message</label>
        <textarea type="text" rows={5} className="form-control input" id="inputEmail4" />
    </div>
    <div class="col-12">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" />
            <label class="form-check-label" for="gridCheck">
                Check me out
            </label>
        </div>
    </div>
    <div className='send-div'>  <button type="submit" class="btn btn-primary sendemail">Send Email</button></div>


</form>
</div>
        </div>
    )
}

export default Contactform
