import Provider from "../context/Provider";
import RouteLogin from "../routes/RouteLogin";

export const Core = () => {
  return (
    <Provider>
    <RouteLogin/>
    </Provider>
  )
}

export default Core