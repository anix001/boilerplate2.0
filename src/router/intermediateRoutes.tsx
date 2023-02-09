import { Route } from "react-router-dom";
import IsValidUserHoc from "../hoc/IsValidUserHoc";
import ClinicRegistrationComplete from "../pages/Clinic/ClinicRegistration/ClinicRegistrationComplete";
import EntityRegistrationComplete from "../pages/Entity/EntityRegistrationComplete";
import DoctorSignup from "../pages/Auth/DoctorSignup";
import ReceptionistRegister from "../pages/Receptionist/ReceptionistRegister";

const IntermediateRoutes = (
	<>
		<Route element={<IsValidUserHoc />}>
			<Route path={"/register/entity/complete"} element={<EntityRegistrationComplete />} />
			<Route path={"/register/clinic/complete"} element={<ClinicRegistrationComplete />} />
			<Route path={"/register/doctor"} element={<DoctorSignup />} />

			{/* receptionist flow */}
			<Route path={"/register/receptionist"} element={<ReceptionistRegister />} />
		</Route>
	</>
);

export default IntermediateRoutes;
