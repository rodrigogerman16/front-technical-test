import { useState, useEffect } from "react"

export default function Product(props) {  
      const [data, setData] = useState(null);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
      useEffect(() => {fetch('https://dummyjson.com/products/')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => {
        console.log(error);
        setError(error)
      })
      .finally( () => setLoading(false))      
      }, [])

      if (loading){
        return "loading..."
      }
      if (error){
        return "error"
      }
      
      const items = [];
      for (const i = 0; i < 10; i++){
        items.push(<div>{data.products[i].title}</div>)
        items.push(<div>{data.products[i].description}</div>)
        items.push(<div>{data.products[i].price}</div>)
      }

      return(
        <div className="ProductCard">
          {items}
        </div>
        
      )

}
