import "./Input.css";

function Input({ text, setText }) {
    const handleChange = (event) => {
        setText(event.target.value);
      };
    return <section id="input">
    <p class="title">Input</p>
    <textarea placeholder="Please enter your Text here..." onChange={handleChange}/>
    </section>
}

export default Input