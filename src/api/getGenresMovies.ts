import getFetch from './getFetch'

const getGenresMovies=(objGenres:{
    28: boolean;
    16: boolean;
    35: boolean;
    14: boolean;
    878: boolean;
})=>{

    let url=''
    let sum=[];
    for (const [key, value] of Object.entries(objGenres)) {
        if(value) sum.push(key);
      }
      console.log('No choosed genre');
      
if(sum.length){ url='&with_genres='+ sum.join();

        const result = getFetch(url).then((obj)=>obj)
        .catch( (e)=>console.log('ups!!!' ,e) );
        
        console.log(result);
    }}

  
export default getGenresMovies;