import SettingsTab from "components/common/SettingsTab";
import { Route } from "react-router-dom";
import IsAuthHoc from "../hoc/IsAuthHoc";
import ClinicDashboardLayout from "../layouts/DashboardLayout/ClinicDashboardLayout";
import DoctorDashboardLayout from "../layouts/DashboardLayout/DoctorDashboardLayout";
import GeneralDashboardLayout from "../layouts/GeneralDashboardLayout";
import AppointmentView from "../pages/Appointment";
import ClinicBilling from "../pages/Clinic/ClinicDashboard/ClinicBilling";
import ClinicDashboard from "../pages/Clinic/ClinicDashboard/ClinicDashboard";
import ClinicDoctors from "../pages/Clinic/ClinicDashboard/ClinicDoctors";
import ClinicPatients from "../pages/Clinic/ClinicDashboard/ClinicPatients";
import ClinicPharmacy from "../pages/Clinic/ClinicDashboard/ClinicPharmacy";
import ClinicProfile from "../pages/Clinic/ClinicDashboard/ClinicProfile";
import ClinicRadiology from "../pages/Clinic/ClinicDashboard/ClinicRadiology";
import ClinicUserManagement from "../pages/Clinic/ClinicDashboard/ClinicUserManagement";
import DoctorDashboard from "../pages/Doctor/DoctorDashboard/DoctorDashboard";
import DoctorProfile from "../pages/Doctor/DoctorDashboard/DoctorProfile";
import DoctorSchedule from "../pages/Doctor/DoctorDashboard/DoctorSchedule";
import DoctorDBPatient from '../pages/Doctor/DoctorDashboard/DoctorDBPatient';
import DoctorDBAppointments from '../pages/Doctor/DoctorDashboard/DoctorDBAppointments'; 

import GeneralDashboard from "../pages/GeneralDashboard";
import GeneralDashboardCalendar from "../pages/GeneralDashboardCalendar";
import ProviderProfile from "../pages/ProviderProfile";
import ClinicEntity from "../pages/Clinic/ClinicDashboard/ClinicEntity";
// recepitonist views
import ReceptionistDBLayout from "../layouts/ReceptionistDBLayout/ReceptionistDBLayout";
import ReceptionistDBAppointments from "../pages/Receptionist/ReceptionistDBAppointments";
import ReceptionistDBCalender from "../pages/Receptionist/ReceptionistDBCalender";
import ReceptionistDBDoctor from "../pages/Receptionist/ReceptionistDBDoctor";
import ReceptionistDBHome from "../pages/Receptionist/ReceptionistDBHome";
import ReceptionistDBPatient from "../pages/Receptionist/ReceptionistDBPatient";
import DragNDrop from "pages/Receptionist/DragNDrop";
import LabDashboard from "pages/workFlow/Lab/LabDashboard";
import LabWorkFlow from "pages/workFlow/Lab/LabWorkFlow";
import LabLayout from "layouts/labLayout/LabLayout";

import PharmacistLayout from "layouts/PharmacistLayout/PharmacistLayout";
import PharmacistDashboard from "pages/workFlow/Pharmacist/PharmacistDashboard";
import PharmacistWorkFlow from "pages/workFlow/Pharmacist/PharmacistWorkFlow";
import RadiologyDashboard from "pages/workFlow/Radiology/RadiologyDashboard";
import RadiologyWorkFlow from "pages/workFlow/Radiology/RadiologyWorkFlow";
import RadiologyLayout from "layouts/RadiologLayout/RadiologyLayout";
import ClinicBillingDashboardLayout from "layouts/DashboardLayout/ClinicBillingDashboardLayout";
import ClinicBillingPayments from "pages/Clinic/ClinicDashboard/Billing/ClinicBillingPayments";
import LabUserManagement from "pages/workFlow/Lab/LabUserManagement";
import PharmacistUserManagement from "pages/workFlow/Pharmacist/PharmacistUserManagement";
import RadiologyUserManagement from "pages/workFlow/Radiology/RadiologyUserManagement";

const privateRoutes = (
	<>
		<Route path={"/dashboard"} element={<GeneralDashboardLayout />}>
			<Route index element={<GeneralDashboard />} />
			<Route path={"schedule"} element={<GeneralDashboardCalendar />} />
			<Route path={"profile"} element={<ProviderProfile />} />
			<Route path={"setting"} element={<SettingsTab />} />
		</Route>
		<Route
			path={"/dashboard/clinic"}
			element={
				<IsAuthHoc>
					<ClinicDashboardLayout />
				</IsAuthHoc>
			}
		>
			<Route index element={<ClinicDashboard />} />
			<Route path={"schedule"} element={<ReceptionistDBCalender />}></Route>
			<Route path={"patients"} element={<ClinicPatients />} />
			<Route path={"doctors"} element={<ClinicDoctors />} />
			<Route path={"pharmacy"} element={<ClinicPharmacy />} />
			<Route path={"radiology"} element={<ClinicRadiology />} />
			<Route path={"user_management"} element={<ClinicUserManagement />} />
			<Route path={"billing"} element={<ClinicBillingDashboardLayout/>}>
				<Route index element={<ClinicBilling/>}/>
				<Route path={"payments"} element={<ClinicBillingPayments/>}/>
			</Route>
			<Route path={"profile"} element={<ClinicProfile />} />
			<Route path={"setting"} element={<SettingsTab />} />
			<Route path={"appointments/:appointmentCode"} element={<AppointmentView />} />
			<Route path={"entity"} element={<ClinicEntity />} />
		</Route>

		<Route
			path={"/dashboard/doctor"}
			element={
				<IsAuthHoc>
					<DoctorDashboardLayout />
				</IsAuthHoc>
			}
		>
			<Route index element={<DoctorDashboard />}></Route>
			<Route path={"schedule"} element={<DoctorSchedule />}></Route>
			<Route path={"profile"} element={<DoctorProfile />}></Route>
			<Route path={"patients"} element={<DoctorDBPatient />}></Route>
			<Route path={"appointments"} element={<DoctorDBAppointments />}></Route>
			<Route path={"billing"} element={<ClinicBillingDashboardLayout/>}>
				<Route index element={<ClinicBilling/>}/>
				<Route path={"payments"} element={<ClinicBillingPayments/>}/>
			</Route>
			<Route path={"setting"} element={<SettingsTab />} />
			<Route path={"appointments/:appointmentCode"} element={<AppointmentView />} />
		</Route>

		{/* receptionist view */}
		<Route
			path={"/dashboard/receptionist"}
			element={
				<IsAuthHoc>
					<ReceptionistDBLayout />
				</IsAuthHoc>
			}
		>
			<Route index element={<ReceptionistDBHome />}></Route>
			<Route path={"schedule"} element={<ReceptionistDBCalender />}></Route>
			<Route path={"appointments"} element={<ReceptionistDBAppointments />}></Route>
			<Route path={"patients"} element={<ReceptionistDBPatient />}></Route>
			<Route path={"doctors"} element={<ReceptionistDBDoctor />}></Route>
			<Route path={"setting"} element={<SettingsTab />}></Route>
			<Route path={"appointments/:appointmentCode"} element={<AppointmentView />} />
			<Route path="dragndrop" element={<DragNDrop />} />

		</Route>
		
		<Route
			path="/dashboard/lab"
			element={
				<IsAuthHoc>
					<LabLayout />
				</IsAuthHoc>
			}
		>
			<Route index element={<LabDashboard />} />
			<Route path="setting" element={<SettingsTab />}/>
			<Route path="work_flow" element={<LabWorkFlow/>}/>
			<Route path="user_management" element={<LabUserManagement/>}/>
		</Route>

		<Route
			path="/dashboard/pharmacist"
			element={
				<IsAuthHoc>
					<PharmacistLayout />
				</IsAuthHoc>
			}
		>
			<Route index element={<PharmacistDashboard />} />
			<Route path="setting" element={<SettingsTab />}/>
			<Route path="work_flow" element={<PharmacistWorkFlow/>}/>
			<Route path="user_management" element={<PharmacistUserManagement/>}/>
		</Route>

		<Route
			path="/dashboard/radiologist"
			element={
				<IsAuthHoc>
					<RadiologyLayout />
				</IsAuthHoc>
			}
		>
			<Route index element={<RadiologyDashboard />} />
			<Route path="setting" element={<SettingsTab />}/>
			<Route path="work_flow" element={<RadiologyWorkFlow/>}/>
			<Route path="user_management" element={<RadiologyUserManagement/>}/>
		</Route>
	</>
);

export default privateRoutes;
