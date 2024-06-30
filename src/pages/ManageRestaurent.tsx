import RestaurentProfileForm from '../forms/RestaurentProfileForm'
import { useCreateMyRestaurant } from '../api/MyRestapi'
const ManageRestaurent = () => {
    const {createRest,isLoading} = useCreateMyRestaurant()
  return <RestaurentProfileForm onSave={createRest} isLoading = {isLoading}/>
}

export default ManageRestaurent