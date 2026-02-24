import { useParams } from "react-router-dom"


function BuyProduct() {

    const { productname } = useParams()
   
    

  return (
    <>
      <div>
        <button>Comprar {productname}</button>
      </div>
    </>
  )
}

export default BuyProduct