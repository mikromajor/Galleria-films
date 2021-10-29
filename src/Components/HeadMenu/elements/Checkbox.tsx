import './Checkbox.css';

const Checkbox=({label,handlerGenre}:{label:string ;handlerGenre:(a:any, b:boolean)=>void})=>{
  
  return (
    <div className='rowsMarg'>
     <input 
     type="checkbox" 
     id={label} 
     name={label} 
     value={label.toLowerCase()}
    onChange={(e)=>{handlerGenre(e.target.value, e.target.checked) } } />
    <label htmlFor={label} className='elMargin'>{label}</label>
    </div>
  );
}
export default Checkbox;