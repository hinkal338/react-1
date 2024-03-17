const Contact = () => {
  return (
    <div>
      <h1 className="text-[30px] font-bold m-4"> Contact Us</h1>
      <form>
        <input
          className="border border-black m-2 p-2"
          placeholder="name"
        ></input>
        <input
          className="border border-black m-2 p-2"
          placeholder="message"
        ></input>
        <button className="bg-black text-white rounded-lg m-2 p-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
