import { useParams } from "react-router-dom"

export default function Single() {
  const {id} = useParams();
  console.log(id, "ddddddddddd");
  return(
    <>
      <div>
        <h1>single</h1>
      </div>
    </>
  )
}