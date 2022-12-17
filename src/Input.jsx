


function Input() {
    let text 
      const handleGet=(e)=>{
        console.log(e.target.value)
        text = e.target.value    
      }
      const handleClick=(e)=>{
        e.preventDefault();
        console.log(text)
      }
    
    
      return (
        <div>
          <form>
            <input type="text" name="" id=""  onChange={handleGet}/>
            <button onClick={handleClick} onSubmit={handleClick}>Добавить в корзину</button>
          </form>
        </div>
      )
    }
    
    export default Input