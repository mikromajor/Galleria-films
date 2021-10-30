import './Checkbox.css';

const Checkbox=({label, nmb,handlerGenre}:{label:string; nmb:28|16|35|14|878 ;handlerGenre:(a:'28'|'16'|'35'|'14'|'878', b:boolean)=>void})=>{
  
  return (
    <div className='rowsMarg'>
     <input 
     type="checkbox" 
     id={label} 
     name={label} 
     value={nmb}
     onChange={(e)=>{let x=e.currentTarget.value;
      if(x==='28'||x==='16'||x==='35'||x==='14'||x==='878')
      handlerGenre(x, e.currentTarget.checked )}
     }

    // onChange={(e:React.FormEvent<HTMLInputElement>)=>{handlerGenre(e.currentTarget.value, e.currentTarget.checked ) }}
  
    />
    <label htmlFor={label} className='elMargin'>{label}</label>
    </div>
  );
}
export default Checkbox;