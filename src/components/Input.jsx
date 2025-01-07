import "./Input.css";

function Input({ text, setText }) {
    const handleChange = (event) => {
        setText(event.target.value);
      };
    return <section id="input">
    <p>Input</p>
    <textarea onChange={handleChange}/>
    </section>
}

export default Input