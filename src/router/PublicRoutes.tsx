import ForgotPasswordLayout from "layouts/AuthLayout/ForgotPasswordLayout";
import ResetPassword from "pages/Auth/accout/ResetPassword";
import ValidateDoctor from "pages/Doctor/DoctorRegistration/ValidateDoctor";
import * as React from "react";
import { Route } from "react-router-dom";
import IsAlreadyLoggedInHoc from "../hoc/IsAlreadyLoggedInHoc";
import LoginLayout from "../layouts/AuthLayout/LoginLayout";
import SignupLayout from "../layouts/AuthLayout/SignupLayout";
import MainLayout from "../layouts/MainLayout";
import ValidateClinic from "../pages/Clinic/ClinicRegistration/ValidateClinic";
import CustomerSelection from "../pages/CustomerSelection";
import Error from "../pages/Error";
import Landing from "../pages/Landing";
import Payment from "../pages/Payment";
import PaymentSuccess from "../pages/PaymentSuccess";
import PaymentFailed from "../pages/PaymentFailed";

const routes = [
	{
		path: "/provider/activate",
		element: <ValidateClinic />
	},
	{
		path: "/provider/user/activate",
		element: <ValidateDoctor />
	},
	{
		path: "/register/:user",
		element: <SignupLayout />
	},
	{
		path: "/login/:user",
		element: <LoginLayout />
	},
	{
		path: "*",
		element: <Error />
	},
	{
		path: "forgot-password",
		element: <ForgotPasswordLayout />
	},
	{
		path: "account/reset/finish",
		element: <ResetPassword />
	},
	{
		path: "/payments/:id",
		element: <Payment />
	},
	{
		path: "/payment/success",
		element: <PaymentSuccess />
	},
	{
		path: "/payment/failed",
		element: <PaymentFailed />
	}
];
const PublicRoutes = (
	<>
		<Route path="/" element={<MainLayout />}>
			<Route index element={<Landing />} />
			<Route path={"/"} element={<IsAlreadyLoggedInHoc />}>
				<Route path={"register"} element={<CustomerSelection />} />
				<Route path={"login"} element={<CustomerSelection />} />
			</Route>
		</Route>

		{routes.map((route, idx) => (
			<React.Fragment key={idx}>
				<Route path={route.path} element={route.element} />
			</React.Fragment>
		))}

		{/*<Route path={"/clinic/activate"} element={<ValidateClinic/>}/>*/}
	</>
);

export default PublicRoutes;
