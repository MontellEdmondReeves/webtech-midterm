function Contact(){
    return<div>
    <form onSubmit={(e)=>{e.preventDefault()}} className="form">
        <div><label htmlFor="name">Name</label><input type="text" id="name" required /></div>
        <div><label htmlFor="email">email</label><input type="email" id="email" required/></div>
        <div><label htmlFor="message">Message</label><textarea name="message" id="message"></textarea></div>
        <button type="submit">Submit</button>
    </form>
    </div>
}
export default Contact;