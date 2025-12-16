import { use } from "react"
import { ProjectContext } from "../ProjectContext"
const Tickets = () => {
    const {prId} = use(ProjectContext)
    return (
        <div>
            <h1>Tickets Page - {prId}</h1>
        </div>
    )
}
export default Tickets