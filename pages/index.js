import { Casa } from "./teste"

export default function Home(){
    return (
       <div>
          <h2>
            Viva Santana!
            {Casa()}
          </h2>
       </div>
    )
}