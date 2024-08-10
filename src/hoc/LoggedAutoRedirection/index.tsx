import { useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "contexts/auth"

const LoggedAutoRedirection = (
	Component: React.ComponentType<any>,
	options?: { pathname: string },
) => {
	const Wrapper = (props: any) => {
		const navigate = useNavigate()
		const { user } = useContext<any>(AuthContext)

		useEffect(() => {
			if (user.logged) {
				navigate(options?.pathname || "/dashboard")
			}
		}, [user.logged, navigate, options?.pathname])

		if (user.logged) return null
		return <Component {...props} />
	}

	return Wrapper
}

export default LoggedAutoRedirection
