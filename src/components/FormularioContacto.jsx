export default function FormularioContacto() {
  return (
    <form action='https://formspree.io/f/{tu-id}' method='POST'>
      <input type='text' name='nombre' placeholder='Tu nombre' required />
      <input type='email' name='email' placeholder='Tu email' required />
      <textarea name='mensaje' placeholder='Tu mensaje' required></textarea>
      <button type='submit'>Enviar</button>
    </form>
  );
}