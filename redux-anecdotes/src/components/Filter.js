import { setFilter } from "../reducers/filterReducer"
import { connect } from "react-redux"

const Filter = ({setFilter}) => {
  // const dispatch = useDispatch()

  const handleChange = (event) => {
    setFilter(event.target.value)
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

const ConnectedFilter = connect(null, { setFilter })(Filter)

export default ConnectedFilter